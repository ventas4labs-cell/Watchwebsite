-- Migration for Circle of Excellence Loyalty System

-- 1. Add tier tracking columns to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS tier_level text DEFAULT 'Member',
ADD COLUMN IF NOT EXISTS completed_orders_count integer DEFAULT 0;

-- 2. Create the function to recount orders and update tier
CREATE OR REPLACE FUNCTION public.recalculate_user_tier(target_email text)
RETURNS void AS $$
DECLARE
  target_user_id uuid;
  total_completed integer;
  new_tier text;
BEGIN
  -- Find the user ID based on the exact email
  SELECT id INTO target_user_id FROM auth.users WHERE email = target_email;
  
  IF target_user_id IS NULL THEN
    -- If order has no matching registered user, just exit silently
    RETURN;
  END IF;

  -- Count all 'Entregado' orders for this email
  SELECT count(*) INTO total_completed 
  FROM public.orders 
  WHERE customer_email = target_email AND status = 'Entregado';

  -- Determine the new tier
  IF total_completed >= 7 THEN
    new_tier := 'Curator';
  ELSIF total_completed >= 3 THEN
    new_tier := 'Collector';
  ELSE
    new_tier := 'Member';
  END IF;

  -- Update the profile
  UPDATE public.profiles 
  SET 
    completed_orders_count = total_completed,
    tier_level = new_tier
  WHERE id = target_user_id;

END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Create the Trigger Function
CREATE OR REPLACE FUNCTION public.trigger_recalculate_tier_on_order_update()
RETURNS trigger AS $$
BEGIN
  -- Only recalculate if the status changed to or from 'Entregado'
  IF (TG_OP = 'UPDATE' AND (NEW.status = 'Entregado' OR OLD.status = 'Entregado') AND NEW.status IS DISTINCT FROM OLD.status) 
     OR (TG_OP = 'INSERT' AND NEW.status = 'Entregado') THEN
     
     -- We use the customer_email from the order to link to the profile
     PERFORM public.recalculate_user_tier(NEW.customer_email);
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Attach Trigger to orders table
DROP TRIGGER IF EXISTS on_order_status_change_update_tier ON public.orders;
CREATE TRIGGER on_order_status_change_update_tier
  AFTER INSERT OR UPDATE ON public.orders
  FOR EACH ROW EXECUTE PROCEDURE public.trigger_recalculate_tier_on_order_update();

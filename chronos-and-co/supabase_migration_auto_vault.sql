-- Migration for Order Delivery Vault Automation

CREATE OR REPLACE FUNCTION public.trigger_add_order_to_vault_on_delivery()
RETURNS trigger AS $$
DECLARE
  target_user_id uuid;
  item jsonb;
  -- Determine if we should process
  DECLARE
    should_process boolean := false;
  BEGIN
    IF TG_OP = 'INSERT' THEN
      IF NEW.status = 'Entregado' THEN
        should_process := true;
      END IF;
    ELSIF TG_OP = 'UPDATE' THEN
      IF NEW.status = 'Entregado' AND OLD.status IS DISTINCT FROM 'Entregado' THEN
        should_process := true;
      END IF;
    END IF;

    IF should_process THEN
       -- Find the user ID based on the exact email
       SELECT id INTO target_user_id FROM auth.users WHERE email = NEW.customer_email;
       
       IF target_user_id IS NOT NULL THEN
         -- Iterate through order_items jsonb array
         FOR item IN SELECT * FROM jsonb_array_elements(NEW.order_items)
         LOOP
           INSERT INTO public.wishlist (user_id, product_id)
           VALUES (target_user_id, item->>'id')
           ON CONFLICT (user_id, product_id) DO NOTHING;
         END LOOP;
       END IF;
    END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Attach Trigger to orders table
DROP TRIGGER IF EXISTS on_order_delivery_add_to_vault ON public.orders;
CREATE TRIGGER on_order_delivery_add_to_vault
  AFTER INSERT OR UPDATE ON public.orders
  FOR EACH ROW EXECUTE PROCEDURE public.trigger_add_order_to_vault_on_delivery();

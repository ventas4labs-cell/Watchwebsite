-- Migration for Admin Coupon Generator Tool

-- Create the RPC function to allow admins to generate coupons securely by email
-- This requires SECURITY DEFINER to bypass RLS and read auth.users
CREATE OR REPLACE FUNCTION public.admin_generate_coupon_for_email(target_email text)
RETURNS text AS $$
DECLARE
  target_user_id uuid;
  new_coupon_code text;
  user_full_name text;
BEGIN
  -- 1. Find the user ID based on the exact email
  SELECT id INTO target_user_id FROM auth.users WHERE email = target_email;
  
  IF target_user_id IS NULL THEN
    RAISE EXCEPTION 'Usuario no encontrado: %', target_email;
  END IF;

  -- 2. Generate the unique code
  new_coupon_code := 'TIMELESS-' || public.generate_random_coupon_code(6);

  -- 3. Extract the user's name if missing in profiles
  SELECT raw_user_meta_data->>'full_name' INTO user_full_name FROM auth.users WHERE id = target_user_id;

  -- 4. Securely Update the profile record (Upsert if needed)
  INSERT INTO public.profiles (
    id,
    full_name,
    welcome_coupon_code,
    coupon_expiry
  )
  VALUES (
    target_user_id,
    user_full_name,
    new_coupon_code,
    now() + interval '48 hours'
  )
  ON CONFLICT (id) DO UPDATE SET
    welcome_coupon_code = EXCLUDED.welcome_coupon_code,
    coupon_expiry = EXCLUDED.coupon_expiry;

  -- 5. Return the generated code so the frontend can dispatch the email
  RETURN new_coupon_code;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

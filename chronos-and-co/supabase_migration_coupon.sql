-- Migration for Unique Coupon Generation System

-- 1. Add new columns to profiles table
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS welcome_coupon_code text,
ADD COLUMN IF NOT EXISTS coupon_expiry timestamp with time zone;

-- 2. Create function to generate random alphanumeric string
CREATE OR REPLACE FUNCTION public.generate_random_coupon_code(length integer)
RETURNS text AS $$
DECLARE
  chars text[] := '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z}';
  result text := '';
  i integer := 0;
BEGIN
  FOR i IN 1..length LOOP
    result := result || chars[1+random()*(array_length(chars, 1)-1)];
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- 3. Update the handle_new_user Trigger Function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  new_coupon_code text;
BEGIN
  -- Generate unique coupon code: TIMELESS-XXXXXX
  new_coupon_code := 'TIMELESS-' || public.generate_random_coupon_code(6);

  INSERT INTO public.profiles (
    id, 
    full_name, 
    created_at, 
    welcome_coupon_code, 
    coupon_expiry
  )
  VALUES (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    new.created_at,
    new_coupon_code,
    now() + interval '48 hours'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

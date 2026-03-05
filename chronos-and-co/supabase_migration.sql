-- Migration for High-end User Authentication & Portal

-- 1. Create profiles table linked to auth.users
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid references auth.users on delete cascade,
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING ( auth.uid() = id );

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING ( auth.uid() = id );

-- 2. Create Trigger Function to copy user on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger as $$
begin
  INSERT INTO public.profiles (id, full_name, created_at)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.created_at);
  return new;
end;
$$ language plpgsql security definer;

-- 3. Create Trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

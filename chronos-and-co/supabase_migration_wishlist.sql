-- Migration for 'My Vault' Wishlist Feature

-- 1. Create wishlist table
CREATE TABLE IF NOT EXISTS public.wishlist (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  product_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, product_id)
);

-- 2. Enable RLS
ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies
CREATE POLICY "Users can view own wishlist items"
  ON public.wishlist FOR SELECT
  USING ( auth.uid() = user_id );

CREATE POLICY "Users can insert own wishlist items"
  ON public.wishlist FOR INSERT
  WITH CHECK ( auth.uid() = user_id );

CREATE POLICY "Users can delete own wishlist items"
  ON public.wishlist FOR DELETE
  USING ( auth.uid() = user_id );

-- 4. Enable Realtime triggers
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table public.wishlist;

-- Migration for Admin Customer Vault Management

-- 1. Create a secure RPC to fetch all customers (joined auth.users and profiles)
CREATE OR REPLACE FUNCTION public.admin_get_all_customers()
RETURNS TABLE (
    id uuid,
    email varchar,
    full_name text,
    tier_level text,
    completed_orders_count integer,
    created_at timestamp with time zone
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        u.id,
        u.email::varchar,
        p.full_name,
        p.tier_level,
        p.completed_orders_count,
        u.created_at
    FROM auth.users u
    LEFT JOIN public.profiles p ON u.id = p.id
    ORDER BY u.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 2. Create a secure RPC to add an item to a user's vault (bypassing RLS)
CREATE OR REPLACE FUNCTION public.admin_add_to_vault(target_user_id uuid, target_product_id text)
RETURNS void AS $$
BEGIN
    INSERT INTO public.wishlist (user_id, product_id)
    VALUES (target_user_id, target_product_id)
    ON CONFLICT (user_id, product_id) DO NOTHING;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 3. Create a secure RPC to remove an item from a user's vault (bypassing RLS)
CREATE OR REPLACE FUNCTION public.admin_remove_from_vault(target_user_id uuid, target_product_id text)
RETURNS void AS $$
BEGIN
    DELETE FROM public.wishlist 
    WHERE user_id = target_user_id AND product_id = target_product_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

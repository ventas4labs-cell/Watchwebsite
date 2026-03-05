-- Migration for Checkout Coupon Integration

-- 1. Add coupon_used tracking flag to orders table
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS coupon_used boolean DEFAULT false;

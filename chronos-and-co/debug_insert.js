require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testOrderInsert() {
    console.log("Attempting to insert dummy order...");
    const dummyOrder = {
        customer_name: "Test User",
        customer_email: "test@example.com",
        customer_phone: "1234567890",
        customer_address: "123 Test St",
        tracking_number: "TMW-TEST-123",
        order_items: [{ id: "test-product-1", quantity: 1, price: 100 }],
        total_amount: 100,
        status: "Recibido",
        coupon_used: false
    };

    const { data, error } = await supabase
        .from('orders')
        .insert([dummyOrder])
        .select();

    if (error) {
        console.error("\n❌ INSERT FAILED!");
        console.error("Error Code:", error.code);
        console.error("Error Message:", error.message);
        console.error("Error Details:", error.details);
        console.error("Error Hint:", error.hint);
        console.error("Full Object:", error);
    } else {
        console.log("\n✅ INSERT SUCCESSFUL!");
        console.log("Data:", data);

        // Clean up
        await supabase.from('orders').delete().eq('tracking_number', 'TMW-TEST-123');
        console.log("Cleaned up dummy order.");
    }
}

testOrderInsert();

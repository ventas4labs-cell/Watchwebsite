async function testRpc() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/rpc/admin_get_all_customers';
    const apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'apikey': apikey,
                'Authorization': 'Bearer ' + apikey,
                'Content-Type': 'application/json'
            }
        });

        const data = await res.text();
        console.log("Status:", res.status);
        console.log("Response:", data);
    } catch (err) {
        console.error(err);
    }
}

testRpc();

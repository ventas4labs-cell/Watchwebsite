async function triggerEmail() {
    try {
        console.log("Mocking admin panel Entregado click...");
        const res = await fetch('http://localhost:8000/api/email/order-delivered', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerName: "Juan Test",
                email: "juank098123@gmail.com",
                trackingNumber: "TMW-9999-ABC",
                items: [{ brand: "Tissot", model: "PRX", quantity: 1, price: 500 }],
                total: 500,
                address: "123 Default Road",
                phone: "123456789"
            })
        });

        const text = await res.text();
        console.log("Server Response HTTP Status:", res.status);
        console.log("Server Raw Message:", text);
    } catch (e) {
        console.error("Script broke:", e);
    }
}

triggerEmail();

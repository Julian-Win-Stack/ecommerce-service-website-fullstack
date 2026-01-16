export async function checkoutBtnListener(){
    try{
        const res = await fetch('/api/checkout/create-session', {
            method: 'POST',
            credentials: 'include'
        })
        if (!res.ok){
            throw new Error('Checkout session creation failed');
        }
        const data = await res.json();
        console.log(data.url)
        window.location.href = data.url;

    }catch(err){
        console.error('Checkout error:', err);
    }
}
const checkoutBtn = document.getElementById('checkout-btn');
import { checkoutBtnListener } from './checkoutService.js';

checkoutBtn.addEventListener('click', async ()=>{
    await checkoutBtnListener();
})
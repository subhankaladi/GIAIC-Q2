"use strict";
function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    document.getElementById('tipAmount').textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
}

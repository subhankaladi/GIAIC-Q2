function calculateTip(): void {
    const billAmount = parseFloat((<HTMLInputElement>document.getElementById('billAmount')).value);
    const tipPercentage = parseFloat((<HTMLInputElement>document.getElementById('tipPercentage')).value);

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    document.getElementById('tipAmount')!.textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount')!.textContent = `$${totalAmount.toFixed(2)}`;
}

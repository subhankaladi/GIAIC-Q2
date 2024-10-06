"use strict";
function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;\':",.<>?';
    let validChars = '';
    if (includeUppercase)
        validChars += uppercaseLetters;
    if (includeLowercase)
        validChars += lowercaseLetters;
    if (includeNumbers)
        validChars += numbers;
    if (includeSymbols)
        validChars += symbols;
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
    }
    document.getElementById('generatedPassword').value = generatedPassword;
}
function copyToClipboard() {
    const password = document.getElementById('generatedPassword').value;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    });
}

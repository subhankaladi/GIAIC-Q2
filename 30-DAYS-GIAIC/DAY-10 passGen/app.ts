function generatePassword(): void {
    const length = parseInt((<HTMLInputElement>document.getElementById('passwordLength')).value);
    const includeUppercase = (<HTMLInputElement>document.getElementById('uppercase')).checked;
    const includeLowercase = (<HTMLInputElement>document.getElementById('lowercase')).checked;
    const includeNumbers = (<HTMLInputElement>document.getElementById('numbers')).checked;
    const includeSymbols = (<HTMLInputElement>document.getElementById('symbols')).checked;

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;\':",.<>?';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseLetters;
    if (includeLowercase) validChars += lowercaseLetters;
    if (includeNumbers) validChars += numbers;
    if (includeSymbols) validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
    }

    (<HTMLInputElement>document.getElementById('generatedPassword')).value = generatedPassword;
}

function copyToClipboard(): void {
    const password = (<HTMLTextAreaElement>document.getElementById('generatedPassword')).value;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    });
}

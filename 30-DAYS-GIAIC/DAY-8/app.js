"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorInfo = document.getElementById('colorInfo');
    colorPicker.addEventListener('input', function () {
        updateDisplay();
    });
    function updateDisplay() {
        const color = colorPicker.value;
        colorDisplay.style.backgroundColor = color;
        colorInfo.textContent = `Hex: ${color} | RGB: ${hexToRgb(color)}`;
    }
    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
    }
});
function copyToClipboard() {
    const colorInfo = document.getElementById('colorInfo');
    navigator.clipboard.writeText(colorInfo.textContent || '');
    alert('Color info copied to clipboard!');
}

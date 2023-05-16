let messageElement = document.getElementById('message');
let lastkeyElement = document.getElementById('lastKey');
let charDisplay = document.getElementById('charactersLeft');

 //顯示最後一個打的鍵盤按鍵
messageElement.addEventListener('keyup', (event) => {
    lastkeyElement.textContent = `最後一個key:${event.key},keycode:${event.code}`;

 //顯示剩餘的還能輸入的字
    let textEntered = messageElement.value
    let counter = 180-textEntered.length
    charDisplay.textContent = `還剩下:${counter}個字`
});


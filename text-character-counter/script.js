const maxChar = 100;
let textArea = document.getElementById('textArea');
let counter = document.getElementById('counter');
let remaining = document.getElementById('remaining');
let msgArea = document.getElementById('msgArea');
textArea.maxLength = maxChar;
remaining.textContent = ' | Remaining : '+maxChar;
textArea.addEventListener('input', function(){
    let charLength = textArea.value.length;
    counter.textContent = 'Character count : '+charLength;
    remaining.textContent = ' | Remaining : '+(maxChar-charLength);
    if (charLength >= maxChar){
        msgArea.style.color = 'red';
        msgArea.textContent = "You've reached the character limit!";
    } else {
        msgArea.textContent = '';
    }
})
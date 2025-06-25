let count = 0;
let display = document.getElementById('counterDisplay');
let incrementBtn = document.getElementById('incrementBtn');
let resetBtn = document.getElementById('resetBtn');
let msgArea = document.getElementById('msgArea');
incrementBtn.addEventListener('click', function(){
    count++;
    display.textContent = 'Count : ' + count;
    if (count % 5 == 0){
        msgArea.textContent = 'You clicked the button ' + count + ' times!';
    } else {
        msgArea.textContent = '';
    }
})
resetBtn.addEventListener('click', function(){
    count = 0;
    display.textContent = 'Count : '+count;
    msgArea.textContent = '';
})
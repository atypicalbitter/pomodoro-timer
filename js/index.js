const startEl = document.getElementById('start'); 
const stopEl = document.getElementById('stop'); 
const pauseEl = document.getElementById('pause'); 
const resetEl = document.getElementById('reset'); 
const timerEl = document.getElementById('timer'); 

function startTimer() {
    console.log('start')
}
function stopTimer() {
    console.log('stop')
}
function pauseTimer() {
    console.log('pause')
}
function resetTimer() {
    console.log('reset')
}

startEl.addEventListener('click', startTimer)
stopEl.addEventListener('click', stopTimer)
pauseEl.addEventListener('click', pauseTimer)
resetEl.addEventListener('click', resetTimer)

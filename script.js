
Notification.requestPermission().then(function(result) {
    console.log(result);
});

let setCountDownInterval

function startCountDown(minutes){
    
    let totalTimeInSeconds = minutes * 60
    setCountDownInterval = setInterval(function () {
        
        let displaySeconds = (totalTimeInSeconds % 60).toString().padStart(2, "0") 
        let displayMinutes = Math.floor(totalTimeInSeconds / 60).toString().padStart(2, "0")
        renderTimer(displayMinutes,displaySeconds)

        totalTimeInSeconds--;
        finishInterval(totalTimeInSeconds,setCountDownInterval)
    },1000)

}

function start() {
    const btnStart= document.querySelector(".js-start")
    btnStart.addEventListener("click",(e=>{
        console.log("Start Events")
        alert("The countdown has begun","You can do it")
        clearInterval(setCountDownInterval)
        startCountDown(45)
    }))
}

init()

function cancel() {
    const btnStart= document.querySelector(".js-cancel")
    btnStart.addEventListener("click",(e=>{
        console.log("Start cancel")
        clearInterval(setCountDownInterval)
        startCountDown(0)
    }))
}

function alert(title,body){
    var options = {body: body}
    var n = new Notification(title,options);
}

function renderTimer(minutes,seconds) {
    const timer = document.querySelector('.js-timer')
    timer.innerHTML = `<p class="time">${minutes}:${seconds}</p><p class="msg">You can do it!</p>`
}

function finishInterval(totalTime,interval) {
    if (totalTime < 0) {
        alert("Time's up","take a break")
        clearInterval(interval)
    };
}

function listeners(){
    start()
    cancel()
}

function init() {
    renderTimer("00","00")
    listeners()
}




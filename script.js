window.onload = function () {

    var second = 00;
    var tens = 00;
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var buttonStart = document.getElementById('btn-start');
    var buttonStop = document.getElementById('btn-stop');
    var buttonReset = document.getElementById('btn-reset');
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        
    }
}
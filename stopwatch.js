window.onload = function () {
    var startButton = document.getElementById("start")
    var stopButton = document.getElementById("stop")
    var resetButton = document.getElementById("reset")

    var secondsHTML = document.getElementById("secs")
    var secs = 0
    var micsHTML = document.getElementById("mics")
    var mics = 0
    var Interval

    startButton.onclick = function () {
        if (!Interval) { Interval = setInterval(startTimer, 10) }
    };

    stopButton.onclick = function () {
        if (Interval) { stopTimer() }
    }

    function stopTimer() {
        clearInterval(Interval)
        Interval = null
    }

    resetButton.onclick = function () {
        if (Interval || mics > 0 || secs > 0) {
            stopTimer()
            secs = 0
            mics = 0
            secondsHTML.innerHTML = "00"
            micsHTML.innerHTML = "00"
        }
    }

    function startTimer() {
        mics++
        if (secs < 10) { secondsHTML.innerHTML = "0" + secs }
        else { secondsHTML.innerHTML = secs }

        if (mics < 10) { micsHTML.innerHTML = "0" + mics }
        else { micsHTML.innerHTML = mics }

        if (mics >= 99) { secs++; mics = -1 }

    };
}
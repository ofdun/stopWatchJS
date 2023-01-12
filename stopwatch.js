window.onload = function () {
    var startButton = document.getElementById("start")
    var stopButton = document.getElementById("stop")
    var resetButton = document.getElementById("reset")

    var seconds = document.getElementById("secs")
    var secs = 0
    var micros = document.getElementById("mics")
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
            seconds.innerHTML = "00"
            micros.innerHTML = "00"
        }
    }

    function startTimer() {
        mics++
        if (secs < 10) { seconds.innerHTML = "0" + secs }
        else { seconds.innerHTML = secs }

        if (mics < 10) { micros.innerHTML = "0" + mics }
        else { micros.innerHTML = mics }

        if (mics >= 99) { secs++; mics = -1 }

    };
}
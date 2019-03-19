
window.onload = function () {
    $("#first-button").click(hideFirst);
    $("#second-button").click(showAnswers);
    // $("#third").click(showThird);
    hideSecond();

    var count = 90
    var clock;

    function hideFirst() {
        $("#first").hide();
        $("#second").show();
        $("#third").hide()
        startTimer();
    }
    function hideSecond() {
        // $("#first").hide();
        $("#second").hide();
        $("#third").hide();

    }
    function showAnswers() {
        $("#third").show();
        $("#second").hide();

    }
    function startTimer() {
        clock = setInterval(counter, 1000);
        timeConverter(count)


    }
    function counter() {
        count--;
        $("#clock").text("Time Remaining: " + timeConverter(count))
        if (count === 0) {
            clearInterval(clock);
            $("#second").hide();
            $("#third").show();
            
        }
        // console.log(count);
        console.log(timeConverter(count));
    }
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
}
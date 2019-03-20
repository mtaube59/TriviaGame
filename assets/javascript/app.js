
window.onload = function () {
    $("#first-button").click(hideFirst);
    // $("#second-button").click(showAnswers);
    // $("#third").click(showThird);
    hideSecond();

    var count = 90;
    var clock;
    var correct = 0;
    console.log(correct);
    var incorrect = 0;

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
        clearInterval(clock);
        score();
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
            answerChecker()

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

    function answerChecker() {
        var q1Value = $("input[name='question-1']:checked").val();
    // console.log(q1Value);
    if (q1Value === "Picard") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q2Value = $("input[name='question-2']:checked").val();
    if (q2Value === "Defiant") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q3Value = $("input[name='question-3']:checked").val();
    if (q3Value === "Whales") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q4Value = $("input[name='question-4']:checked").val();
    if (q4Value === "Shatner") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q5Value = $("input[name='question-5']:checked").val();
    if (q5Value === "Borg") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q6Value = $("input[name='question-6']:checked").val();
    if (q6Value === "Klingon") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q7Value = $("input[name='question-7']:checked").val();
    if (q7Value === "Flute") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q8Value = $("input[name='question-8']:checked").val();
    if (q8Value === "Delta") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q9Value = $("input[name='question-9']:checked").val();
    if (q9Value === "Data") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    var q10Value = $("input[name='question-10']:checked").val();
    if (q10Value === "Ricardo") {
        correct++;
        console.log(correct);
    }
    else {
        incorrect++;
        console.log(incorrect);
    }
    showAnswers();
    }
    function score() {

        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);
    }
$("#second-button").click(function () {

    answerChecker();




    
    
})
}
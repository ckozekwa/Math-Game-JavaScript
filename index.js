

var playing = false;
var score;
var action;
var timer;
var correctAnswer;



// If we click on the start/reset 
document.getElementById("start-reset").onclick = function () {

    // if we are playing 
    if (playing == true) {

        location.reload();

    } else { // if we are not playing 

        playing = true;

        score = 0;

        document.getElementById("scoreValue").innerHTML = score;

        show("timer");

        timer = 60;

        hide("gameOver");

        document.getElementById("start-reset").innerHTML = "Reset Game";

        //start countdown

        startCountdown();

        // generate question and multiple answers
        generateQA();

    }
}
// functions

// start counter

for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {
                score++;

                document.getElementById("scoreValue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);

                generateQA();
            } else {
                hide("correct");
                show("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }
        }

    }


    function startCountdown() {
        action = setInterval(function () {
            timer -= 1;

            document.getElementById("timeremainingvalue").innerHTML = timer;
            if (timer == 0) {
                stopCountDown();
                show(("gameOver"))

                document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";
                hide("timer");
                hide("correct");
                hide("wrong");
                playing = false;

                document.getElementById("start-reset").innerHTML = "Start Game";
            }
        }, 1000);
    }

    //stop counter

    function stopCountDown() {
        clearInterval(action);
    }

    // hide an elemnt

    function hide(Id) {
        document.getElementById(Id).style.display = "none";
    }

    // show an element

    function show(Id) {
        document.getElementById(Id).style.display = "block";

    }

    function generateQA() {
        var x = 1 + Math.round(9 * Math.random());
        var y = 1 + Math.round(9 * Math.random());
        correctAnswer = x * y;
        document.getElementById("question").innerHTML = x + "x" + y;
        var correctPosition = 1 + Math.round(3 * Math.random());


        document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

        var answers = [correctAnswer];

        for (i = 1; i < 5; i++) {
            if (i != correctPosition) {
                var wrongAnswer;
                do {

                    wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));

                } while (answers.indexOf(wrongAnswer) > -1);
                document.getElementById("box" + i).innerHTML = wrongAnswer;
                answers.push(wrongAnswer);

            }
        }
    }
}

// reload page

//show countdown box
// reduce time by 1sec in loops
//time left?
//yes => continue 
//no => game over
//change button to reset
//generate a new question
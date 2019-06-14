$(document).ready(function () {

    //Start game on user click of start buttom
    $("#start-button").on("click", gameSetup.startTimer);

});

let gameSetup = {

    //Set timer to 60 seconds
    timeRemaining: 60,

    //Timer Start, Show Questions, Hide Start page
    startTimer: function () {
        $("#timer").text("Time Remaining: " + gameSetup.timeRemaining);
        setInterval(gameSetup.countdown, 1000);
        $("#start-page").hide();
        trivia.displayQuestions();
    },

    //Timer countdown, UI update, Stop time at 0

    countdown: function () {
        gameSetup.timeRemaining--;
        $("#timer").text("Time Remaining: " + gameSetup.timeRemaining);
        if (gameSetup.timeRemaining === 0) {
            gameSetup.stopTimer();
            $("#timer").empty();
        }
    },

    //Stop Timer

    stopTimer: function () {
        clearInterval();
        trivia.checkAnswers();
    },

    //Show Results Page

    showResults: function (numCorrect, numIncorrect, numUnanswered) {
        $("#end-page").show();
        $("#questions-box").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct-answers").text("Number of correct answers: " + numCorrect);
        $("#incorrect-answers").text("Number of incorrect answers: " + numIncorrect);
        $("#unanswered").text("Number of skipped questions: " + numUnanswered);
    }
}

    //Build out questions page and scoring

    let trivia = {
        //Get Questions from array and loop, then display on page
        displayQuestions: function () {
            let divContainer = $("#questions-box");
            let answerGroup = $(".form-check");
            divContainer.append("<h2>Here's Your Questions! Go!</h2>");
            
            for (let i = 0; i  < questionStore.length; i++) {
                
                divContainer.append('<div id="question">' + questionStore[i].question + '</div>');

                let answer1 = questionStore[i].answers[0];
                let answer2 = questionStore[i].answers[1];
                let answer3 = questionStore[i].answers[2];
                let answer4 = questionStore[i].answers[3];
                let answer5 = questionStore[i].answers[4];
                let answer6 = questionStore[i].answers[5];

                divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
                divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
                divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
                divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer4 + '</label></div>');
                divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer5 + '</label></div>');
                divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer6 + '</label></div>');
            }

            //Create a button to click when questions are done

            divContainer.append("<button class='btn btn-outline-info' id='done-button' type='submit'>Done</button>");
            $("#done-button").on("click", gameSetup.stopTimer);
            },

            //Check Answers
            checkAnswers: function() {
                let correctAnswer;
                let userAnswer;
                let numCorrect = 0;
                let numIncorrect = 0;
                let numUnanswered = 0;

                //Verify answers and apply scoring
                for (i = 0; i < questionStore.length; i++) {
                    correctAnswer = questionStore[i].correct;
                    userAnswer = $('input[id=radio'+i+']:checked + label').text();
              
                    if (userAnswer === correctAnswer) {
                      numCorrect++;
                    } else if (userAnswer === "") {
                      numUnanswered++;
                    } else if (userAnswer !== correctAnswer) {
                      {
                        numIncorrect++;
                      }
                    }
                  }
                gameSetup.showResults(numCorrect, numIncorrect, numUnanswered);
            },
    }

        //Array for Questions and Answers
        let questionStore = [
        {
            question: "Who is the first clone we meet?",
            answers: ["Sarah Manning", "Cosima", "Alison Hendrix", "Beth Childs", "Helena", "Delphine"],
            correct: "Sarah Manning"
        },
        {
            question: "What company owns the Dyad Institute?",
            answers: ["The Umbrella Corporation", "Topside Corporation", "Sweetwater Corporation", "Project X Industries", "Blackwater Corporation", "Dyad Institute for Cloning"],
            correct: "Topside Corporation"
        },
        {
            question: "What is the name of Sarah's brother?",
            answers: ["Finn", "Freddy", "Felix", "Fernando", "Alex", "Trevor"],
            correct: "Felix"
        },
        {
            question: "Who are the people assigned to oversee the clones?",
            answers: ["Advisors", "Handlers", "Mentors", "Monitors", "Bosses", "Counselors"],
            correct: "Monitors"
        },
        {
            question: "Which clone is a doctoral candidate?",
            answers: ["Sarah", "Rachel", "Delphine", "Cosima", "Alison", "Helena"],
            correct: "Cosima"
        },
        {
            question: "Who is Beth's partner on the police force?",
            answers: ["Anthony", "Andrew", "Adam", "Art", "Antonio", "Andy"],
            correct: "Art"
        },
        {
            question: "Who is the head of the Dyad Institute when the series begins?",
            answers: ["Dr. Johanssen", "Dr. Hamilton", "Dr. Malone", "Dr. Kirkman", "Dr. Smithson", "Dr. Leekie"],
            correct: "Dr. Leekie"
        },
        {
            question: "Who is the genetic original for the clones?",
            answers: ["Mrs. S", "Kendall", "Sarah", "Alison", "Cosima", "Beth"],
            correct: "Kendall"
        },
        {
            question: "What year did Orphan Black premiere?",
            answers: ["2016", "2010", "2008", "2015", "2013", "2009"],
            correct: "2013"
        },
        {
            question: "Which of these topics is the series about?",
            answers: ["Cloning", "Magic", "Vampires", "Adoption", "Child Care", "Assassins"],
            correct: "2013"
        },
        ]
    


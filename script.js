// // Declare variables
// var time = 60;
// var timer;
// var currentQuestion = 0;
// var score = 0;

// // Get DOM elements
// var startBtn = document.getElementById("start");
// var questionEls = document.querySelectorAll(".question");
// var quizEl = document.querySelector(".quiz");
// var timeEl = document.getElementById("time");
// var scoreEl = document.getElementById("score");
// var initialsEl = document.getElementById("initials");
// var submitBtn = document.getElementById("submit");
// var scoreForm = document.getElementById("score-form");

// // Start quiz when start button is clicked
// startBtn.addEventListener("click", startQuiz);

// // Function to start quiz
// function startQuiz() {
//   // Hide start button
//   startBtn.style.display = "none";
//   // Show first question
//   showQuestion(currentQuestion);
//   // Start timer
//   timer = setInterval(countdown, 1000);
// }

// // Function to display question
// function showQuestion(index) {
//   // Hide all questions
//   questionEls.forEach(function(question) {
//     question.style.display = "none";
//   });
//   // Display current question
//   questionEls[index].style.display = "block";
// }

// // Function to handle answer selection
// function selectAnswer() {
//   // Check if answer is correct
//   if (this.value === questionEls[currentQuestion].querySelector("input[type=hidden]").value ) {
//     score++;
//   } else {
//     // Deduct 5 seconds for wrong answer
//     time -= 5;
//   }
//   // Check if quiz is over
//   currentQuestion++;
//   if (currentQuestion === questionEls.length || time <= 0) {
//     endQuiz();
//   } else {
//     showQuestion(currentQuestion);
//   }
// }

// // Function to end quiz
// function endQuiz() {
//   // Stop timer
//   clearInterval(timer);
//   // Hide quiz
//   quizEl.style.display = "none";
//   // Show score and initials form
//   scoreEl.textContent = "Score: " + score;
//   document.querySelector(".score").style.display = "block";
// }

// // Function to handle timer countdown
// function countdown() {
//   time--;
//   timeEl.textContent = "Time Remaining: " + time + " seconds";
//   if (time <= 0) {
//     endQuiz();
//   }
// }

// // Add event listener to each answer input
// var answerInputs = document.querySelectorAll("input[type=radio]");
// answerInputs.forEach(function(input) {
//   input.addEventListener("click", selectAnswer);
// });

// // Handle submission of initials and score
// scoreForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   // Save initials and score to local storage
//   var initials = initialsEl.value.toUpperCase();
//   var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
//   highScores.push({
//     initials: initials,
//     score: score
//   });
//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   // Redirect to high scores page
//   window.location.href = "highscores.html";
// });

var startQuizButtonElement = document.getElementById("start-button");
// var questionContainerElement = document.getElementById("question-container");
// var answerContainerElement = document.getElementById("answer-container");
var currentQuestion = 0;

var questionsList = [
  {
    questionText: ">Where was I born?",
    choices: [" Taiwan", "Hong Kong", "USA", "China"],
    correctAnswer: "USA",
  },
  {
    questionText: "What is my favorite type of Food?",
    choices: ["Taiwanese", "Korean", "Cantonese", "American"],
    correctAnswer: "Cantonese",
  },
  {
    questionText:
      "Who is my favorite Artist?",
    choices: ["Boris Brejcha", "FKJ", "Diplo", "Ark Patrol"],
    CorrectAnswer: "Boris Brejcha",
  },
  {
    questionText: 'Who is the GOAT?',
    choices: ["Lebron James", "Michael Jordan", "Kobe Bryant", "Kareem Abdul-Jabbar"],
    CorrectAnswer: "Lebron James",
  },
  {
    questionText: "What is the best car manufacturer?",
    choices: ["BMW", "Porsche", "Ferrari", "Lamborghini"],
    CorrectAnswer: "Ferrari",
  },


];

// function startQuiz() {
//   console.log("I click the button");
// }
// console.log(startQuizButtonElement);
// startQuizButtonElement.addEventListener("click", startQuiz);

// function startQuiz() {
//   console.log("I click the button");
//   startQuizButtonElement.style.display = "none";
//   createQuizStage();
//   createQuestionElements();
// }
// function createQuizStage() {
//   var quizContainer = document.createElement("article");
//   quizContainer.classList.add("quiz-container");
//   document.body.appendChild(quizContainer);
// }
// function createQuestionElements(currentQuestionData) {
//   var currentQuestionText = currentQuestionData.question;
//   var questionTextBox = document.createElement("h3");
//   var choiceOne = document.createElement("button");
//   var choiceTwo = document.createElement("button");
//   var choiceThree = document.createElement("button");
//   var choiceFour = document.createElement("button");
//   var choiceContainer = document.createElement("section");
//   questionTextBox.textContent = "Question text goes here!";
//   choiceOne.textContent = "choice 1";
//   choiceTwo.textContent = "choice 2";
//   choiceThree.textContent = "choice 3";
//   choiceFour.textContent = "choice 4";
//   var quizContainer = document
//     .querySelector(".quiz-container")
//     .appendChild(questionTextBox);
//   quizContainer.appendChild(choiceContainer);
//   choiceContainer.appendChild(choiceOne);
//   choiceContainer.appendChild(choiceTwo);
//   choiceContainer.appendChild(choiceThree);
//   choiceContainer.appendChild(choiceFour);
// }

var questionsTextElement = document.getElementById("questions-text");
var choicesContainerElement = document.getElementById("choices-container")


function main(){ 
    questionsTextElement.textContent = questionsList[0].questionText;
    for(var i = 0; i < questionsList[0].choices.length; i++){
        var newChoiceButton = document.createElement("button");
        newChoiceButton.textContent = questionsList[0].choices[i];
        choicesContainerElement.append(newChoiceButton);
    }
}

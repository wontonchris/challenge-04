var currentQuestion = 0;
var timeLeft = 30;
var userScore = 0;

var questionsList = [
  {
    questionText: "Where was I born?",
    choices: ["Taiwan", "Hong Kong", "USA", "China"],
    correctAnswer: "USA",
  },
  {
    questionText: "What is my favorite type of Food?",
    choices: ["Taiwanese", "Korean", "Cantonese", "American"],
    correctAnswer: "Cantonese",
  },
  {
    questionText: "Who is my favorite Artist?",
    choices: ["Boris Brejcha", "FKJ", "Diplo", "Ark Patrol"],
    correctAnswer: "Boris Brejcha",
  },
  {
    questionText: "Who is the GOAT?",
    choices: ["Lebron James", "Michael Jordan", "Kobe Bryant", "Kareem Abdul-Jabbar"],
    correctAnswer: "Lebron James",
  },
  {
    questionText: "What is the best car manufacturer?",
    choices: ["BMW", "Porsche", "Ferrari", "Lamborghini"],
    correctAnswer: "Ferrari",
  }
];
//start button
var startQuizButtonElement = document.getElementById("start-button");
startQuizButtonElement.addEventListener("click", startQuiz);

//start quiz
function startQuiz() {
  startQuizButtonElement.style.display = "none";
  createQuestionElements(questionsList[currentQuestion]);
  var timeOut = setInterval(function() {
    timeLeft--;
    document.getElementById("timer-container").textContent = "Time left: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timeOut);
      alert("Time's up!");
    }
  }, 1000);
}
//create question elements
function createQuestionElements(currentQuestionData) {
  var quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = "";
//creating section / h# reduce append
  var currentQuestionText = currentQuestionData.questionText;
  var questionTextBox = document.createElement("h3");
  var choiceContainer = document.createElement("section");
  questionTextBox.textContent = currentQuestionText;
  quizContainer.appendChild(questionTextBox);
  quizContainer.appendChild(choiceContainer);


  //creating buttons
  for (var i = 0; i < currentQuestionData.choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestionData.choices[i];
    choiceContainer.appendChild(choiceButton);
    //added event listener
    choiceButton.addEventListener("click", function() {
      checkAnswer(this, currentQuestionData);
    });
  }
}
//check answer
function checkAnswer(selectedChoice, currentQuestionData) {
  if (selectedChoice.textContent === currentQuestionData.correctAnswer) {
    console.log("Correct answer");
    userScore += 20;
  } else {
    console.log("Incorrect answer");
    userScore -= 20;
  }
  //added -time left
  currentQuestion++;
  if (currentQuestion < questionsList.length) {
    createQuestionElements(questionsList[currentQuestion]);
  } else {
    console.log("Quiz completed");
    displayScore();
  }
}
//display score
function displayScore() {
  var initials = prompt("Congratulations! You finished with a score of " + userScore + ". Please enter your initials to save your score:");
  localStorage.setItem(initials, userScore);
  window.location.href = "highscores.html";
}

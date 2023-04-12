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

var startQuizButtonElement = document.getElementById("start-button");
startQuizButtonElement.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("I click the button");
  startQuizButtonElement.style.display = "none";
  createQuestionElements(questionsList[currentQuestion]);
  setInterval(function() {
    timeLeft--;
    document.getElementById("timer-container").innerHTML = "Time left: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval();
      alert("Time's up!");
    }
  }, 1000);
}

function createQuizStage() {
  var quizContainer = document.createElement("article");
  quizContainer.classList.add("quiz-container");
  document.body.appendChild(quizContainer);
}

function createQuestionElements(currentQuestionData) {
  var currentQuestionText = currentQuestionData.questionText;
  var questionTextBox = document.createElement("h3");
  var choiceOne = document.createElement("button");
  var choiceTwo = document.createElement("button");
  var choiceThree = document.createElement("button");
  var choiceFour = document.createElement("button");
  var choiceContainer = document.createElement("section");
  questionTextBox.textContent = currentQuestionText;
  choiceOne.textContent = currentQuestionData.choices[0];
  choiceTwo.textContent = currentQuestionData.choices[1];
  choiceThree.textContent = currentQuestionData.choices[2];
  choiceFour.textContent = currentQuestionData.choices[3];
  var quizContainer = document.querySelector(".quiz-container");
  quizContainer.appendChild(questionTextBox);
  quizContainer.appendChild(choiceContainer);
  choiceContainer.appendChild(choiceOne);
  choiceContainer.appendChild(choiceTwo);
  choiceContainer.appendChild(choiceThree);
  choiceContainer.appendChild(choiceFour);
  choiceOne.addEventListener("click", function() {
    checkAnswer(choiceOne, currentQuestionData);
  });
  choiceTwo.addEventListener("click", function() {
    checkAnswer(choiceTwo, currentQuestionData);
  });
  choiceThree.addEventListener("click", function() {
    checkAnswer(choiceThree, currentQuestionData);
  });
  choiceFour.addEventListener("click", function() {
    checkAnswer(choiceFour, currentQuestionData);
  });
 }

 function checkAnswer(selectedChoice, currentQuestionData) {
  if (selectedChoice.textContent === currentQuestionData.correctAnswer) {
    console.log("Correct answer");
    userScore += 20;
  }
  currentQuestion++;
  if (currentQuestion < questionsList.length) {
    createQuestionElements(questionsList[currentQuestion]);
  } else {
    console.log("Quiz completed");
    displayScore();
  }
}

setInterval(function() {
  timeLeft--;
  document.getElementById("timer-container").innerHTML = "Time left: " + timeLeft;
  if (timeLeft <= 0) {
    clearInterval();
    alert("Time's up!");
    displayScore();
  }
}, 1000);

function displayScore() {
  var initials = prompt("Congratulations! You finished with a score of " + userScore + ". Please enter your initials to save your score:");
  localStorage.setItem(initials, userScore);
  window.location.href = "highscores.html";
}



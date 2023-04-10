// get all the questions
var questions = document.querySelectorAll('.question');

// initialize variables
var currentQuestion = 0;
var score = 0;
var time = 30;
var timer;


// function to display the current question
function displayQuestion() {
  // hide all questions
  questions.forEach(question => {
    question.style.display = 'none';
  });

  // display current question
  questions[currentQuestion].style.display = 'block';
}

// function to start the timer
function startTimer() {
  timer = setInterval(() => {
    time--;
    document.getElementById('time').textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

// function to end the quiz
function endQuiz() {
  // hide quiz and show score
  document.querySelector('.quiz').style.display = 'none';
  document.querySelector('.score').style.display = 'block';

  // display score
  document.getElementById('final-score').textContent = score;
}

// function to check the answer
function checkAnswer(answer) {
  const correctAnswer = questions[currentQuestion].querySelector('input[type="hidden"]').value;

  if (answer === correctAnswer) {
    score++;
  }

  // go to next question or end quiz if last question
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    clearInterval(timer);
    endQuiz();
  }
}

// add event listeners to radio buttons
questions.forEach(question => {
  var radioButtons = question.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
      checkAnswer(radioButton.value);
    });
  });
});

// start the quiz
displayQuestion();
startTimer();

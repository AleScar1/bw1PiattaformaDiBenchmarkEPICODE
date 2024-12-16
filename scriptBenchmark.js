const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let score = 0; 
let currentQuestionIndex = 0; 
let timerInterval;
const totalTime = 10;
let timeRemaining = totalTime;

function displayQuestion() {
const question = questions[currentQuestionIndex];
document.getElementById("question").textContent = question.question;
const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3"), document.getElementById("button4")];

// Resetta i bottoni
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "inline-block";
}

if (question.type === "boolean") {
    buttons[0].textContent = question.correct_answer;
    buttons[1].textContent = question.incorrect_answers[0];
    buttons[2].style.display = "none";
    buttons[3].style.display = "none";
} else {
    const answers = [question.correct_answer, ...question.incorrect_answers];
    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = shuffledAnswers[i];
    }
}

document.getElementById("questionNumber").textContent = `QUESTION ${currentQuestionIndex + 1} di ${questions.length}`;
startTimer(); // Avvia il timer
}

function checkAnswer(selectedButton) {
const question = questions[currentQuestionIndex];
if (selectedButton && selectedButton.textContent === question.correct_answer) {
    score++;
}

currentQuestionIndex++;

if (currentQuestionIndex < questions.length) {
    displayQuestion();
} else {
    clearInterval(timerInterval); // Ferma il timer
    showFinalScore();
}
}

function showFinalScore() {
alert(`Il tuo punteggio finale è: ${score} su ${questions.length}`);
}

document.getElementById("button1").addEventListener("click", function () {
checkAnswer(this);
});
document.getElementById("button2").addEventListener("click", function () {
checkAnswer(this);
});
document.getElementById("button3").addEventListener("click", function () {
checkAnswer(this);
});
document.getElementById("button4").addEventListener("click", function () {
checkAnswer(this);
});

const timerTextElement = document.getElementById("timer-text");
const progressCircle = document.getElementById("progress");
const circumference = 2 * Math.PI * 45;
progressCircle.style.strokeDasharray = circumference;

function updateTimer() {
if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    checkAnswer(null);
    return;
}
timerTextElement.textContent = `Time remaining: ${timeRemaining} seconds`;
const progress = (timeRemaining / totalTime) * circumference;
progressCircle.style.strokeDashoffset = progress;
timeRemaining--;
}

function startTimer() {
clearInterval(timerInterval);
timeRemaining = totalTime;
progressCircle.style.strokeDashoffset = circumference;
updateTimer();
timerInterval = setInterval(updateTimer, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
displayQuestion();
});




function checkAnswer(selectedButton) {
  const question = questions[currentQuestionIndex];
  if (selectedButton && selectedButton.textContent === question.correct_answer) {
      score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
      displayQuestion();
  } else {
      clearInterval(timerInterval); 
      showResultPage(); 
  }
}

// Mostra la pagina dei risultati con un grafico
function showResultPage() {
  document.body.innerHTML = '';

  
  document.body.style.cssText = `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Inter', sans-serif;
      background-image: url('assets/bg.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: white;
      text-align: center;
      margin: 0;
      padding: 0;
      overflow: hidden;
  `;

  
  const title = document.createElement('h1');
  title.textContent = 'Risultato del Quiz';
  title.style.cssText = `
      font-family: 'Outfit', sans-serif;
      font-size: 3rem;
      color:rgb(255, 255, 255);
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
      margin-bottom: 20px;
  `;
  document.body.appendChild(title);

  
  const canvas = document.createElement('canvas');
  canvas.id = 'resultChart';
  canvas.style.cssText = `
      max-width: 380px;
      width: 80%;
      aspect-ratio: 1 / 1; 
      margin: 10px 0 10px 90px;
  `;
  document.body.appendChild(canvas);

  
  const scoreText = document.createElement('p');
  scoreText.textContent = `Il tuo punteggio finale è ${score} su ${questions.length}`;
  scoreText.style.cssText = `
      font-size: 1.5rem;
      margin-top: 10px;
      color: #faffd1;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  `;
  document.body.appendChild(scoreText);

  
  const retryButton = document.createElement('button');
  retryButton.textContent = 'Ricomincia il Quiz';
  retryButton.style.cssText = `
      margin-top: 20px;
      padding: 12px 25px;
       margin-left: 80px;
      font-size: 1rem;
      color: white;
      background-color: #00FFFF;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: all 0.3s ease;
      box-shadow: 0px 0px 10px rgba(9, 247, 247, 0.7);
  `;
  retryButton.addEventListener('mouseenter', () => {
      retryButton.style.backgroundColor = '#FF8C85';
      retryButton.style.boxShadow = '0px 0px 15px rgba(14, 234, 250, 0.7)';
  });
  retryButton.addEventListener('mouseleave', () => {
      retryButton.style.backgroundColor = '#D20094';
      retryButton.style.boxShadow = '0px 0px 10px rgba(9, 241, 230, 0.7)';
  });
  retryButton.addEventListener('click', () => location.reload());
  document.body.appendChild(retryButton);

  
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Corrette', 'Sbagliate'],
          datasets: [{
              data: [score, questions.length - score],
              backgroundColor: ['#4caf50', '#f44336'],
              hoverOffset: 4, 
          }],
      },
      options: {
          plugins: {
              legend: {
                  position: 'bottom',
                  labels: {
                      color: 'white',
                      font: { size: 14 }
                  }
              },
              title: {
                  display: true,
                  text: 'Statistiche del Quiz',
                  color: 'white',
                  font: { size: 18 }
              }
          },
          responsive: true,
          maintainAspectRatio: true, 
      }
  });
}


 
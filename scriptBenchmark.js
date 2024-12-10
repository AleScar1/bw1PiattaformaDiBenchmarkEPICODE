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
    
    
    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        document.getElementById("question").textContent = question.question;
        document.getElementById("button1").textContent = question.correct_answer;
        document.getElementById("button2").textContent = question.incorrect_answers[0];
        document.getElementById("button3").textContent = question.incorrect_answers[1];
        document.getElementById("button4").textContent = question.incorrect_answers[2];
    
  
        const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3"), document.getElementById("button4")];
        const answers = [question.correct_answer, ...question.incorrect_answers];
        const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
    
        
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = shuffledAnswers[i];
        }
    
        
        document.getElementById("questionNumber").textContent = `QUESTION ${currentQuestionIndex + 1} di ${questions.length}`;
    }
    
    
    function checkAnswer(selectedButton) {
        const question = questions[currentQuestionIndex];
        if (selectedButton.textContent === question.correct_answer) {
            score++; 
        }
        
      
        currentQuestionIndex++;
    
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showFinalScore();
        }
    }
    
    function showFinalScore() {
        alert(`Il tuo punteggio finale è: ${score} su ${questions.length}`);
    }
    
    document.getElementById("button1").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button2").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button3").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button4").addEventListener("click", function() {
        checkAnswer(this);
    });
    
    displayQuestion();

  
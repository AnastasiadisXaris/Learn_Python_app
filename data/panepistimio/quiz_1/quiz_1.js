
// Δεδομένα quiz από JSON
const quizData = {
    quizzes: [
      {
        title: "Quiz 1",
        questions: [
          {
            question: "Γράψτε μία συνάρτηση που υπολογίζει τη n-οστή τιμή του Fibonacci χρησιμοποιώντας αναδρομή. Ποια είναι η σωστή απάντηση;",
            options: [
              "return fibonacci(n-1) + fibonacci(n-2)",
              "return n * fibonacci(n-1)",
              "return fibonacci(n) - fibonacci(n-1)",
              "return n + fibonacci(n-1)"
            ],
            correctAnswer: "return fibonacci(n-1) + fibonacci(n-2)"
          },
          {
            question: "Ποιο από τα παρακάτω είναι το πρώτο βήμα για την ταξινόμηση QuickSort;",
            options: [
              "Επιλέγουμε ένα pivot και χωρίζουμε τα δεδομένα",
              "Ταξινομούμε όλα τα δεδομένα με αύξουσα σειρά.",
              "Συγκρίνουμε όλα τα στοιχεία με το pivot.",
              "Υπολογίζουμε τη μέση τιμή όλων των δεδομένων."
            ],
            correctAnswer: "Επιλέγουμε ένα pivot και χωρίζουμε τα δεδομένα"
          },
          {
            question: "Ποιος είναι ο σωστός τρόπος για να υπολογίσετε την ένωση δύο συνόλων Python;",
            options: [
              "set1.union(set2)",
              "set1 & set2",
              "set1 - set2",
              "set1 + set2"
            ],
            correctAnswer: "set1.union(set2)"
          }
        ]
      }
    ]
  };
  
  let currentQuizIndex = 0;
  let currentQuestionIndex = 0;
  
  // Αναφορά στα στοιχεία DOM
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const feedbackContainer = document.getElementById("feedback-container");
  const submitButton = document.getElementById("submit-btn");
  
  // Εμφάνιση της τρέχουσας ερώτησης
  function loadQuestion() {
    const currentQuiz = quizData.quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  
    // Εμφάνιση ερώτησης
    questionContainer.innerText = currentQuestion.question;
  
    // Εμφάνιση επιλογών
    optionsContainer.innerHTML = ""; // Καθαρισμός προηγούμενων επιλογών
    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerHTML = `
        <input type="radio" id="option-${index}" name="quiz-option" value="${option}">
        <label for="option-${index}">${option}</label>
      `;
      optionsContainer.appendChild(optionElement);
    });
  
    feedbackContainer.innerText = ""; // Καθαρισμός feedback
  }
  
  // Έλεγχος απάντησης και μετάβαση στην επόμενη ερώτηση
  submitButton.addEventListener("click", () => {
    const currentQuiz = quizData.quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  
    // Εύρεση επιλεγμένης απάντησης
    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
  
    if (selectedOption) {
      const userAnswer = selectedOption.value;
  
      // Έλεγχος αν είναι σωστή η απάντηση
      if (userAnswer === currentQuestion.correctAnswer) {
        feedbackContainer.innerText = "Σωστή απάντηση!";
      } else {
        feedbackContainer.innerText = `Λάθος απάντηση! Η σωστή είναι: ${currentQuestion.correctAnswer}`;
      }
  
      // Μετάβαση στην επόμενη ερώτηση μετά από μικρή καθυστέρηση
      setTimeout(() => {
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
          currentQuestionIndex++;
          loadQuestion();
        } else {
          feedbackContainer.innerText = "Συγχαρητήρια! Ολοκληρώσατε το κουίζ.";
          submitButton.disabled = true;
        }
      }, 1500);
    } else {
      feedbackContainer.innerText = "Παρακαλώ επιλέξτε μία απάντηση!";
    }
  });
  
  // Αρχική φόρτωση
  loadQuestion();

// Επιλέγουμε το κουμπί επιστροφής
const backButton = document.getElementById("back-btn");

// Προσθέτουμε event listener στο κουμπί
backButton.addEventListener("click", () => {
  // Κλείνουμε το παράθυρο του κουίζ
  window.close();

  // Αν το παράθυρο δεν κλείνει (λόγω περιορισμών browser), ανακατευθύνουμε στη σελίδα βαθμίδας
  if (!window.closed) {
    window.location.href = "../quizzes_panepistimio.html"; // Διαδρομή για την επιστροφή
  }
});


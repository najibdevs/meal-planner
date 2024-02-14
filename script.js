const questions = [
  {
    question: "Do you have any dietary preferences?",
    answers: ["Vegan", "Vegetarian", "Paleo", "Keto"],
  },
  {
    question: "What are your main goals with this meal plan?",
    answers: ["Weight loss", "Muscle gain", "Maintenance", "Healthy eating"],
  },
  {
    question: "How much time do you prefer to spend on meal preparation?",
    answers: ["< 30 minutes", "1 hour", "2 hours", "> 2 hours"],
  },
  {
    question: "Would you like to exclude any ingredients?",
    answers: ["Nuts", "Gluten", "Dairy", "None"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");
  const okButton = document.querySelector(".ok-btn");
  let currentQuestionIndex = 0;
  let userAnswers = []; // Array to store user selections

  function loadQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;
    answerElement.innerHTML = ""; // Clear previous answers
    currentQuestion.answers.forEach((answer, idx) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.id = `answer${idx}`;
      input.name = "btn";
      input.value = answer;
      input.addEventListener("change", () => {
        userAnswers[currentQuestionIndex] = answer;
      });

      const label = document.createElement("label");
      label.setAttribute("for", `answer${idx}`);
      label.className = "btn";
      label.textContent = answer;

      answerElement.appendChild(input);
      answerElement.appendChild(label);
    });
  }

  loadQuestion(currentQuestionIndex);

  okButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      // Display user answers or perform further actions
      console.log(userAnswers)
    }
  });
});

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        choices: ["Paris", "Londres", "Berlin"],
        correctAnswer: 0
    },
    {
        question: "Combien de planètes y a-t-il dans le système solaire ?",
        choices: ["7", "8", "9"],
        correctAnswer: 1
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        choices: ["Atlantique", "Pacifique", "Indien"],
        correctAnswer: 1,
        image: "assets/images/image3.png" 
    },
    {
        question: "Qui a peint la Joconde ?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la capitale du Japon ?",
        choices: ["Shanghai", "Pékin", "Tokyo"],
        correctAnswer: 2
    },
    {
        question: "Combien de continents y a-t-il sur Terre ?",
        choices: ["4", "5", "7"],
        correctAnswer: 1
    },
    {
        question: "Quel est le plus grand désert du monde ?",
        choices: ["Sahara", "Gobi", "Antarctique"],
        correctAnswer: 0
    },
    {
        question: "Quel est le symbole chimique de l'or ?",
        choices: ["Ag", "Au", "Fe"],
        correctAnswer: 1
    },
    {
        question: "Qui a écrit 'Romeo et Juliette' ?",
        choices: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy"],
        correctAnswer: 0
    },
    {
        question: "Quelle planète est surnommée 'la planète rouge' ?",
        choices: ["Vénus", "Mars", "Jupiter"],
        correctAnswer: 1
    },
];

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const current = questions[currentQuestion];

    questionElement.textContent = current.question;
    choicesElement.innerHTML = "";

    if (current.image && currentQuestion === 2) {
        // Ajoutez l'image uniquement pour la question 3
        const imageElement = document.createElement("img");
        imageElement.src = current.image;
        choicesElement.appendChild(imageElement);
    }

    current.choices.forEach((choice, index) => {
        const choiceElement = document.createElement("div");
        choiceElement.textContent = choice;
        choiceElement.className = "choice";

        choiceElement.addEventListener("mouseover", () => {
            choiceElement.classList.add("hovered-choice");
        });

        choiceElement.addEventListener("mouseout", () => {
            choiceElement.classList.remove("hovered-choice");
        });

        choiceElement.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(choiceElement);
    });
}



function checkAnswer(choice) {
    if (choice === questions[currentQuestion].correctAnswer) {
        score++;
    } else {
        incorrectAnswers.push(currentQuestion); // Enregistrement des réponses incorrectes
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h1>Résultat :</h1><p>Score : ${score} sur ${questions.length}</p>`;

    if (incorrectAnswers.length > 0) {
        const incorrectAnswersList = incorrectAnswers.map((index) => {
            return `<li>${questions[index].question} : ${questions[index].choices[questions[index].correctAnswer]}</li>`;
        });

        const incorrectAnswersHTML = `<h2>Réponses incorrectes : </h2><ul>${incorrectAnswersList.join("")}</ul>`;

        quizContainer.innerHTML += incorrectAnswersHTML;
    }
}

loadQuestion();

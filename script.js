const questions = [
    {
        question: "Parmi ces extraits de code, laquelle comporte une syntaxe valide pour créer un paragraphe de texte ?",
        choices: [
            "<paragraph>Ceci est mon texte</paragraph>",
            "<p>Ceci est mon texte</p>",
            "<p value='Ceci est mon texte'>",
            "<body>Ceci est mon texte</body>"
        ],
        correctAnswer: 1
    },
    {
        question: "Vous avez une page index.html qui veut afficher l'image perroquet.png. Cette image se situe dans le dossier /images. Quel snippet de code permet d'afficher la photo ?",
        choices: [
            "<image src='images/perroquet.png' alt='Un perroquet mange une amande'>",
            "<img>'perroquet.png'</img>",
            "<img src='perroquet.png' alt='Un perroquet mange une amande'>",
            "<img src='images/perroquet.png' alt='Un perroquet mange une amande'>"
        ],
        correctAnswer: 3
    },
    {
        image: "assets/images/image3.png",
        question: "Dans ce bout de HTML, plusieurs erreurs ont été commises. Qu'est-ce qui ne va pas ?",
        choices: [
            "La source de l'image n'est pas précisée",
            "La balise <p> n'est pas fermée",
            "L'image ne possède pas d'attribut alt"
        ],
        correctAnswer: 1
    },
    {
        question: "Une valeur et un attribut permettent, ensemble, d'ouvrir un lien dans un nouvel onglet. Lesquels ?",
        choices: [
            "L'attribut  target",
            "L'attribut title",
            "L'attribut  blank"
        ],
        correctAnswer: 0
    },
    {
        question: "Parmi ces affirmations à propos des commentaires, laquelle est correcte ?",
        choices: [
            "En Javascript, on ouvre un commentaire avec <!--",
            "En HTML, on ferme un commentaire avec //",
            "Les commentaires ne sont pas visibles dans le code source d'une page HTML",
            "Il existe des raccourcis clavier selon l'éditeur de code pour commenter du code rapidement"
        ],
        correctAnswer: 3
    },
    {
        image: "assets/images/image6.png",
        question: "Quel bout de code permet d'obtenir le résultat de l'image ci-dessous ?",
        choices: [
            "<a href='http://lien.com' title='Ceci est un lien'>Cliquez pour voir</a>",
            "<a href='http://lien.com' title='Cliquez pour voir'>Ceci est un lien</a>",
            "<a href='http://lien.com' bulle='Cliquez pour voir'>Ceci est un lien</a>"
        ],
        correctAnswer: 0
    },
    {
        image: "assets/images/image7.png",
        question: "Quel bout de code correspond à l'affichage de la liste juste en dessous ?",
        choices: [
            "<ul><li>Paris</li><li>Taipei</li><li>Kyoto</li><li>Sydney</li></ul>",
            "<ol><li>Paris</li><li>Taipei</li><li>Kyoto</li><li>Sydney</li></ol>",
            "<li><ul>Paris</ul><ul>Taipei</ul><ul>Kyoto</ul><ul>Sydney</ul></li>"
        ],
        correctAnswer: 0
    },
    
    {
        image: "assets/images/image8.png",
        question: "Quel morceau de code permet de créer un lien vers la page 1 à la place du commentaire Insérer ici un lien vers la page 1 ?",
        choices: [
            "<a href='../page1.html'>Page 1</a>",
            "<a href='../dossier1/page1.html'>Page 1</a>",
            "<a href='./page1.html'>Page 1</a>",
            "<a href='page1.html'>Page 1</a>"
        ],
        correctAnswer: 0
    },
    {
        image: "assets/images/image9.png",
        question: "Comment faire pour que la couleur du titre ainsi que du paragraphe soient #ff1493 ?",
        choices: [
            "h1, p { color: #ff1493; }",
            ".h1, p {color: #ff1493;}",
            "h1 + p { color: #ff1493; }"
        ],
        correctAnswer: 0
    },
    {
        image: "assets/images/image10.png",
        question: "À partir de l'aperçu suivant, quelle propriété de texte a été appliquée dans les classes premier-paragraphe ou deuxieme-paragraphe ?",
        choices: [
            "text-decoration",
            "font-family",
            "text-align",
            "color"
        ],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'une Media Query en CSS ?",
        choices: [
            "Une requête pour interroger une base de données",
            "Une requête pour définir des styles en fonction des caractéristiques du périphérique",
            "Une requête pour effectuer des animations en CSS"
        ],
        correctAnswer: 1
    },
    {
        question: "Comment débutez-vous une Media Query dans une feuille de style CSS ?",
        choices: [
            "@media-query",
            "media-query",
            "@media"
        ],
        correctAnswer: 2
    },
    {
        question: "Quelle est la syntaxe pour appliquer des styles uniquement aux écrans d'une largeur maximale de 768 pixels ?",
        choices: [
            "@media screen and (max-width: 768px)",
            "@media (max-width: 768px) screen",
            "@media (width <= 768px) screen"
        ],
        correctAnswer: 0
    },
    {
        question: "Quelle est la syntaxe pour appliquer des polices téléchargées ?",
        choices: [
            "@font",
            "@font-face",
            "@new-font"
        ],
        correctAnswer: 1
    },
    {
        question: "Avec quel syntaxe écrit-on un commentaire en HTML ?",
        choices: [
            "// Mon Commentaire",
            "/* Mon Commentaire */",
            "< !-- mon commentaire -->"
        ],
        correctAnswer: 2
    },
    {
        question: "À quoi peut servir le JavaScript ?",
        choices: [
            "Mettre des fichiers en base de données",
            "Optimisation des performances du réseau",
            "Réaliser des animations"
        ],
        correctAnswer: 2
    },
    {
        question: "Quelle est la méthode recommandée pour inclure du CSS dans une page HTML ?",
        choices: [
            "a) Utiliser la balise <style>",
            "b) Utiliser la balise <link>",
            "c) Utiliser la balise <css>",
            "d) Utiliser la balise <format>"
        ],
        correctAnswer: 1
    },
    {
        question: "Quelle propriété CSS est utilisée pour définir la couleur du texte ?",
        choices: [
            "a) font-color",
            "b) text-color",
            "c) color",
            "d) font-style"
        ],
        correctAnswer: 2
    },
    {
        question: "Quelle propriété CSS est utilisée pour définir la taille de la police d'un texte ?",
        choices: [
            "a) font-size",
            "b) text-size",
            "c) size-font",
            "d) font-style"
        ],
        correctAnswer: 0
    },
    {
        question: "Quelle propriété CSS est utilisée pour définir l'espacement intérieur autour d'un élément ?",
        choices: [
            "a) padding",
            "b) space",
            "c) margin",
            "d) element-spacing"
        ],
        correctAnswer: 0
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

    if (current.image) {
        const imagesContainer = document.createElement("div"); // Créer un conteneur pour les images
        imagesContainer.className = "images-container"; // Ajouter une classe pour le conteneur
    
        const imageElement = document.createElement("img");
        imageElement.src = current.image;
    
        // Ajouter une classe aux images pour gérer leur style si nécessaire
        imageElement.className = "quiz-image";
    
        imagesContainer.appendChild(imageElement); // Ajouter l'image au conteneur
        choicesElement.appendChild(imagesContainer); // Ajouter le conteneur à l'élément des choix
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

    // Création des éléments HTML
    const resultHeading = document.createElement('h1');
    resultHeading.textContent = 'Résultat :';

    const scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = `Score : ${score} sur ${questions.length}`;


    quizContainer.appendChild(resultHeading);
    quizContainer.appendChild(scoreParagraph);

    if (incorrectAnswers.length > 0) {
        const incorrectAnswersList = incorrectAnswers.map((index) => {
            return `${questions[index].question} : ${questions[index].choices[questions[index].correctAnswer]}`;
        });

        const incorrectAnswersHeading = document.createElement('h2');
        incorrectAnswersHeading.textContent = 'Réponses incorrectes :';

        const incorrectAnswersUL = document.createElement('ul');
        incorrectAnswersList.forEach(answerText => {
            const listItem = document.createElement('li');
            listItem.textContent = answerText;
            incorrectAnswersUL.appendChild(listItem);
        });

        quizContainer.appendChild(incorrectAnswersHeading);
        quizContainer.appendChild(incorrectAnswersUL);
        
    }
}

loadQuestion();
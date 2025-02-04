document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const questionElement = document.querySelector(".front .question");
  const answerElement = document.querySelector(".back .answer");
  const answerTextElement = document.querySelector(".back p:last-of-type");
  const newCaseButton = document.querySelector("#new-case");
  const closeCardFront = document.getElementById("close-card");
  const closeCardBack = document.getElementById("close-card-back");
  const taskbarQuizButton = document.querySelector(".button #quiz");
  const notepadContainer = document.getElementById("notepad-container");
  const notepadExitButton = document.querySelector(".notepad-exit .button-exit");
  const notepadText = document.getElementById("notepad-text");
  const explorerButton = document.querySelector("#taskbar-buttons .button:nth-child(2)");

  // Tableau des questions et réponses
  const questions = [
    {
      question: "Une cyberattaque plonge une ville dans l’obscurité.",
      answer: "Réalité ! En 2015, une attaque contre le réseau électrique ukrainien a causé une panne massive, affectant des milliers de foyers.",
      source: "https://www.bbc.com/news/technology-38573074"
    },
    {
      question: "Un cybercriminel pirate un casino en passant par l’aquarium connecté du hall.",
      answer: "Réalité ! En 2017, des cybercriminels ont exploité une faille dans un aquarium connecté pour voler des données sensibles d’un casino.",
      source: "https://www.forbes.com/sites/leemathews/2017/07/21/hackers-used-a-fish-tank-to-steal-data-from-a-casino"
    },
    {
      question: "Un adolescent pirate le système de défense d’un pays et lance une simulation de guerre nucléaire.",
      answer: "Fiction ! Il s'agit du film 'Wargames', dans lequel un jeune hacker déclenche involontairement une alerte nucléaire en piratant un superordinateur militaire.",
      source: "https://www.imdb.com/title/tt0086567/"
    },
    {
      question: "Une entreprise est victime d’un ransomware qui verrouille tous ses fichiers et demande une rançon en bitcoins.",
      answer: "Réalité ! Le ransomware WannaCry en 2017 a affecté des milliers d’entreprises et d’organisations dans le monde entier.",
      source: "https://www.csoonline.com/article/3227906/what-is-wannacry-ransomware-how-does-it-work.html"
    },
    {
      question: "Un hacker détourne une voiture autonome et la conduit à distance.",
      answer: "Réalité ! En 2015, des chercheurs ont réussi à pirater une Jeep Cherokee et à la contrôler à distance.",
      source: "https://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/"
    },
    {
      question: "Une IA prend le contrôle d’une station spatiale.",
      answer: "Fiction ! Il s'agit du film '2001 : L'Odyssée de l'espace, dans lequel l’ordinateur HAL 9000 se retourne contre l’équipage humain, mettant en péril leur mission.",
      source: "https://www.imdb.com/fr/title/tt0062622/"
    },
    {
      question: "Un virus informatique créé pour saboter une centrale nucléaire.",
      answer: "Réalité ! Stuxnet, un virus découvert en 2010, a été conçu pour perturber les centrifugeuses nucléaires iraniennes.",
      source: "https://www.wired.com/2014/11/countdown-to-zero-day-stuxnet/"
    },
    {
      question: "Un hacker pirate un parc et libère des espèces",
      answer: "Fiction ! Il s'agit du film 'Jurassic Park', dans lequel Dans le film, Dennis Nedry pirate les systèmes de sécurité du parc pour voler des embryons, causant le chaos et permettant aux dinosaures de s’échapper.",
      source: "https://www.imdb.com/fr/title/tt0107290/"
    },
    {
      question: "Un malware infecte des smartphones via un simple SMS.",
      answer: "Réalité ! Le malware Stagefright, découvert en 2015, exploitait une vulnérabilité des MMS pour infecter des téléphones Android. Il s'agit aujourd'hui d'une technique de piratage très répandu.",
      source: "https://www.lemonde.fr/pixels/article/2015/07/29/stagefright-le-bug-inquietant-qui-pourrait-toucher-presque-tous-les-telephones-android_4703509_4408996.html"
    },
    {
      question: "Des hackers volent des millions de dollars en cryptomonnaies via un logiciel malveillant.",
      answer: "Réalité ! En 2018, des plateformes d’échange comme Coincheck ont subi des attaques, entraînant le vol de millions en cryptomonnaies.",
      source: "https://www.lefigaro.fr/secteur/high-tech/2018/01/29/32001-20180129ARTFIG00096-cryptomonnaies-le-japon-sanctionne-coincheck-apres-le-plus-gros-braquage-virtuel.php"
    },
    {
      question: "Un hacker prend le contrôle de robots pour attaquer des humains.",
      answer: "Fiction ! Il s'agit de la saga de films, 'Terminator', dans lequel une IA nommée Skynet contrôle des robots et des drones pour éliminer les humains.",
      source: "https://www.imdb.com/fr/title/tt0088247/"
    },
    {
      question: "Un hacker modifie l’esprit des gens via des implants connectés.",
      answer: "Fiction ! Il s'agit du film 'Ghost in the Shell, dans lequel Dans cet univers, des hackers manipulent des cerveaux augmentés pour contrôler ou modifier leurs souvenirs.",
      source: "https://www.imdb.com/fr/title/tt0113568/"
    },
    {
      question: "Un malware cause l’explosion d’une usine pétrolière.",
      answer: "Réalité ! Le malware Triton, découvert en 2017, ciblait des systèmes industriels critiques et pouvait potentiellement causer des explosions.",
      source: "https://www.lemondeinformatique.fr/actualites/lire-le-malware-triton-tres-actif-dans-le-sabotage-industriel-74960.html"
    },
    {
      question: "Une cyberattaque force une centrale nucléaire à être mise hors service.",
      answer: "Réalité ! En 2014, une cyberattaque en Corée du Sud a ciblé une centrale nucléaire, forçant son arrêt temporaire.",
      source: "https://www.lesechos.fr/2014/12/seoul-deplore-la-cyberattaque-qui-a-vise-une-centrale-nucleaire-316011"
    },
    {
      question: "Un hacker vole l'identité numérique d'une personne",
      answer: "Fiction ! Il s'agit du film 'Skyfall', dans lequel un cybercriminel vole une liste d'agents sous couverture, mettant en danger leurs vies.",
      source: "https://www.imdb.com/fr/title/tt1074638/"
    },
    {
      question: "Un hacker contrôle toutes les caméras d’une ville pour espionner des citoyens.",
      answer: "Fiction ! Il s'agit de la série 'Person of Interest, dans lequel une intelligence artificielle utilise les caméras de surveillance pour surveiller et prédire des crimes.",
      source: "https://www.imdb.com/fr/title/tt1839578/"
    },
    {
      question: "Un cybercriminel utilise un réfrigérateur connecté pour envoyer des spams.",
      answer: "Réalité ! En 2014, des appareils IoT, y compris des réfrigérateurs connectés, ont été utilisés dans des botnets pour envoyer des spams.",
      source: "https://www.france24.com/fr/20140117-proofpoint-internet-objet-botnet-refrigerateur-connecte-pirates-informatique-spam"
    },
    {
      question: "Un hacker pirate le système de contrôle d’un casino via des aquariums connectés.",
      answer: "Réalité ! En 2017, des hackers ont accédé aux données sensibles d’un casino en passant par un aquarium connecté.",
      source: "https://www.lefigaro.fr/secteur/high-tech/2018/04/16/32001-20180416ARTFIG00278-un-casino-pirate-a-cause-d-un-thermometre-dans-un-aquarium.php"
    }
   
  ];

  let score = 0; // Initialisation du score
  const scoreElement = document.getElementById("score");
  
  
  let currentQuestionIndex = 0;
  let isFlipped = false;  // Variable pour savoir si la carte est retournée

  // Fonction pour mettre à jour la question et la réponse
  function updateQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
    answerElement.textContent = questions[currentQuestionIndex].answer.split(" ! ")[0] + " !";  // "Réalité !" ou "Fiction !"
    answerTextElement.textContent = questions[currentQuestionIndex].answer.split(" ! ")[1]; // Partie après "Réalité !" ou "Fiction !"
    `<br><a href="${questions[currentQuestionIndex].source}" target="_blank">Source</a>`;

  }

  // Fonction pour gérer le changement de question après le clic sur "Nouveau cas"
  function changeQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    card.classList.remove('flipped');
    isFlipped = false;
    updateQuestion();
  }
  

  // Fonction pour réinitialiser le score
  function resetScore() {
    score = 0;
    scoreElement.textContent = score;
  }

  // Fonction pour afficher la carte (au clic sur "Quiz.exe" dans la barre des tâches)
  taskbarQuizButton.addEventListener('click', () => {
    card.style.display = 'flex';
    card.classList.remove('flipped');
    isFlipped = false;
    updateQuestion();
  });

  // Ajout d'un événement au clic sur le bouton "Nouveau cas"
  newCaseButton.addEventListener('click', () => {
    card.classList.add('flipped');
    isFlipped = true;

    setTimeout(() => {
      changeQuestion();
      card.classList.remove('flipped');
      isFlipped = false;
    }, 800);
  });

  // Ajout d'un événement au clic sur les boutons de réponse pour flip la carte
  document.querySelectorAll('.answer-button').forEach(button => {
    button.addEventListener('click', () => {
      card.classList.add('flipped');
      isFlipped = true;
    });
  });

  // Ajout de l'événement pour fermer la carte avec la croix sur la face avant
  closeCardFront.addEventListener('click', () => {
    card.style.display = 'none';
    resetScore(); // Réinitialiser le score
  });

  // Ajout de l'événement pour fermer la carte avec la croix sur la face arrière
  closeCardBack.addEventListener('click', () => {
    card.style.display = 'none';
    resetScore(); // Réinitialiser le score
  });

  // Ajoute un event listener aux boutons de réponse
  document.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", (event) => {
      const userAnswer = event.target.id; // "reality" ou "fiction"
      const correctAnswer = answerElement.textContent.toLowerCase().includes("réalité") ? "reality" : "fiction";

      if (userAnswer === correctAnswer) {
        score++; // Augmente le score si la réponse est correcte
        scoreElement.textContent = score; // Met à jour l'affichage du score
      }

      // Retourne la carte pour montrer la réponse
      card.classList.add("flipped");
    });
  });

    // Fonction pour afficher le bloc-notes avec les sources
    function showNotepad() {
      notepadContainer.style.display = "block";
      // Remplir le bloc-notes avec les sources des réponses
      notepadText.innerHTML = questions.map(q => `<p><strong>${q.question}</strong><br>${q.answer}</p>`).join("");
    }
  
    // Fonction pour masquer le bloc-notes
    function hideNotepad() {
      notepadContainer.style.display = "none";
    }
  
    // Ajout d'un événement au clic sur le bouton "Explorer"
    explorerButton.addEventListener('click', showNotepad);
  
    // Ajout d'un événement au clic sur le bouton de fermeture du bloc-notes
    notepadExitButton.addEventListener('click', hideNotepad);

});

const startButton = document.getElementById("start-button");
const shutdownOverlay = document.getElementById("shutdown-overlay");

startButton.addEventListener("click", () => {
  if (shutdownOverlay.classList.contains("active")) {
    shutdownOverlay.classList.remove("active");
  } else {
    shutdownOverlay.classList.add("active");
  }
});


/* ==========================================================================
   CONTENU DU PORTFOLIO
   --------------------------------------------------------------------------
   Tout le texte du site vit ici. Chaque texte existe en deux langues :
   { fr: "…", en: "…" }.
   Les passages entre [[ ]] s'affichent surlignés : ce sont des éléments à
   compléter ou à valider avant l'envoi des candidatures.
   ========================================================================== */

const SITE = {
  // Passe à false quand tous les [[ ]] ont disparu : le bandeau
  // « Version de travail » disparaît alors.
  draft: false,
  name: "Maxime Cavallari",
  email: "maximecav4@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/Tatsu14" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/maxime-cavallari-adhara" },
    { label: "Instagram", url: null }   // [[compte artiste, quand il sera prêt]]
  ],

  // CV : déposer le PDF dans le dossier « cv », puis écrire son nom ci-dessous.
  // Tant que url vaut null, le bouton ne s'affiche pas.
  cv: {
    url: null,   // ex. "cv/CV-Maxime-Cavallari.pdf"
    label: { fr: "Télécharger mon CV", en: "Download my CV" }
  }
};

/* --------------------------------------------------------------------------
   ÉTUDES DE CAS (pages détaillées)
   -------------------------------------------------------------------------- */
const CASE_STUDIES = [
  {
    id: "proserpine",
    title: { fr: "Proserpine", en: "Proserpine" },
    tagline: {
      fr: "Savoir dans quelle poubelle jeter un emballage, en un seul scan.",
      en: "Know which bin a package goes in, with a single scan."
    },
    kind: { fr: "Application mobile (Android native et PWA)", en: "Mobile app (native Android and PWA)" },
    year: "2026",
    status: { fr: "Test fermé en préparation", en: "Closed testing in preparation" },
    meta: [
      { label: { fr: "Rôle", en: "Role" },
        value: { fr: "Recherche, conception et développement, seul", en: "Research, design and development, solo" } },
      { label: { fr: "Cadre", en: "Scope" },
        value: { fr: "Projet dans le cadre d'un cours de Design Thinking · moins de 2 mois · budget 0 € (utilisation d'outils gratuits)", en: "School project from Design Thinking course · under 2 months · €0 budget (use of free tools)" } },
      { label: { fr: "Technique", en: "Stack" },
        value: { fr: "Expo (React Native) · TypeScript · Firebase · V1 web : HTML, CSS, JavaScript", en: "Expo (React Native) · TypeScript · Firebase · Web V1: HTML, CSS, JavaScript" } }
    ],
    links: [
      { label: { fr: "Ouvrir l’app", en: "Open the app" }, url: "https://proserpine.vercel.app" }
    ],
    cover: "images/proserpine-couverture.jpg",
    sections: [
      {
        title: { fr: "Contexte", en: "Context" },
        paragraphs: [{
          fr: "Proserpine est née d’une frustration personnelle : au quotidien, trier ses déchets ressemble trop souvent à une devinette. J’ai mené le projet seul, en moins de deux mois et sans budget, de la recherche jusqu’à une application utilisable.",
          en: "Proserpine started from a personal frustration: day to day, sorting waste too often feels like a guessing game. I ran the project solo, in under two months and with no budget, from research to a working app."
        }]
      },
      {
        title: { fr: "Le problème", en: "The problem" },
        paragraphs: [{
          fr: "Les consignes de tri imprimées sur les emballages sont floues et trop générales. Résultat : on hésite, on cherche… ou on abandonne. Et là où la poubelle est pesée et facturée, c’est le consommateur qui paie un suremballage qu’il n’a pas choisi.",
          en: "Sorting instructions printed on packaging are vague and too generic. So people hesitate, search… or give up. And where household waste is weighed and billed, consumers pay for over-packaging they never chose."
        }]
      },
      {
        title: { fr: "Ce que j’ai appris", en: "What I learned" },
        paragraphs: [{
          fr: "Avant d’écrire une ligne de code, j’ai formulé mes hypothèses (« Je pense que… pour… va permettre… ») et préparé un guide d’entretien, puis mené un entretien pour vérifier le besoin.",
          en: "Before writing a single line of code, I wrote down my hypotheses (“I believe that… for… will…”) and prepared an interview guide, then ran an interview to check the need."
        }, {
          fr: "Il a surtout confirmé une chose : l’envie de bien trier est là, et l’effort souvent aussi. Ce qui bloque, ce sont des informations trop floues et trop générales. Et personne n’a envie de faire de longues recherches juste pour savoir dans quelle poubelle jeter un emballage.",
          en: "It mainly confirmed one thing: people want to sort properly, and often make the effort. What stops them is information that is too vague and too generic. And nobody wants to dig through long searches just to know which bin a package goes in."
        }],
        callout: {
          fr: "Le frein, ce n’est pas la motivation. C’est l’accès à une information claire, au bon moment.",
          en: "The barrier isn’t motivation. It’s access to clear information, at the right moment."
        }
      },
      {
        title: { fr: "Décisions de conception", en: "Design decisions" },
        items: [
          { title: { fr: "Un seul geste", en: "One gesture" },
            text: { fr: "Scanner le code-barres suffit pour obtenir la consigne de tri : aucune recherche à faire.", en: "Scanning the barcode is enough to get the sorting instruction: no searching required." } },
          { title: { fr: "Zéro leçon de morale", en: "No lecturing" },
            text: { fr: "Pas de « éco » dans le nom, pas de culpabilisation : un ton direct, ludique et encourageant.", en: "No “eco” in the name, no guilt-tripping: a direct, playful, encouraging tone." } },
          { title: { fr: "Un créneau libre", en: "An open niche" },
            text: { fr: "Yuka parle santé, Greenly parle carbone : Proserpine se concentre sur la fin de vie de l’emballage.", en: "Yuka covers health, Greenly covers carbon: Proserpine focuses on the packaging’s end of life." } },
          { title: { fr: "Du web au natif", en: "From web to native" },
            text: { fr: "PWA au départ (facile, accessible) ; après quelques mois, version native : .apk, puis Play Store.", en: "A PWA at first, for ease and accessibility; after a few months, a move to native: .apk first, then the Play Store." } }
        ]
      },
      {
        title: { fr: "L’IA dans le projet", en: "AI in the project" },
        paragraphs: [{
          fr: "Tout le code de Proserpine est écrit par l’IA (Claude, Claude Code), à partir de mes instructions. Le reste est à moi : le problème, la cible, le ton, les fonctionnalités et chaque choix d’interface, que je valide un par un. L’IA m’a aussi aidé à construire l’indice d’impact à partir des données d’Open Food Facts et à analyser les retours des testeurs.",
          en: "All of Proserpine’s code is written by AI (Claude, Claude Code), from my instructions. The rest is mine: the problem, the audience, the tone, the features and every interface choice, which I validate one by one. AI also helped me build the impact index from Open Food Facts data and analyse testers’ feedback."
        }, {
          fr: "L’algorithme et les règles de tri, eux, relèvent surtout de mon travail : je scanne les produits un à un, je vérifie la consigne affichée, puis je corrige les règles pour les améliorer. Dans l’application, le tri repose sur ces règles, sans IA.",
          en: "The sorting algorithm and rules are mostly my own work: I scan products one by one, check the instruction shown, then fix the rules to improve them. In the app, sorting relies on these rules, with no AI."
        }],
        ai: {
          did: [
            { fr: "Écrire tout le code, à partir de mes instructions", en: "Write all the code, from my instructions" },
            { fr: "Construire l’indice d’impact avec moi, à partir d’Open Food Facts", en: "Build the impact index with me, from Open Food Facts data" },
            { fr: "Analyser les retours des testeurs", en: "Analyse testers’ feedback" }
          ],
          decided: [
            { fr: "Le problème, la cible et le ton", en: "The problem, the audience and the tone" },
            { fr: "Les hypothèses à vérifier et les questions d’entretien", en: "The hypotheses to test and the interview questions" },
            { fr: "Les fonctionnalités et les partis pris de conception", en: "The features and the design choices" },
            { fr: "Les règles de tri, vérifiées produit par produit", en: "The sorting rules, checked product by product" }
          ]
        }
      },
      {
        title: { fr: "Résultat", en: "Outcome" },
        paragraphs: [{
          fr: "Une application Android native, qui reprend la logique de la V1 web : on scanne un code-barres ou on cherche le produit, et la fiche indique dans quel bac le jeter, avec un conseil de tri et un indice d’impact sur 100. Un guide de tri, l’historique des produits scannés et des réglages complètent l’ensemble.",
          en: "A native Android app that carries over the web V1’s logic: you scan a barcode or search for the product, and the page shows which bin it goes in, with a sorting tip and an impact index out of 100. A sorting guide, the history of scanned products and settings complete the app."
        }, {
          fr: "L’algorithme de tri est en cours d’amélioration : c’est ma priorité numéro 1.",
          en: "The sorting algorithm is being improved: it’s my number one priority."
        }, {
          fr: "Le test fermé sur Google Play est en préparation ; l’objectif est ensuite de passer l’application en production pour la rendre disponible au public sur le Play Store.",
          en: "Closed testing on Google Play is being prepared; the goal is then to move the app to production and make it available to the public on the Play Store."
        }],
        shots: [
          { src: "images/proserpine-accueil.jpg",
            caption: { fr: "Accueil : produits les plus scannés et meilleurs scores", en: "Home: most-scanned products and best scores" } },
          { src: "images/proserpine-fiche-produit.jpg",
            caption: { fr: "Fiche produit : consigne de tri, conseil et indice d’impact", en: "Product page: sorting instruction, tip and impact index" } }
        ]
      },
      {
        title: { fr: "La suite", en: "What’s next" },
        list: [
          { fr: "Lancer le test fermé sur Google Play, puis passer en production pour rendre l’application disponible au public", en: "Launch closed testing on Google Play, then move to production to make the app available to the public" },
          { fr: "Améliorer l’algorithme de tri en priorité, puis fiabiliser l’indice d’impact", en: "Improve the sorting algorithm first, then make the impact index reliable" },
          { fr: "Constituer ma propre base de données de produits, avec le détail du tri, pour ne plus dépendre d’Open Food Facts", en: "Build my own product database, with sorting details, to stop depending on Open Food Facts" },
          { fr: "Synchroniser l’application avec les règles de tri publiées par chaque commune", en: "Sync the app with the sorting rules published by each municipality" },
          { fr: "Reconnaître les pictogrammes de danger sur les produits", en: "Recognise hazard pictograms on products" },
          { fr: "Améliorer le tri des cosmétiques et des produits non alimentaires", en: "Improve sorting for cosmetics and non-food products" },
          { fr: "Proposer une offre premium", en: "Offer a premium plan" },
          { fr: "Améliorer constamment l’application en prenant en compte l’avis de mes utilisateurs", en: "Keep improving the app constantly, taking my users’ feedback into account" }
        ]
      }
    ]
  },

  {
    id: "studyspace",
    title: { fr: "Studyspace", en: "Studyspace" },
    tagline: {
      fr: "Un espace de révision tout-en-un, né de mes propres besoins d’étudiant.",
      en: "An all-in-one study space, born from my own needs as a student."
    },
    kind: { fr: "Application web", en: "Web app" },
    year: "2026",
    status: { fr: "En ligne · usage personnel", en: "Live · personal use" },
    meta: [
      { label: { fr: "Rôle", en: "Role" },
        value: { fr: "Conception et développement, seul (avec l’IA en appui)", en: "Design and development, solo (with AI support)" } },
      { label: { fr: "Cadre", en: "Scope" },
        value: { fr: "Petit projet personnel · budget 0 € (outils gratuits)", en: "Small personal project · €0 budget (free tools)" } }
    ],
    links: [
      { label: { fr: "Ouvrir l’app", en: "Open the app" }, url: "https://studyspace-eight.vercel.app" }
    ],
    cover: "images/studyspace-couverture.jpg",
    sections: [
      {
        title: { fr: "Origine", en: "Origin" },
        paragraphs: [{
          fr: "Studyspace est né de mes propres révisions : il me fallait un seul endroit pour organiser mes matières, créer des fiches et m’entraîner.",
          en: "Studyspace came out of my own revision: I needed one place to organise my subjects, write study cards and practise."
        }]
      },
      {
        title: { fr: "Ce que fait l’app", en: "What the app does" },
        list: [
          { fr: "Matières, chapitres et fiches de cours", en: "Subjects, chapters and study cards" },
          { fr: "Quiz de rappel actif : la question s’affiche, on essaie de se souvenir avant de révéler la réponse", en: "Active-recall quiz: the question appears, you try to remember before revealing the answer" },
          { fr: "Une base d’œuvres et une section questions / réponses", en: "A library of works and a Q&A section" },
          { fr: "Tags et recherche", en: "Tags and search" },
          { fr: "Export et import des données", en: "Data export and import" }
        ],
        shots: [
          { src: "images/studyspace-accueil.jpg",
            caption: { fr: "Les matières, avec leurs chapitres et leurs notes", en: "Subjects, with their chapters and notes" } },
          { src: "images/studyspace-quiz.jpg",
            caption: { fr: "Le quiz de rappel actif", en: "The active-recall quiz" } }
        ]
      },
      {
        title: { fr: "Une décision de produit", en: "A product decision" },
        paragraphs: [{
          fr: "Mon idée était d’ouvrir Studyspace à tous les étudiants, avec les quiz et les fiches de révision directement intégrés à l’application. J’y ai renoncé : ce type d’application existe déjà, et j’arriverais sur un marché bondé sans rien apporter de vraiment nouveau.",
          en: "My idea was to open Studyspace to all students, with quizzes and study cards built straight into the app. I dropped it: apps like this already exist, and I would be entering a crowded market without offering anything genuinely new."
        }, {
          fr: "Studyspace reste donc ce pour quoi il a été conçu : mon outil de révision personnel.",
          en: "So Studyspace stays what it was built to be: my own revision tool."
        }]
      }
    ]
  },

  {
    id: "vers-le-mordor",
    title: { fr: "Vers le Mordor", en: "Walk to Mordor" },
    tagline: {
      fr: "Faire de chaque sortie sportive une étape du voyage vers le Mordor.",
      en: "Turn every workout into a leg of the journey to Mordor."
    },
    kind: { fr: "Application web", en: "Web app" },
    year: "2026",
    status: { fr: "Prototype en cours", en: "Work in progress" },
    meta: [
      { label: { fr: "Rôle", en: "Role" },
        value: { fr: "Conception et développement, seul (avec l’IA en appui)", en: "Design and development, solo (with AI support)" } },
      { label: { fr: "Cadre", en: "Scope" },
        value: { fr: "Petit projet personnel · budget 0 € (outils gratuits)", en: "Small personal project · €0 budget (free tools)" } },
      { label: { fr: "Note", en: "Note" },
        value: { fr: "Projet de fan, non officiel", en: "Unofficial fan project" } }
    ],
    links: [
      { label: { fr: "Ouvrir l’app", en: "Open the app" }, url: "https://lotr-walking.vercel.app" }
    ],
    cover: "images/mordor-couverture.jpg",
    sections: [
      {
        title: { fr: "Origine", en: "Origin" },
        paragraphs: [{
          fr: "Une publicité Instagram présentait une app qui fait parcourir la distance du Seigneur des anneaux, mais sans aucun lien avec le sport. J’ai voulu en faire une vraie source de motivation pendant l’effort.",
          en: "An Instagram ad showed an app that lets you travel the distance of The Lord of the Rings, but with no link to exercise. I wanted to turn it into real motivation while you work out."
        }]
      },
      {
        title: { fr: "Ce que fait l’app", en: "What the app does" },
        list: [
          { fr: "2 871 km découpés en 31 étapes, de Cul-de-Sac au Mordor", en: "2,871 km split into 31 stages, from Bag End to Mordor" },
          { fr: "Suivi GPS en extérieur", en: "Outdoor GPS tracking" },
          { fr: "Mode intérieur avec allure réglable", en: "Indoor mode with adjustable pace" },
          { fr: "Fonctionne hors ligne", en: "Works offline" },
          { fr: "Hauts faits : distance de la semaine, meilleures sorties", en: "Achievements: weekly distance, best outings" }
        ],
        shots: [
          { src: "images/mordor-voyage.jpg",
            caption: { fr: "Le voyage : distance parcourue, étape en cours et prochaine étape", en: "The journey: distance covered, current stage and next stage" } },
          { src: "images/mordor-hauts-faits.jpg",
            caption: { fr: "Les hauts faits et le rouleau des étapes", en: "Achievements and the roll of stages" } }
        ]
      },
      {
        title: { fr: "État et suite", en: "Status and next steps" },
        paragraphs: [{
          fr: "C’est un prototype : le strict minimum fonctionne. Un petit projet personnel, bien moins poussé que Proserpine, mais que je compte reprendre en profondeur.",
          en: "It’s a prototype: the bare minimum works. A small personal project, far less developed than Proserpine, but one I intend to rework in depth."
        }],
        list: [
          { fr: "Refonte visuelle : interface et images", en: "Visual overhaul: interface and imagery" },
          { fr: "Fiabiliser le suivi GPS : quand l’app passe en arrière-plan, la progression s’actualise de façon irrégulière", en: "Make GPS tracking reliable: when the app goes to the background, progress updates erratically" },
          { fr: "Améliorer le mode en salle : correct sur tapis de course, pas encore adapté au vélo (vitesse variable, plafonnée à 20 km/h)", en: "Improve indoor mode: fine on a treadmill, not yet suited to cycling (variable speed, capped at 20 km/h)" },
          { fr: "Une vraie application native", en: "A real native app" },
          { fr: "Une fois la version Seigneur des anneaux aboutie, étendre à d’autres univers : Game of Thrones, The Witcher, Clair Obscur…", en: "Once the Lord of the Rings version is right, extend to other worlds: Game of Thrones, The Witcher, Clair Obscur…" }
        ]
      }
    ]
  }
];

/* --------------------------------------------------------------------------
   AUTRES CRÉATIONS (cartes simples, sans page détaillée)
   -------------------------------------------------------------------------- */
const OTHER_WORKS = [
  {
    id: "initiale-vermeille",
    title: { fr: "L’Initiale Vermeille", en: "L’Initiale Vermeille" },
    category: { fr: "Scénario · Site web", en: "Screenplay · Website" },
    year: "2025–2026",
    text: {
      fr: "Scénario écrit en 1re année, prolongé par un site web que j’ai codé quasi intégralement seul, une affiche et des fiches personnages.",
      en: "A screenplay written in my first year, extended with a website I coded almost entirely on my own, a poster and character sheets."
    },
    link: { label: { fr: "Voir le site", en: "Visit the site" }, url: "https://initiale-vermeille.vercel.app" },
    cover: "images/vermeille-affiche.jpg"
  },
  {
    id: "prisme-trinity",
    title: { fr: "Prisme Trinity", en: "Prisme Trinity" },
    category: { fr: "Média · Instagram", en: "Media · Instagram" },
    year: { fr: "En cours", en: "Ongoing" },
    text: {
      fr: "Média Instagram qui dissèque les récits de fiction pour révéler les failles de notre monde réel, sous trois angles : philosophie, sociologie, éthique.",
      en: "An Instagram media account that dissects fictional stories to reveal the flaws of our real world, through three lenses: philosophy, sociology, ethics."
    },
    link: { label: { fr: "Voir le compte", en: "See the account" }, url: "https://www.instagram.com/prisme.trinity/" },
    cover: "images/prisme-trinity.jpg"
  }
];


/* --------------------------------------------------------------------------
   GALERIE « MES AUTRES TRAVAUX » (page galerie.html)
   Déposer les images dans images/galerie/, puis ajouter une entrée ici.
   origin : "student" (travail étudiant), "personal" (projet perso) ou "internship" (stage AnSport).
   -------------------------------------------------------------------------- */
const GALLERY = [
  {
    src: "images/galerie/jeu-echecs-3d.jpg",
    origin: "student",
    title: { fr: "Jeu d’échecs", en: "Chess set" },
    category: { fr: "Modélisation 3D", en: "3D modelling" },
    year: "2020",
    note: { fr: "Un jeu d’échecs modélisé en 3D, pièces en place pour le début de partie.", en: "A chess set modelled in 3D, pieces set up for the opening." }
  },
  {
    src: "images/galerie/pochette-brel.jpg",
    origin: "student",
    title: { fr: "Pochette de CD — Jacques Brel", en: "CD sleeve — Jacques Brel" },
    category: { fr: "Pochette d’album", en: "Album sleeve" },
    year: "2025",
    note: { fr: "Pochette de CD fictive pour Jacques Brel.", en: "A fictional CD sleeve for Jacques Brel." }
  },
  {
    src: "images/galerie/halloween.jpg",
    origin: "personal",
    title: { fr: "Halloween", en: "Halloween" },
    category: { fr: "Photographie", en: "Photography" },
    year: "2025",
    note: { fr: "Petite photo fun, avec un effet un peu inquiétant.", en: "A small fun photo, with a slightly eerie effect." }
  },
  {
    src: "images/galerie/publications-insta.jpg",
    origin: "student",
    title: { fr: "Publications Instagram", en: "Instagram posts" },
    category: { fr: "Réseaux sociaux", en: "Social media" },
    year: "2024",
    note: { fr: "Publications fictives pour un restaurant italien.", en: "Fictional posts for an Italian restaurant." }
  },
  {
    src: "images/galerie/scene-rouge.jpg",
    origin: "personal",
    title: { fr: "Sous la lumière rouge", en: "Under the red light" },
    category: { fr: "Photographie", en: "Photography" },
    year: "2025",
    note: { fr: "Photo d’un couple d’amis.", en: "A photo of two friends, a couple." }
  },
  {
    src: "images/galerie/ansport-respect-personnel.jpg",
    origin: "internship",
    fit: "contain",
    title: { fr: "Respectons le personnel", en: "Let’s respect the staff" },
    category: { fr: "Affiche", en: "Poster" },
    year: "2025",
    note: { fr: "Affiche invitant les usagers de la piscine à respecter le personnel.", en: "A poster asking pool users to respect the staff." }
  }

  // Pour ajouter un travail : déposer l'image dans images/galerie/, puis copier un bloc ci-dessus.
];

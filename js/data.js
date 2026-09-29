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
  draft: true,
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
    kind: { fr: "Application mobile (PWA)", en: "Mobile app (PWA)" },
    year: "2026",
    status: { fr: "V1 en ligne", en: "V1 live" },
    meta: [
      { label: { fr: "Rôle", en: "Role" },
        value: { fr: "Recherche, conception et développement, seul", en: "Research, design and development, solo" } },
      { label: { fr: "Cadre", en: "Scope" },
        value: { fr: "Projet dans le cadre d'un cours de Design Thinking · moins de 2 mois · budget 0 € (utilisation d'outils gratuits)", en: "School project from Design Thinking course · under 2 months · €0 budget (use of free tools)" } },
      { label: { fr: "Technique", en: "Stack" },
        value: { fr: "Vite · JavaScript · PWA", en: "Vite · JavaScript · PWA" } }
    ],
    links: [
      { label: { fr: "Ouvrir l’app", en: "Open the app" }, url: "https://proserpine-design.vercel.app" },
      { label: { fr: "Code source", en: "Source code" }, url: "https://github.com/Tatsu14/proserpine" }
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
          { title: { fr: "Installable sans store", en: "Installable, no store" },
            text: { fr: "Une application web installable sur téléphone (PWA) : le web est ce que je maîtrise le mieux, et c’était le seul format tenable en moins de deux mois. Une version native viendra plus tard.", en: "A web app you can install on your phone (PWA): the web is what I know best, and it was the only format that fit in under two months. A native version will come later." } }
        ]
      },
      {
        title: { fr: "L’IA dans le projet", en: "AI in the project" },
        paragraphs: [{
          fr: "Proserpine est le projet où l’IA est le moins intervenue : elle a écrit le code que je lui demandais, rien de plus. Les idées viennent de moi, ou d’exemples repérés en ligne. Sur mes autres applications, elle intervient aussi en amont, dans la conception.",
          en: "Proserpine is the project where AI played the smallest part: it wrote the code I asked for, nothing else. The ideas are mine, or come from examples I found online. On my other apps, it also takes part earlier, in the design work."
        }],
        ai: {
          did: [
            { fr: "Écrire le code de la V1, à partir de mes instructions", en: "Write the code of the V1, from my instructions" }
          ],
          decided: [
            { fr: "Le problème, la cible et le ton", en: "The problem, the audience and the tone" },
            { fr: "Les hypothèses à vérifier et les questions d’entretien", en: "The hypotheses to test and the interview questions" },
            { fr: "Les fonctionnalités et les partis pris de conception", en: "The features and the design choices" }
          ]
        }
      },
      {
        title: { fr: "Résultat", en: "Outcome" },
        paragraphs: [{
          fr: "Une V1 fonctionnelle, installable sur téléphone. Chaque produit scanné reçoit un score sur 100 et des consignes de tri par matériau (sac bleu PMC, papiers et cartons), avec un guide et l’historique des produits scannés.",
          en: "A working V1 you can install on your phone. Every scanned product gets a score out of 100 and sorting instructions per material (blue PMC bag, paper and cardboard), plus a guide and a history of scanned products."
        }, {
          fr: "L’interface et l’algorithme de score sont encore imparfaits : c’est une première version assumée, à améliorer.",
          en: "The interface and the scoring algorithm are still rough: a deliberate first version, to be improved."
        }],
        shots: [
          { src: "images/proserpine-accueil.jpg",
            caption: { fr: "Accueil : produits les plus scannés et meilleurs scores", en: "Home: most-scanned products and best scores" } },
          { src: "images/proserpine-resultat.jpg",
            caption: { fr: "Après un scan : score, analyse et consignes de tri", en: "After a scan: score, analysis and sorting instructions" } }
        ]
      },
      {
        title: { fr: "La suite", en: "What’s next" },
        list: [
          { fr: "Une saisie manuelle quand le code-barres n’est pas reconnu", en: "Manual entry when the barcode isn’t recognised" },
          { fr: "Un guide de tri consultable à tout moment", en: "A sorting guide available at any time" },
          { fr: "Rendre l’algorithme d’éco-score vraiment intelligent : déduire les informations qui manquent dans les bases publiques plutôt que de s’arrêter à ce qui y est écrit", en: "Make the eco-score algorithm genuinely smart: infer the information missing from public databases instead of stopping at what they state" },
          { fr: "Constituer mes propres bases de données de produits", en: "Build my own product databases" },
          { fr: "Une version native, une fois la V1 web stabilisée", en: "A native version, once the web V1 is stable" }
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
        title: { fr: "La suite", en: "What’s next" },
        paragraphs: [{
          fr: "Transformer cet outil personnel en application proposée à d’autres étudiants. [[déroulé complet à définir ensemble]]",
          en: "Turn this personal tool into an app offered to other students. [[full case study to define together]]"
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
      fr: "Compte Instagram qui croise pop culture et droit : ligne éditoriale, recherche et direction visuelle.",
      en: "An Instagram account at the crossroads of pop culture and law: editorial line, research and visual direction."
    },
    link: null, // [[lien du compte]]
    cover: null
  }
];


/* --------------------------------------------------------------------------
   GALERIE « MES AUTRES TRAVAUX » (page galerie.html)
   Déposer les images dans images/galerie/, puis ajouter une entrée ici.
   -------------------------------------------------------------------------- */
const GALLERY = [
  {
    src: "images/galerie/meute-digitale.jpg",
    title: { fr: "Meute digitale", en: "Digital pack" },
    category: { fr: "Affiche · Illustrator", en: "Poster · Illustrator" },
    year: "2025",
    note: { fr: "Affiche de section réalisée sous Illustrator, en vectoriel.", en: "Course poster made in Illustrator, fully vector." }
  },
  {
    src: "images/galerie/pochette-brel.jpg",
    title: { fr: "Pochette vinyle — Brel", en: "Vinyl sleeve — Brel" },
    category: { fr: "Pochette d’album · Photoshop", en: "Album sleeve · Photoshop" },
    year: "2025",
    note: { fr: "Détourage, noir et blanc avec touches de couleur, typographie.", en: "Cut-out, black and white with colour accents, typography." }
  },
  {
    src: "images/galerie/foire-viking.jpg",
    title: { fr: "Foire viking", en: "Viking fair" },
    category: { fr: "Photomontage · Photoshop", en: "Photo composite · Photoshop" },
    year: "2025",
    note: { fr: "Montage d’une attraction foraine dans un décor de forêt brumeuse.", en: "A fairground ride composited into a misty forest." }
  },
  {
    src: "images/galerie/scene-rouge.jpg",
    title: { fr: "[[titre à donner]]", en: "[[title to give]]" },
    category: { fr: "Photographie", en: "Photography" },
    year: "[[année]]",
    note: { fr: "[[à décrire : le contexte et ce que tu as fait — lumière, mise en scène, retouche]]", en: "[[to describe: context and what you did — lighting, staging, retouching]]" }
  },
  {
    src: "images/galerie/halloween.jpg",
    title: { fr: "[[titre à donner]]", en: "[[title to give]]" },
    category: { fr: "[[photo ou illustration ?]]", en: "[[photo or illustration?]]" },
    year: "[[année]]",
    note: { fr: "[[à décrire : le contexte et ce que tu as fait]]", en: "[[to describe: context and what you did]]" }
  }

  // Pour ajouter un travail : déposer l'image dans images/galerie/, puis copier un bloc ci-dessus.
];

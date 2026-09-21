/* ==========================================================================
   OUTILS COMMUNS À TOUTES LES PAGES
   - Textes de l'interface (FR / EN)
   - Choix de la langue et du thème (sombre / clair), mémorisés
   - En-tête, bandeau « version de travail », pied de page
   ========================================================================== */

const UI = {
  fr: {
    skip: "Aller au contenu",
    nav_cases: "Études de cas",
    nav_method: "Méthode",
    nav_other: "Autres créations",
    nav_contact: "Contact",
    lang_switch: "EN",
    lang_switch_label: "Switch to English",
    theme_to_light: "Passer en mode clair",
    theme_to_dark: "Passer en mode sombre",
    draft_banner: "Version de travail : les passages surlignés sont à compléter ou à valider.",

    hero_eyebrow: "Product design · Étudiant en 2e année à la HEPL (Liège)",
    hero_title: "Je conçois des produits utiles, avec l’IA comme outil de travail.",
    hero_lead: "Je pars d’un vrai problème, je vérifie qu’il existe, puis je conçois et je développe l’application. L’IA m’accompagne à chaque étape ; les décisions restent les miennes.",
    hero_cta_cases: "Voir les études de cas",
    hero_cta_contact: "Me contacter",

    cases_title: "Études de cas",
    cases_intro: "Trois applications conçues et développées de A à Z.",
    case_read: "Lire l’étude de cas",
    cover_placeholder: "[[Capture à venir]]",

    method_title: "Comment je travaille avec l’IA",
    method_intro: "L’IA accélère mon travail, elle ne le remplace pas.",
    method_1_t: "Partir d’un vrai problème",
    method_1_p: "Le mien ou celui des autres : un tri des déchets trop flou, des révisions éparpillées, une motivation qui s’essouffle.",
    method_2_t: "Vérifier avant de construire",
    method_2_p: "Hypothèses écrites, puis entretien : je confronte l’idée à la réalité avant de coder.",
    method_3_t: "Concevoir et prototyper avec l’IA",
    method_3_p: "Claude, Gemini et Antigravity m’aident à structurer, explorer des pistes, créer des visuels et écrire du code.",
    method_4_t: "Garder la main sur les décisions",
    method_4_p: "L’IA propose, je tranche : le problème, la cible, le ton et ce qui entre dans la V1 restent mes choix.",

    other_title: "Autres créations",
    other_intro: "Écriture, image, médias : ce qui nourrit ma façon de concevoir.",

    about_title: "À propos",
    about_text: "Étudiant en 2e année à la HEPL, je touche à tout ce qui fait un produit : l’écriture, l’image, la vidéo et le code. Je prépare Adhara, mon studio de product design.",
    contact_title: "Écrivons la suite.",
    contact_lead: "Le plus simple pour me joindre : un e-mail.",

    footer: "Tous droits réservés.",

    back_home: "Retour à l’accueil",
    detail_status: "Statut",
    detail_year: "Année",
    ai_did: "Ce que l’IA a fait",
    ai_decided: "Ce que j’ai décidé",
    next_case: "Étude de cas suivante",
    not_found_title: "Projet introuvable",
    not_found_text: "Ce lien ne correspond à aucune étude de cas."
  },

  en: {
    skip: "Skip to content",
    nav_cases: "Case studies",
    nav_method: "Method",
    nav_other: "Other work",
    nav_contact: "Contact",
    lang_switch: "FR",
    lang_switch_label: "Passer en français",
    theme_to_light: "Switch to light mode",
    theme_to_dark: "Switch to dark mode",
    draft_banner: "Work in progress: highlighted passages still need to be completed or approved.",

    hero_eyebrow: "Product design · 2nd-year student at HEPL (Liège, Belgium)",
    hero_title: "I design useful products, with AI as my working tool.",
    hero_lead: "I start from a real problem, check that it exists, then design and build the app. AI supports me at every step; the decisions stay mine.",
    hero_cta_cases: "See the case studies",
    hero_cta_contact: "Get in touch",

    cases_title: "Case studies",
    cases_intro: "Three apps designed and built end to end.",
    case_read: "Read the case study",
    cover_placeholder: "[[Screenshot coming]]",

    method_title: "How I work with AI",
    method_intro: "AI speeds up my work; it doesn’t replace it.",
    method_1_t: "Start from a real problem",
    method_1_p: "Mine or other people’s: waste sorting that’s too confusing, scattered revision notes, motivation that fades.",
    method_2_t: "Check before building",
    method_2_p: "Written hypotheses, then an interview: I test the idea against reality before coding.",
    method_3_t: "Design and prototype with AI",
    method_3_p: "Claude, Gemini and Antigravity help me structure ideas, explore options, create visuals and write code.",
    method_4_t: "Keep ownership of decisions",
    method_4_p: "AI suggests, I decide: the problem, the audience, the tone and what goes into V1 remain my choices.",

    other_title: "Other work",
    other_intro: "Writing, images, media: what feeds the way I design.",

    about_title: "About",
    about_text: "A 2nd-year student at HEPL, I work across everything that makes a product: writing, images, video and code. I’m building Adhara, my product design studio.",
    contact_title: "Let’s write what comes next.",
    contact_lead: "The easiest way to reach me: an email.",

    footer: "All rights reserved.",

    back_home: "Back to home",
    detail_status: "Status",
    detail_year: "Year",
    ai_did: "What AI did",
    ai_decided: "What I decided",
    next_case: "Next case study",
    not_found_title: "Project not found",
    not_found_text: "This link doesn’t match any case study."
  }
};

/* ---------- Stockage du navigateur (peut être indisponible : on protège) ---------- */
function storeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function storeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* navigation privée : on ignore */ }
}

/* ---------- Langue ---------- */
let LANG = (function () {
  const saved = storeGet("lang");
  if (saved === "fr" || saved === "en") return saved;
  const nav = (navigator.language || "fr").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
})();

// Renvoie le texte dans la langue courante ({fr, en} ou simple chaîne).
function tr(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[LANG] ?? value.fr ?? "";
}

// Sécurise le texte puis transforme les [[…]] en passages surlignés.
function fmt(text) {
  const safe = String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  return safe.replace(/\[\[(.+?)\]\]/g, '<mark class="todo">$1</mark>');
}

// Texte d'interface formaté.
function t(key) {
  return fmt(UI[LANG][key] ?? UI.fr[key] ?? key);
}

// Version sans surlignage (pour les attributs : title, alt, aria-label…).
function plain(text) {
  return String(text).replace(/\[\[(.+?)\]\]/g, "$1");
}

const renderHooks = [];
function onRender(fn) { renderHooks.push(fn); }

function applyLanguage() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = UI[LANG].lang_switch;
    langBtn.setAttribute("aria-label", UI[LANG].lang_switch_label);
    langBtn.setAttribute("lang", LANG === "fr" ? "en" : "fr");
  }
  updateThemeButton();
  renderHooks.forEach(fn => fn());
}

function setLanguage(lang) {
  LANG = lang;
  storeSet("lang", lang);
  applyLanguage();
}

/* ---------- Thème sombre / clair ---------- */
function currentTheme() {
  const forced = document.documentElement.getAttribute("data-theme");
  if (forced === "dark" || forced === "light") return forced;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function updateThemeButton() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const isDark = currentTheme() === "dark";
  btn.setAttribute("aria-label", UI[LANG][isDark ? "theme_to_light" : "theme_to_dark"]);
  btn.dataset.mode = isDark ? "dark" : "light";
}

function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  storeSet("theme", next);
  updateThemeButton();
}

/* ---------- Apparition douce au défilement ---------- */
function revealOnScroll(root = document) {
  const items = root.querySelectorAll(".reveal:not(.is-visible)");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

/* ---------- Démarrage commun ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Bandeau « version de travail »
  const banner = document.getElementById("draft-banner");
  if (banner) banner.hidden = !SITE.draft;

  // Boutons langue et thème
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.addEventListener("click", () => setLanguage(LANG === "fr" ? "en" : "fr"));
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // Si l'appareil change de mode et que le visiteur n'a rien forcé
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", updateThemeButton);

  // Pied de page
  document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-site-name]").forEach(el => { el.textContent = SITE.name; });

  applyLanguage();
});

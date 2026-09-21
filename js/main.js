/* ==========================================================================
   PAGE D'ACCUEIL
   Construit les cartes « Études de cas », « Autres créations » et les liens
   de contact à partir de data.js. Se relance à chaque changement de langue.
   ========================================================================== */

function coverHTML(item, extraClass = "") {
  if (item.cover) {
    return `<img class="cover ${extraClass}" src="${item.cover}" alt="${fmt(plain(tr(item.title)))}" loading="lazy">`;
  }
  // Emplacement en attendant une vraie capture
  const initial = plain(tr(item.title)).replace(/^L’/, "").charAt(0);
  return `<div class="cover cover--placeholder ${extraClass}" aria-hidden="true">
            <span class="cover__initial">${fmt(initial)}</span>
            <span class="cover__note">${t("cover_placeholder")}</span>
          </div>`;
}

function renderCaseStudies() {
  const list = document.getElementById("cases-list");
  if (!list) return;
  list.innerHTML = CASE_STUDIES.map((c, i) => `
    <li class="case-card reveal">
      <a class="case-card__link" href="projet-detail.html?id=${c.id}">
        ${coverHTML(c, "case-card__cover")}
        <div class="case-card__body">
          <span class="case-card__num">${String(i + 1).padStart(2, "0")}</span>
          <h3 class="case-card__title">${fmt(tr(c.title))}</h3>
          <p class="case-card__tagline">${fmt(tr(c.tagline))}</p>
          <p class="case-card__meta">
            <span>${fmt(tr(c.kind))}</span>
            <span class="badge">${fmt(tr(c.status))}</span>
          </p>
          <span class="case-card__cta">${t("case_read")} <span aria-hidden="true">→</span></span>
        </div>
      </a>
    </li>`).join("");
}

function renderOtherWorks() {
  const list = document.getElementById("other-list");
  if (!list) return;
  list.innerHTML = OTHER_WORKS.map(w => `
    <li class="work-card reveal">
      ${w.cover
        ? `<img class="work-card__cover" src="${w.cover}" alt="${fmt(plain(tr(w.title)))}" loading="lazy">`
        : `<div class="work-card__cover cover--placeholder" aria-hidden="true">
             <span class="cover__initial">${fmt(plain(tr(w.title)).charAt(0))}</span>
             <span class="cover__note">${t("cover_placeholder")}</span>
           </div>`}
      <p class="work-card__cat">${fmt(tr(w.category))} · ${fmt(tr(w.year))}</p>
      <h3 class="work-card__title">${fmt(tr(w.title))}</h3>
      <p class="work-card__text">${fmt(tr(w.text))}</p>
      ${w.link && w.link.url
        ? `<a class="text-link" href="${w.link.url}" target="_blank" rel="noopener">${fmt(tr(w.link.label))} <span aria-hidden="true">↗</span></a>`
        : ""}
    </li>`).join("");
}

function renderContact() {
  const mail = document.getElementById("contact-email");
  if (mail) {
    mail.href = `mailto:${SITE.email}`;
    mail.textContent = SITE.email;
  }
  const links = document.getElementById("contact-links");
  if (links) {
    links.innerHTML = SITE.links
      .filter(l => l.url)
      .map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${fmt(l.label)} <span aria-hidden="true">↗</span></a></li>`)
      .join("");
  }
}

onRender(() => {
  renderCaseStudies();
  renderOtherWorks();
  renderContact();
  revealOnScroll();
});

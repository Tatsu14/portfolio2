/* ==========================================================================
   PAGE D'ÉTUDE DE CAS
   Lit l'identifiant dans l'adresse (projet-detail.html?id=proserpine) et
   construit la page à partir de data.js.
   ========================================================================== */

const params = new URLSearchParams(window.location.search);
const caseId = params.get("id");
const caseIndex = CASE_STUDIES.findIndex(c => c.id === caseId);
const study = caseIndex !== -1 ? CASE_STUDIES[caseIndex] : null;

function sectionHTML(section, index) {
  let body = "";

  if (section.paragraphs) {
    body += section.paragraphs.map(p => `<p>${fmt(tr(p))}</p>`).join("");
  }
  if (section.callout) {
    body += `<blockquote class="callout">${fmt(tr(section.callout))}</blockquote>`;
  }
  if (section.list) {
    body += `<ul class="check-list">${section.list.map(li => `<li>${fmt(tr(li))}</li>`).join("")}</ul>`;
  }
  if (section.items) {
    body += `<ul class="decision-list">${section.items.map(it => `
      <li>
        <h3>${fmt(tr(it.title))}</h3>
        <p>${fmt(tr(it.text))}</p>
      </li>`).join("")}</ul>`;
  }
  if (section.ai) {
    body += `<div class="ai-split">
      <div class="ai-split__col">
        <h3>${t("ai_did")}</h3>
        <ul>${section.ai.did.map(li => `<li>${fmt(tr(li))}</li>`).join("")}</ul>
      </div>
      <div class="ai-split__col ai-split__col--me">
        <h3>${t("ai_decided")}</h3>
        <ul>${section.ai.decided.map(li => `<li>${fmt(tr(li))}</li>`).join("")}</ul>
      </div>
    </div>`;
  }

  return `
    <section class="cs-section reveal" aria-labelledby="s-${index}">
      <p class="cs-section__num" aria-hidden="true">${String(index + 1).padStart(2, "0")}</p>
      <div class="cs-section__content">
        <h2 id="s-${index}">${fmt(tr(section.title))}</h2>
        ${body}
      </div>
    </section>`;
}

function renderStudy() {
  const main = document.getElementById("case-content");
  if (!main) return;

  if (!study) {
    document.title = `${UI[LANG].not_found_title} · ${SITE.name}`;
    main.innerHTML = `
      <div class="container cs-empty">
        <h1>${t("not_found_title")}</h1>
        <p>${t("not_found_text")}</p>
        <a class="btn" href="index.html">${t("back_home")}</a>
      </div>`;
    return;
  }

  document.title = `${plain(tr(study.title))} · ${SITE.name}`;

  const meta = [
    { label: UI[LANG].detail_year, value: study.year },
    { label: UI[LANG].detail_status, value: tr(study.status) },
    ...study.meta.map(m => ({ label: tr(m.label), value: tr(m.value) }))
  ];

  const links = (study.links || []).filter(l => l.url).map(l =>
    `<a class="btn btn--ghost" href="${l.url}" target="_blank" rel="noopener">${fmt(tr(l.label))} <span aria-hidden="true">↗</span></a>`
  ).join("");

  const cover = study.cover
    ? `<img class="cover cs-cover" src="${study.cover}" alt="${fmt(plain(tr(study.title)))}">`
    : `<div class="cover cover--placeholder cs-cover" aria-hidden="true">
         <span class="cover__initial">${fmt(plain(tr(study.title)).charAt(0))}</span>
         <span class="cover__note">${t("cover_placeholder")}</span>
       </div>`;

  const next = CASE_STUDIES[(caseIndex + 1) % CASE_STUDIES.length];

  main.innerHTML = `
    <header class="cs-hero container">
      <p class="eyebrow">${fmt(tr(study.kind))}</p>
      <h1 class="cs-hero__title">${fmt(tr(study.title))}</h1>
      <p class="cs-hero__tagline">${fmt(tr(study.tagline))}</p>
      <dl class="cs-meta">
        ${meta.map(m => `<div><dt>${fmt(m.label)}</dt><dd>${fmt(m.value)}</dd></div>`).join("")}
      </dl>
      ${links ? `<div class="cs-links">${links}</div>` : ""}
    </header>

    <div class="container">${cover}</div>

    <div class="container cs-body">
      ${study.sections.map(sectionHTML).join("")}
    </div>

    <nav class="container cs-next" aria-label="${fmt(UI[LANG].next_case)}">
      <span class="cs-next__label">${t("next_case")}</span>
      <a class="cs-next__link" href="projet-detail.html?id=${next.id}">${fmt(tr(next.title))} <span aria-hidden="true">→</span></a>
    </nav>`;
}

onRender(() => {
  renderStudy();
  revealOnScroll();
});

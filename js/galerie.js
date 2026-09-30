/* ==========================================================================
   PAGE GALERIE
   Construit la grille à partir de GALLERY (js/data.js) et gère
   l'agrandissement d'une image par-dessus la page.
   ========================================================================== */

let currentIndex = -1;

/* Étiquette « Travail étudiant / Projet perso / Stage » */
function originBadge(item) {
  if (!item.origin || !UI[LANG]["origin_" + item.origin]) return "";
  return `<span class="origin origin--${item.origin}">${fmt(t("origin_" + item.origin))}</span>`;
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  if (!GALLERY.length) {
    grid.innerHTML = `<li class="gallery-empty">${t("gallery_empty")}</li>`;
    return;
  }

  grid.innerHTML = GALLERY.map((item, i) => `
    <li class="gallery-item reveal">
      <button type="button" class="gallery-item__btn${item.fit === "contain" ? " gallery-item__btn--contain" : ""}" data-index="${i}"
              aria-label="${fmt(plain(tr(item.title)))} — ${fmt(UI[LANG].gallery_open)}">
        <img src="${item.src}" alt="${fmt(plain(tr(item.title)))}" loading="lazy">
        <span class="gallery-item__caption">
          <span class="gallery-item__cat">${fmt(tr(item.category))} · ${fmt(tr(item.year))}</span>
          <span class="gallery-item__title">${fmt(tr(item.title))}</span>
          ${originBadge(item)}
        </span>
      </button>
    </li>`).join("");

  grid.querySelectorAll(".gallery-item__btn").forEach(btn => {
    btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index)));
  });
}

/* ---------- Agrandissement ---------- */
function openLightbox(index) {
  const box = document.getElementById("lightbox");
  const item = GALLERY[index];
  if (!box || !item) return;

  currentIndex = index;
  box.querySelector(".lightbox__img").src = item.src;
  box.querySelector(".lightbox__img").alt = plain(tr(item.title));
  box.querySelector(".lightbox__title").innerHTML = fmt(tr(item.title));
  box.querySelector(".lightbox__meta").innerHTML =
    `${fmt(tr(item.category))} · ${fmt(tr(item.year))}` +
    (item.origin && UI[LANG]["origin_" + item.origin] ? ` · ${fmt(t("origin_" + item.origin))}` : "");
  box.querySelector(".lightbox__note").innerHTML = item.note ? fmt(tr(item.note)) : "";

  box.hidden = false;
  document.body.style.overflow = "hidden";
  box.querySelector(".lightbox__close").focus();
}

function closeLightbox() {
  const box = document.getElementById("lightbox");
  if (!box || box.hidden) return;
  box.hidden = true;
  document.body.style.overflow = "";
  const btn = document.querySelector(`.gallery-item__btn[data-index="${currentIndex}"]`);
  if (btn) btn.focus();
}

function moveLightbox(step) {
  if (currentIndex === -1) return;
  openLightbox((currentIndex + step + GALLERY.length) % GALLERY.length);
}

document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("lightbox");
  if (!box) return;
  box.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  box.querySelector(".lightbox__prev").addEventListener("click", () => moveLightbox(-1));
  box.querySelector(".lightbox__next").addEventListener("click", () => moveLightbox(1));
  // Un clic sur le fond referme
  box.addEventListener("click", e => { if (e.target === box) closeLightbox(); });
  // Échap referme, flèches pour naviguer
  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") moveLightbox(-1);
    if (e.key === "ArrowRight") moveLightbox(1);
  });
});

onRender(() => {
  renderGallery();
  revealOnScroll();
  if (currentIndex !== -1 && !document.getElementById("lightbox").hidden) openLightbox(currentIndex);
});

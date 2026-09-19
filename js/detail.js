document.addEventListener('DOMContentLoaded', () => {
    // 1. Récupération de l'ID depuis l'URL (ex: ?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // 2. Chercher le projet dans data.js (projectsData)
    const projectIndex = projectsData.findIndex(p => p.id === projectId);
    const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

    if (!project) {
        // Fallback propre si l'utilisateur charge un ID inexistant
        document.getElementById('detail-title').textContent = "Projet introuvable";
        document.getElementById('detail-summary').textContent = "Ce projet a été supprimé ou l'URL est incorrecte.";
        return;
    }

    // 3. Application du contenu au DOM
    
    // --> Héro Bannière
    document.title = `${project.title} - Étude de Cas`;
    document.getElementById('detail-hero-bg').style.backgroundImage = `url('${project.heroImage || project.thumbnail}')`;
    document.getElementById('detail-title').textContent = project.title;
    document.getElementById('detail-summary').textContent = project.summary;

    // --> Grille de Métadonnées
    document.getElementById('meta-category').textContent = project.categoryLabel || "---";
    document.getElementById('meta-role').textContent = project.role || "---";
    document.getElementById('meta-year').textContent = project.year || "---";
    document.getElementById('meta-tools').textContent = project.tools || "---";

    // --> Contenu Narratif Long
    document.getElementById('narrative-title-1').textContent = project.narrativeTitle1 || "Le Concept";
    document.getElementById('narrative-text-1').textContent = project.narrativeText1 || project.amorce;
    
    document.getElementById('narrative-title-2').textContent = project.narrativeTitle2 || "La Réalisation";
    document.getElementById('narrative-text-2').textContent = project.narrativeText2 || "...";

    // --> Galerie Dynamique
    const galleryContainer = document.getElementById('detail-gallery');
    galleryContainer.innerHTML = ''; // Nettoyage de la zone

    if (project.gallery && project.gallery.length > 0) {
        // Première image (pleine largeur)
        const imgFull = document.createElement('img');
        imgFull.src = project.gallery[0];
        imgFull.alt = `Galerie ${project.title} 1`;
        imgFull.className = 'gallery-img';
        galleryContainer.appendChild(imgFull);

        // Images suivantes (grille 2 colonnes)
        if (project.gallery.length > 1) {
            const grid = document.createElement('div');
            grid.className = 'gallery-grid';
            
            for (let i = 1; i < project.gallery.length; i++) {
                const innerImg = document.createElement('img');
                innerImg.src = project.gallery[i];
                innerImg.alt = `Galerie ${project.title} ${i + 1}`;
                innerImg.className = 'gallery-img';
                grid.appendChild(innerImg);
            }
            galleryContainer.appendChild(grid);
        }
    }

    // 4. Lien vers le projet suivant
    let nextIndex = projectIndex + 1;
    if (nextIndex >= projectsData.length) {
        nextIndex = 0; // Revenir au premier quand on est au dernier
    }
    const nextProject = projectsData[nextIndex];
    
    const nextLink = document.getElementById('next-project-link');
    nextLink.innerHTML = `${nextProject.title} <span class="arrow">→</span>`;
    nextLink.href = `projet-detail.html?id=${nextProject.id}`;

    // 5. Animation d'entrée
    setTimeout(() => {
        document.body.classList.add('visible');
    }, 100);
});

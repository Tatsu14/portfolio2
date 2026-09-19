document.addEventListener('DOMContentLoaded', () => {

    // ====================================================================
    // 0. BASE DE DONNÉES (projectsData vient désormais de data.js)
    // ====================================================================

    const projectsContainer = document.getElementById('projects-container');
    
    // Fonction pour rendre les projets
    const renderProjects = (filter = 'all') => {
        projectsContainer.innerHTML = '';
        let count = 0;
        
        projectsData.forEach(project => {
            if(filter === 'all' || project.category === filter) {
                count++;
                const article = document.createElement('article');
                article.className = 'project-chapter';
                article.setAttribute('data-project', project.id);
                article.setAttribute('data-category', project.category);
                
                article.innerHTML = `
                    <div class="project-thumb-container">
                        <img src="${project.thumbnail}" alt="${project.title}" class="project-thumb">
                    </div>
                    <div class="project-info">
                        <span class="chapter-number">${project.categoryLabel}</span>
                        <h2 class="project-title">${project.title}</h2>
                        <p class="project-summary">${project.summary}</p>
                        <button class="read-story-btn">Découvrir</button>
                    </div>
                `;
                projectsContainer.appendChild(article);
                
                // Trigger reflow pour l'animation
                setTimeout(() => article.classList.add('visible'), 50 * count);
            }
        });
        
        attachProjectListeners();
    };

    // Premier rendu
    renderProjects();

    // ====================================================================
    // 1. GESTION DES CONTRÔLES (Thèmes & Dispositions)
    // ====================================================================
    
    // Pour changer de thème manuellement ("Cinématique", "Système", "Velvet", "Grimoire")
    // modifiez 'modern' par 'system', 'velvet', ou 'grimoire' ci-dessous
    document.documentElement.setAttribute('data-theme', 'modern');

    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(filter);
        });
    });

    // ====================================================================
    // 3. OVERLAY DYNAMIQUE
    // ====================================================================
    const overlay = document.getElementById('project-overlay');
    const closeBtn = document.getElementById('close-overlay');
    const detailCategory = document.getElementById('detail-category');
    const detailTitle = document.getElementById('detail-title');
    const detailAmorce = document.getElementById('detail-amorce');
    const mediaContainer = document.getElementById('media-container');
    const detailLink = document.getElementById('detail-link');

    function attachProjectListeners() {
        const chapters = document.querySelectorAll('.project-chapter');
        chapters.forEach(chapter => {
            chapter.addEventListener('click', () => {
                const projectId = chapter.getAttribute('data-project');
                const project = projectsData.find(p => p.id === projectId);
                
                if(project) {
                    detailCategory.textContent = project.categoryLabel;
                    detailTitle.textContent = project.title;
                    detailAmorce.textContent = project.amorce;
                    
                    // Générer le média
                    mediaContainer.innerHTML = '';
                    if(project.mediaType === 'image') {
                        mediaContainer.innerHTML = `<img src="${project.mediaUrl}" alt="Aperçu ${project.title}" class="media-image">`;
                    } else if(project.mediaType === 'video') {
                        mediaContainer.innerHTML = `<div class="video-wrapper"><iframe src="${project.mediaUrl}" class="media-video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
                    } else if(project.mediaType === 'iframe') {
                        mediaContainer.innerHTML = `<div class="iframe-wrapper"><iframe src="${project.mediaUrl}" class="media-3d-web" frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen></iframe></div>`;
                    } else if(project.mediaType === 'script') {
                        mediaContainer.innerHTML = project.mediaContent;
                    }
                    
                    detailLink.href = `projet-detail.html?id=${project.id}`;
                    
                    overlay.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; 
                    overlay.scrollTo(0, 0);
                }
            });
        });
    }

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        setTimeout(() => {
            document.body.style.overflow = 'auto'; 
            mediaContainer.innerHTML = ''; // Nettoyer pour stopper les vidéos en arrière-plan
        }, 500);
    });

    // ====================================================================
    // 4. RÉVÉLATION AU DÉFILEMENT (Base)
    // ====================================================================
    const observerOptions = { threshold: 0.15 };
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-scroll:not(.project-chapter)').forEach(el => scrollObserver.observe(el));
});

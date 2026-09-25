# Portfolio B2 · Maxime Cavallari

Portfolio de product design pour les demandes de stage. Site statique en HTML, CSS et JavaScript, sans framework ni installation.

## Voir le site

Double-cliquer sur `index.html`. Le site s'ouvre dans le navigateur, sans connexion nécessaire (sauf pour la police Inter).

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Le texte d'un projet, ajouter un projet | `js/data.js` |
| Les textes de l'accueil, des boutons, de la méthode | `js/site.js` (objet `UI`, en `fr` et en `en`) |
| Les couleurs, les tailles, la mise en page | `css/style.css` (les couleurs sont en haut du fichier) |
| Une image de projet | déposer l'image dans `images/`, puis renseigner `cover: "images/nom.png"` dans `js/data.js` |

Les passages écrits entre `[[ ]]` s'affichent surlignés : ce sont des éléments à compléter ou à valider. Quand il n'en reste plus, passer `draft: true` à `false` dans `js/data.js` pour retirer le bandeau « Version de travail ».

## Structure

```
index.html            Accueil : accroche, études de cas, méthode, autres créations, contact
projet-detail.html    Page d'étude de cas (projet-detail.html?id=proserpine)
galerie.html          Galerie « Mes autres travaux »
css/style.css         Styles (sombre par défaut, variante claire)
js/data.js            Contenu : projets, liens, e-mail
js/site.js            Textes d'interface FR/EN, langue, thème, en-tête
js/main.js            Construction de l'accueil
js/detail.js          Construction des pages d'étude de cas
js/galerie.js         Construction de la galerie et de l'agrandissement
images/               Captures et visuels
images/galerie/       Images de la galerie
cv/                   Le CV en PDF (à déposer)
```

## Reste à faire avant les candidatures

- [ ] Capture du site de L’Initiale Vermeille, visuel Chimera, aperçu Prisme Trinity
- [ ] Déposer le CV dans `cv/` puis renseigner son nom dans `SITE.cv.url` (js/data.js)
- [ ] Compléter la galerie : déposer les images dans `images/galerie/` et les ajouter dans `GALLERY` (js/data.js)
- [ ] Lien Instagram artiste, lien Prisme Trinity
- [ ] Vérifier que le dépôt GitHub de Proserpine est public
- [ ] Compléter et valider tous les passages `[[ ]]`
- [ ] Relire la version anglaise
- [ ] Mise en ligne, puis ajouter l'image d'aperçu de partage (`og:image`)

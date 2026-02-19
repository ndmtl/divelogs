// <!-- Étape 2 : Le JavaScript à compléter
// À faire :

// Récupérer les éléments du DOM
// Écouter le clic sur le bouton
// Récupérer les valeurs des inputs
// Créer un élément <li> avec le texte
// Ajouter le <li> à la liste
// Vider les inputs

// Concepts à utiliser :

// document.getElementById()
// addEventListener('click', function() {})
// inputElement.value pour lire/écrire
// document.createElement('li')
// element.textContent pour le texte
// parentElement.appendChild() -->

// 1. Récupérer le bouton
const button = document.getElementById('...');

// 2. Récupérer le paragraphe
const texte = document.getElementById('...');

// 3. Écouter le clic
bouton.addEventListener('click', function() {
    texte.textContent = '...';
});
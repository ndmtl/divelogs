
// Récupération des éléments du DOM
const seaSelect = document.getElementById('sea');
const spot = document.getElementById('spot');
const buddy = document.getElementById('buddy');
const diveImg = document.getElementById('diveImg');
const date = document.getElementById('date');
const time = document.getElementById('time');
const duration = document.getElementById('duration');
const depth = document.getElementById('depth');
const temperature = document.getElementById('temperature');
const visibility = document.getElementById('visibility');

// Étape (Fieldsets)
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const tab = document.getElementById('tabs');

// Boutons
const btnNext = document.getElementById('btnNext');
const btnAdd = document.getElementById('btnAdd');

// Appel du JSON
async function seaChoices() {
    try {
        const response = await fetch('./scripts/sea.json');
        const seaList = await response.json();

        seaSelect.innerHTML = '<option value="">Choisissez une mer</option>';


        seaList.mers_du_monde.forEach(groupe => {

            const optGroup = document.createElement('optgroup');
            optGroup.label = groupe.ocean;

            groupe.mers.forEach(nomMer => {
                const option = document.createElement('option');
                option.value = nomMer;
                option.textContent = nomMer;

                optGroup.appendChild(option);
            });

            seaSelect.appendChild(optGroup);
        });

    }
    catch (erreur) {
        console.error("Impossible de charger la liste des mers :", erreur);
        seaSelect.innerHTML = '<option value="">Erreur de chargement</option>';
    }
    finally {
        console.log('Tentative de chargement des mers terminée');
    }
}


seaChoices();

// Fonctions de validation

// Valider Étape 1
const validateStep1 = () => {
    let noError = true;

    const seaValue = sea.value.trim();
    const spotValue = spot.value.trim();
    const diveImgValue = diveImg.value;
    const maxImgSize = 1 * 1024 * 1024;
    const allowedTypes = ['image/jpeg', 'image/png'];

    // Sea
    if (seaValue === '') {
        setError(sea, "Le nom est requis");
        noError = false;
    } else {
        setSuccess(sea);
    }

    // Spot
    if (spotValue === '') {
        setError(spot, "Le nom du site est requis");
        noError = false;
    } else {
        setSuccess(spot);
    }

    // Img
    if (diveImgValue === '') {
        setError(diveImg, "Une photo est requise");
        noError = false;
    } else if (diveImg.files[0].size > maxImgSize) {
        setError(diveImg, "La photo ne doit pas dépasser 1MB");
        noError = false;
    } else if (!allowedTypes.includes(diveImg.files[0]?.type)) {
        setError(diveImg, "Formats acceptés : JPG, PNG, WEBP");
        noError = false;
    }
    else {
        setSuccess(diveImg);
    }

    // Changement d'étape si tout est valide
    if (noError === true) {
        steps(step1, step2, tab);
    }
};

// Valider Étape 2
const validateStep2 = () => {
    let noError = true;

    const dateValue = date.value;
    const durationValue = duration.value.trim();
    const depthValue = depth.value.trim();
    const tempValue = temperature.value.trim();
    const visibilityValue = visibility.value;
    const actualDate = new Date();
    const selectedDate = new Date(dateValue);

    // Date
    if (dateValue === '') {
        setError(date, "La date est requise");
        noError = false;
    } else if (selectedDate > actualDate) {
        setError(date, "La date ne peut pas être dans le futur");
        noError = false;
    } else {
        setSuccess(date);
    }
    //Duration
    if (depthValue === '') {
        setError(depth, "La profondeur est requise");
        noError = false;
    } else if (depthValue.length > 3) {
        setError(depth, "Ne peut pas dépasser 3 chiffres");
        noError = false;
    }
    //Duration
    if (durationValue === '') {
        setError(duration, "La durée est requise");
        noError = false;
    } else if (durationValue.length > 3) {
        setError(duration, "Ne peut pas dépasser 3 chiffres");
        noError = false;
    }
};



// Écouteurs d'événements (Listeners)

btnNext.addEventListener('click', (event) => {
    event.preventDefault();
    validateStep1();
});

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    validateStep2();
});


// ==========================================================================
// Utilitaires de style et navigation (BEM)
// ==========================================================================
function setError(element, message) {
    const inputControl = element.closest('.input-control');
    const errorDisplay = inputControl.querySelector('.input-control__error');
    errorDisplay.innerText = message;

    inputControl.classList.remove('input-control--success');
    inputControl.classList.add('input-control--error');
}

function setSuccess(element) {
    const inputControl = element.closest('.input-control');
    const errorDisplay = inputControl.querySelector('.input-control__error');
    if (errorDisplay) {
        errorDisplay.innerText = "";
    }

    inputControl.classList.remove('input-control--error');
    inputControl.classList.add('input-control--success');
}

function steps(previousStep, nextStep, firtsTab, nextTab) {
    previousStep.classList.remove('form-step--active');
    nextStep.classList.add('form-step--active');

}
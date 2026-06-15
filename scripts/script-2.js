// À faire — 3 fonctions :
// 1. plongeesProfondes(plongees) — retourne un tableau avec uniquement les plongées à plus de 30m.
// 2. dureeTotale(plongees) — retourne la durée totale de toutes les plongées (en minutes).
// 3. plongeeLaPlusLongue(plongees) — retourne l'objet correspondant à la plongée la plus longue.

// Filter, reduce et sort 

const dives = [
  { site: "Thistlegorm",     deepness: 32, duration: 47, nitrox: false },
  { site: "Blue Hole",       deepness: 55, duration: 25, nitrox: true  },
  { site: "Ras Mohammed",    deepness: 18, duration: 61, nitrox: false },
  { site: "Yolanda Reef",    deepness: 28, duration: 52, nitrox: false },
  { site: "SS Dunraven",     deepness: 28, duration: 38, nitrox: true  },
];

function deepDive(dives) {
  const more30 = dives.filter(dive => dive.deepness > 30);
  return more30;
}

console.log(deepDive(dives));

function totalDuration(dives) {
    const initialDuration= 0;
  return dives.reduce((purse, dive) => purse + dive.duration, initialDuration);
                    //  ↑ total      ↑ plongée courante              ↑ on part de 0
}
console.log(totalDuration(dives));

console.log('++++++')

function deepestDive(dives){
return dives.sort((diveA, diveB) => diveB.deepness - diveA.deepness)[0];
}
console.log(deepestDive(dives));

console.log('++++++')

function deepestDiveB(dives) {
  let plusProfonde = dives[0]; // on commence avec la première

  for (let i = 1; i < dives.length; i++) { // on commence à 1, pas 0
    if (dives[i].deepness > plusProfonde.deepness) {
      plusProfonde = dives[i]; // elle devient la nouvelle référence
    }
  }
  return plusProfonde; // return DEHORS de la boucle
}
console.log(deepestDiveB(dives));



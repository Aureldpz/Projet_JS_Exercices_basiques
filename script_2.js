// Demande à l'utilisateur de saisir un nombre
var nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertit la saisie en nombre entier
nombre = parseInt(nombre);

// Définit la fonction factorielle
function factorielle(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorielle(n - 1);
  }
}

// Calcule la factorielle du nombre saisi
var resultat = factorielle(nombre);

// Affiche le résultat dans la console
console.log("Le résultat est : " + resultat);
console.log("==============");
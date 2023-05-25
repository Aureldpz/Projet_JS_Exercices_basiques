// Fonction pour vérifier si une phrase est une question
function isQuestion(phrase) {
  return phrase.trim().endsWith('?');
}

// Fonction pour vérifier si une phrase est en majuscules
function isShouting(phrase) {
  return phrase === phrase.toUpperCase();
}

// Fonction pour vérifier si une phrase contient le mot "Fortnite"
function mentionsFortnite(phrase) {
  return phrase.toLowerCase().includes('fortnite');
}
console.log("==============");
// Fenêtre de prompt pour saisir la phrase
const userInput = prompt("Parle au bot adolescent :");

if (userInput) {
  if (isQuestion(userInput)) {
    console.log("Ouais Ouais...");
  } else if (isShouting(userInput)) {
    console.log("Pwa, calme-toi...");
  } else if (mentionsFortnite(userInput)) {
    console.log("On s'fait une partie soum-soum ?");
  } else if (userInput.trim() === "") {
    console.log("T'es en PLS ?");
  } else {
    console.log("Balek.");
  }
} else {
  console.log("Balek.");
}
const afficherPyramide = (nombreEtages) => {
  for (let i = 1; i <= nombreEtages; i++) {
    let ligne = "";

    // Ajoute les espaces
    for (let j = 1; j <= nombreEtages - i; j++) {
      ligne += " ";
    }

    // Ajoute les hashtags
    for (let k = 1; k <= i; k++) {
      ligne += "#";
    }

    console.log(ligne);
  }
};

const nombreEtages = parseInt(
  prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
);

afficherPyramide(nombreEtages);
console.log("==============");
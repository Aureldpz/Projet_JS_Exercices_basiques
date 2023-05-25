const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// Vérifier si tous les livres ont été empruntés au moins une fois
let tousEmpruntes = books.every(function(book) {
  return book.rented > 0;
});
console.log("==============");
// Afficher le résultat dans la console
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
console.log(tousEmpruntes ? "Oui, tous les livres ont été empruntés au moins une fois." : "Non, certains livres n'ont jamais été empruntés.");


// Trouver le livre le plus emprunté
let livrePlusEmprunte = books.reduce(function(livreA, livreB) {
  return (livreA.rented > livreB.rented) ? livreA : livreB;
});
console.log("==============");
// Afficher le titre du livre le plus emprunté dans la console
console.log("Le livre le plus emprunté est : " + livrePlusEmprunte.title);


// Trouver le livre le moins emprunté
let livreMoinsEmprunte = books.reduce(function(livreA, livreB) {
  return (livreA.rented < livreB.rented) ? livreA : livreB;
});
console.log("==============");
// Afficher le titre du livre le moins emprunté dans la console
console.log("Le livre le moins emprunté est : " + livreMoinsEmprunte.title);

// Rechercher le livre avec l'ID 873495
let livreRecherche = books.find(function(book) {
  return book.id === 873495;
});
console.log("==============");
// Afficher le titre du livre recherché dans la console
console.log("Le livre avec l'ID 873495 est : " + livreRecherche.title);


// Trouver l'index du livre avec l'ID 133712
var indexLivreASupprimer = books.findIndex(function(book) {
  return book.id === 133712;
});
console.log("==============");
// Vérifier si le livre a été trouvé
if (indexLivreASupprimer !== -1) {
  // Supprimer le livre du tableau
  books.splice(indexLivreASupprimer, 1);
  console.log("Le livre avec l'ID 133712 a été supprimé.");
} else {
  console.log("Aucun livre trouvé avec l'ID 133712.");
}

// Afficher le tableau de livres mis à jour dans la console
console.log("Livres après la suppression :", books);


// Fonction de comparaison pour le tri alphabétique des titres de livres
function compareTitles(a, b) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
}

// Copie du tableau des livres pour éviter de modifier l'original
const booksCopy = [...books];

// Supprimer le livre avec l'ID 133712
const indexToDelete = booksCopy.findIndex(book => book.id === 133712);
if (indexToDelete !== -1) {
  booksCopy.splice(indexToDelete, 1);
}

// Trier les livres par ordre alphabétique des titres
booksCopy.sort(compareTitles);

// Afficher les livres triés dans la console
console.log("Livres triés par ordre alphabétique (sans le livre supprimé) :");
booksCopy.forEach(book => {
  console.log(book.title);
});




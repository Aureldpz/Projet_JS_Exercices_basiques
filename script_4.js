const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtrer les entrepreneurs nés dans les années 70
let entrepreneursAnnees70 = entrepreneurs.filter(function(entrepreneur) {
  return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
});
console.log("==============");
// Afficher les entrepreneurs filtrés dans la console
console.log("Entrepreneurs nés dans les années 70 :");
console.log(entrepreneursAnnees70);


// Créer une nouvelle array avec le prénom et le nom des entrepreneurs
let entrepreneursPrenomNom = entrepreneurs.map(function(entrepreneur) {
  return entrepreneur.first + ' ' + entrepreneur.last;
});
console.log("==============");
// Afficher l'array des prénoms et noms des entrepreneurs dans la console
console.log("Array des prénoms et noms des entrepreneurs :");
console.log(entrepreneursPrenomNom);


// Obtenir la date actuelle
let dateActuelle = new Date();
let anneeActuelle = dateActuelle.getFullYear();

// Calculer l'âge de chaque inventeur aujourd'hui
let inventeursAges = entrepreneurs.map(function(inventeur) {
  let age = anneeActuelle - inventeur.year;
  return {
    first: inventeur.first,
    last: inventeur.last,
    age: age
  };
});
console.log("==============");
// Afficher l'âge de chaque inventeur dans la console
console.log("Âge de chaque inventeur aujourd'hui :");
inventeursAges.forEach(function(inventeur) {
  console.log(inventeur.first + ' ' + inventeur.last + ' : ' + inventeur.age + ' ans');
});


// Trier les entrepreneurs par ordre alphabétique de leur nom de famille
let entrepreneursOrdreAlphabetique = entrepreneurs.sort(function(entrepreneur1, entrepreneur2) {
  return entrepreneur1.last.localeCompare(entrepreneur2.last);
});
console.log("==============");
// Afficher les entrepreneurs triés par ordre alphabétique dans la console
console.log("Entrepreneurs triés par ordre alphabétique :");
console.log(entrepreneursOrdreAlphabetique);
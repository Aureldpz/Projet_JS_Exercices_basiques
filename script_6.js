function translateARN(arn) {
  // Dictionnaire des correspondances entre codons et acides aminés
  const codonToAminoAcid = {
    UCU: 'Sérine',
    UCC: 'Sérine',
    UCA: 'Sérine',
    UCG: 'Sérine',
    AGU: 'Sérine',
    AGC: 'Sérine',
    CCU: 'Proline',
    CCC: 'Proline',
    CCA: 'Proline',
    CCG: 'Proline',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UUU: 'Phénylalanine',
    UUC: 'Phénylalanine',
    CGU: 'Arginine',
    CGC: 'Arginine',
    CGA: 'Arginine',
    CGG: 'Arginine',
    AGA: 'Arginine',
    AGG: 'Arginine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine'
  };

  // Découper l'ARN en codons
  const codons = arn.match(/.{1,3}/g);

  // Traduire chaque codon en acide aminé
  const aminoAcids = codons.map(codon => codonToAminoAcid[codon]);

  // Joindre les acides aminés en une chaîne séparée par des tirets
  const protein = aminoAcids.join('-');

  return protein;
}

// ARN à traduire
const arn1 = 'UUACGCAGUAGA';
const arn2 = 'CCGUCGUUGCGCUACAGC';
const arn3 = 'CCUCGCCGGUACUUCUCG';
console.log("==============");
// Traduire les ARN en protéines et les afficher dans la console
console.log('ARN 1 : ' + arn1);
console.log('Protéine 1 : ' + translateARN(arn1));
console.log('ARN 2 : ' + arn2);
console.log('Protéine 2 : ' + translateARN(arn2));
console.log('ARN 3 : ' + arn3);
console.log('Protéine 3 : ' + translateARN(arn3));
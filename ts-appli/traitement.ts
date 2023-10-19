import { Personne } from './personne';
import { Adresse } from './adresse';
import { Enseignant } from './enseignant';

// objets Personne et Adresse
const personne1 = new Personne('John', 'Doe', 'Enseignant');
const adresse1 = new Adresse('123 Avenue Gustave Eiffel', 'Meaux', '77100');
const enseignant1 = new Enseignant('Prof', 'Expert');


// Affichez informations 
personne1.afficherInfos();
enseignant1.afficherProfession();


// Affichez adresse
console.log(`Adresse: ${adresse1.rue}, ${adresse1.ville}, ${adresse1.cp}`);

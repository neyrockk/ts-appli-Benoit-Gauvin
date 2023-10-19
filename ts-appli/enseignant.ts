import { Personne } from './personne';

export class Enseignant extends Personne {
    // Propriétés et méthodes spécifiques à la classe Enseignant

    profession: string;

    constructor(nom: string, prenom: string, profession: string) {
        super(nom, prenom);
        this.profession = profession;
    }

    // Méthode pour afficher la profession
    afficherProfession() {
        console.log(`Profession: ${this.profession}`);
    }
}

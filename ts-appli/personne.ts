export class Personne {
    // Propriétés et méthodes de la classe Personne
    constructor(public nom: string, public prenom: string, public profession: string) {}

    // afficher les informations de la personne
    afficherInfos() {
        console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}, Profession: ${this.profession}`);
    }
}

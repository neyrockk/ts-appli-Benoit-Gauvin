"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    // Propriétés et méthodes de la classe Personne
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    // Méthode pour afficher les informations de la personne
    Personne.prototype.afficherInfos = function () {
        console.log("Nom: ".concat(this.nom, ", Pr\u00E9nom: ").concat(this.prenom));
    };
    return Personne;
}());
exports.Personne = Personne;

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var personne_1 = require("./personne");
var adresse_1 = require("./adresse");
var enseignant_1 = require("./enseignant");

// Créez des objets Personne et Adresse
var personne1 = new personne_1.Personne('John', 'Doe');
var adresse1 = new adresse_1.Adresse('123 Avenue Gustave Eiffel', 'Meaux', '77100');
var enseignant1 = new enseignant_1.Enseignant('Prof', 'Expert');

// Effectuez des opérations de test sur ces objets

// Affichez les informations de la personne
personne1.afficherInfos();

// Affichez les propriétés de l'adresse
console.log("Adresse: ".concat(adresse1.rue, ", ").concat(adresse1.ville).concat(adresse1.cp));

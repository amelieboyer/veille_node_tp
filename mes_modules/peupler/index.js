"use strict"
const tableau = require('./tableaux.js')
const prenom = tableau.prenom
const nom = tableau.nom
const telephone = tableau.telephone
const courriel = tableau.courriel

const peupler_json = () => {

	let position;
	let tab = [];

	for(let i=0; i<10; i++){

		let oPerso = {}

		position = Math.floor(Math.random() *prenom.length)
		oPerso['prenom'] = prenom[position]
		let pPrenom = position;

		position = Math.floor(Math.random() *nom.length)
		oPerso['nom'] = nom[position]
		let pNom = position;

		position = Math.floor(Math.random() *telephone.length)
		oPerso['telephone'] = telephone[position]

		position = Math.floor(Math.random() *courriel.length)
		oPerso['courriel'] = prenom[pPrenom] + nom[pNom] + courriel[position]

		tab.push(oPerso)


	}

return(tab)

}

module.exports = peupler_json
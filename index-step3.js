$(document).ready(main);

// Fonction principale

function main(){

	var tentative = 3;

	var number = Math.floor(Math.random() * 101);
	console.log(number);

	var nbClick = 0;
	var nbClickMax = 3;

	// var number = 1 + (150-1+1) * Math.random();
	// return Math.floor(number);

	function demarrerPartie (){

		tentative = 3;
		$('#vies').text(tentative);

		number;

		var nbClick = 0;
		var nbClickMax = 3;
	}
	console.log('ok' + demarrerPartie());


	function clickValider(){

		var val = parseInt($('input').val(),10);

		function partieGagnee(){

			return (val == number)
		}

		function partiePerdue(){

			return (tentative == 0);
		}

		if (partieGagnee()){

			alert('C\'est gagné !');
			demarrerPartie();

		} else if (val > number) {

			alert('Perdu, votre nombre est trop grand !');
			tentative--;
			$('#vies').text(tentative);

		} else {

			alert('Perdu, votre nombre est trop petit !');
			tentative--;
			$('#vies').text(tentative);

			/* METHODE SIMPLE : JUSTE AVEC NB DE TENTATIVES DEFINI*/

		} if (partiePerdue()) {
			alert('C\'est perdu, vous n\'avez pas trouvé le nombre mystère');
			demarrerPartie();
		}
	}
	/* SINON METHODE AVEC NB DE CLICK LIMITE */ 

// function compteur(){
// 	nbClick++;
// 	if (nbClick >= nbClickMax) {
// 		alert('C\'est perdu, vous n\'avez pas trouvé le nombre mystère');
// 		location.reload(true);
// 	}
// }

$('button').click(function(){
	clickValider();
});
}

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.


	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
				*/

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/

	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/


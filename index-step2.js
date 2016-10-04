$(document).ready(pied);

// Fonction principale
function pied(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Stocker un nombre ENTIER généré "aléatoirement"

		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
		
		var number = Math.floor(Math.random() * 101);
		console.log(number);

	function clickValider() {

		var val = parseInt($('input').val(),10);

		if (val === number) {
			alert('C\'est gagné !');

		} else if (val > number) {
			alert('C\'est perdu, votre nombre est trop grand !');

		}	else {
			alert('C\'est perdu, votre nombre est trop petit !');
		}
	}

	$('button').click(function(){
		clickValider()
	});

}
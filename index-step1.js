$(document).ready(main);

// Fonction principale
function main(){

	console.log('nombreMystere');
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon,
			// Afficher une alert Perdu


	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus

	function clickValider(){

			var content = $('input').val();

			if (content === '102') {
				alert('C\'est gagné !');

			} else {
				alert('C\'est perdu !');
			}
	}

		$('button').click(function(){
			clickValider()
		});
}
$(document).ready(main);

// Fonction principale

function main(){

	var tentative;

	var number;

	var val;

	function demarrerPartie (){

		tentative = 3;

		$('#vies').text(tentative);function partieGagnee(){
			return (val === number);
		}

		function partiePerdue(){
			return (tentative === 0);
		}

		number = Math.floor(Math.random() * 101);
	}

	function partieGagnee(){
		return (val === number);
	}

	function partiePerdue(){
		return (tentative === 0);
	}

	function clickValider(){

		val = parseInt($('input').val(),10);

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
		} 

		if (partiePerdue()) {
			alert('C\'est perdu, vous n\'avez pas trouvé le nombre mystère');
			demarrerPartie();
		}
	}

	demarrerPartie();

	$('button').click(function(){
		clickValider();
	});
}
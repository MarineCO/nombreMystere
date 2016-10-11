$(document).ready(main);

function main(){

	var tentative = prompt('Choisissez votre nombres de tentatives');
	$('span').text(tentative);
	
	var nbClick = 0;
	var nbClickMax = $('span').text(tentative);

	var min = parseInt(prompt('Choisit la valeur minimale du nombre mystère'));
	var max = parseInt(prompt('Choisit la valeur maximale du nombre mystère'));
	
	
	var number = Math.floor(Math.random() * (max - min + 1)) + min;


	function clickValider(){

		var val = parseInt($('input').val(),10);

//- Créer 2 possibilités, une pr chaque joueur

//- Meme nb de vies pr chaque

//	détecter quand joueur 1 et quand joueur 2 

//- intégrer ces possibilités dans le jeu en faisant alterner les 2


		function chgmtJoueur() {
			player1 == 1
			tentative--;
			$('#one').text(tentative);

			player2 == 2
			tentative--;
			$('#two').text(tentative);

		}
		enCours = 



		if (val === number){
			alert('Gagné !');
			location.reload(true);

		} else if (val > number) {
			alert('Perdu, votre nombre est trop grand !');
			tentative--;
			$('span').text(tentative);
			
		} else {
			alert('Perdu, votre nombre est trop petit !');
			tentative--;
			$('span').text(tentative);

		} if (compteur()){}
	}

	function compteur(){
		nbClick++;
		if (nbClick >= nbClickMax) {
			alert('C\'est perdu, vous n\'avez pas trouvé le nombre mystère');
			location.reload(true);
		}
	}
	
	$('button').click(function(){
		clickValider()
	});
}



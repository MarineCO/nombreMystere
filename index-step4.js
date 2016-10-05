$(document).ready(main);

function main(){

	var tentative = 3;
	var number = Math.floor(Math.random() * 101);
	console.log(number);

	var nbClick = 0;
	var nbClickMax = 3

	var choix = prompt('Choisissez votre nombres de tentatives');
	$('#vies').text(choix);

	function clickValider(){

		var val = parseInt($('input').val(),10);

		if (val === number){
			alert('Gagné !');
			location.reload(true);

		} else if (val > number) {
			alert('Perdu, votre nombre est trop grand !');
			tentative--;
			$('#vies').text(tentative);
			
		} else {
			alert('Perdu, votre nombre est trop petit !');
			tentative--;
			$('#vies').text(tentative);

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




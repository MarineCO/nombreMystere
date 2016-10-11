$(document).ready(main);

function main(){

	var tentative = prompt('Choisissez votre nombres de tentatives');
	$('#vies').html(tentative);
	
	var nbClick = 0;
	var nbClickMax = $('#vies').html(tentative);

	var min = parseInt(prompt('Choisit la valeur minimale du nombre mystère'),10);
	$('#mini').html(min);

	var max = parseInt(prompt('Choisit la valeur maximale du nombre mystère'),10);
	$('#maxi').html(max);
	
	var number = Math.floor(Math.random() * (max - min + 1)) + min;


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




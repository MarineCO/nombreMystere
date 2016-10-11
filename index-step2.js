$(document).ready(pied);

function pied(){

	var number = Math.floor(Math.random() * 101);

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
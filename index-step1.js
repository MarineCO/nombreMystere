$(document).ready(main);

function main(){

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
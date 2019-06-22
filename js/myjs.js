/**
 * 2019.06.18
 */

$(document).ready(function (){
	$('.svgLi').mouseenter(function(){		
		$(this).children(':eq(0)').children(':eq(0)').css('fill','#87CEFA');
	});
	$('.svgLi').mouseleave(function(){
		$(this).children(':eq(0)').children(':eq(0)').css('fill','#0a95e9');
	});
	
	
});
function myShowFunction(id) {
	$('#'+id).toggle('slow','swing');
}

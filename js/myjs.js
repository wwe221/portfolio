/**
 * 2019.06.18
 */
function myShowFunction(id) {
	var test1 = document.getElementById(id).style.display;	
	if (test1 == 'none'|| test1=='') {
		document.getElementById(id).style.display = "block";
	} else {
		document.getElementById(id).style.display = "none";
	}

}

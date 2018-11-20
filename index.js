function getWindowSize() {

	// console.log($( window ).width());

	if ($( window ).width() >= 900) {
		document.getElementById("break-link").setAttribute("href", "#break");
		document.getElementById("forin-link").setAttribute("href", "#for...in");
		document.getElementById("switch-link").setAttribute("href", "#switch");
		document.getElementById("throw-link").setAttribute("href", "#throw");
		document.getElementById("trycatch-link").setAttribute("href", "#try...catch");
	}

	else if ($( window ).width() < 900) {
		document.getElementById("break-link").setAttribute("href", "#break-div");
		document.getElementById("forin-link").setAttribute("href", "#forin-div");
		document.getElementById("switch-link").setAttribute("href", "#switch-div");
		document.getElementById("throw-link").setAttribute("href", "#throw-div");
		document.getElementById("trycatch-link").setAttribute("href", "#trycatch-div");
	}
}

$( window ).resize( (getWindowSize) );	//also checks window size when resizing browser window.

$(document).ready(getWindowSize);	//change href links on navbar which screen size at minimum 900px width. Also run function after DOM loads.





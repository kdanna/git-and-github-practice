//Javascript to be added

window.onload = function() {

	document.querySelector("#button-yellow").addEventListener("click", promptEmail);

	function promptEmail () {
		prompt("What is your email?");
	}
};
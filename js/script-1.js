let x;

window.onload = function(){
    x =  document.querySelector("#ola");
	x.addEventListener("click", troca, true);
	x.addEventListener("mouseover", defer, true);
	x.addEventListener("mouseout", volta, true);
};


	function troca() {
		x.innerHTML = "Hello World";
	}

	function defer() {
		x.innerHTML = ";)...........<3";
	}

	function volta() {
		x.innerHTML = "VOLTE <3";
	}
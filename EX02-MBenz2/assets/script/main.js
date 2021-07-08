console.log("Hola, archivo externo de JS");
// dom, document object model

// solo 1 elemento, el primero encontrado
// let tbl = document.querySelector("a");

// n-elementos, todos los del arbol
//let links = document.querySelectorAll("a");

/*
// like a for
links.forEach(function(link){
	console.log(link);
})

//console.log(links);
let celda = document.querySelectorAll("td");
celda.forEach(function(td){
	td.addEventListener("click",function(){
		console.log("click");  // imprime donde das click
		console.log(this);  // nombre de valor
	})
})

// evento en close
let cerrar = document.querySelectorAll(".close");
cerrar.forEach(function(cierra){
	cierra.addEventListener("click",function(ev){
		// para no ejecutar accion
		ev.preventDefault();
		return false;

		//console.log("va");
	})
})

// quita o agrega objetos
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
	icono.classList.remove("fas","fa-star");
	icono.classList.add("fas fa-star");
})

// quita o agrega animaciones
let anima = document.querySelector(".content")
anima.classList.remove("animate__fadeInDown");
anima.classList.remove("animate__animated");
anima.classList.add("animate__animated");
anima.classList.add("animate__fadeOut");

// una sola vez, lo hizo repetidamente
setTimeout(function(){
	location.href="/";	
},5000);
*/
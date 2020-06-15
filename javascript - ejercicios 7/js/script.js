// Ejercicios JS (Parte 7)


// 1.	 Tener un contenedor en HTML vacío y que al hacerle click a los 5 segundos cambie de color. 

// let contenedor = document.getElementById('contenedor');
// let cambiarColor = function(){
//     contenedor.addEventListener('click', contenedor.style.background = 'green');
// }
// setTimeout(cambiarColor, 5000);


// 2.	Tener en el HTML un botón "Ocultar" que al darle click logremos que oculte el contenedor creado en el punto 1. 
// A su vez dicho botón pasará a decir "Mostrar" cuando el contenedor esté justamente oculto. 

// let contenedor = document.getElementById('contenedor');
// let boton = document.getElementById('boton');
// let boton2 = document.getElementById('boton2');

// boton.addEventListener('click', function(){
//     contenedor.classList.toggle('contenedor');
//     boton.style.display = 'none';
//     boton2.style.display = 'block';
// });

// boton2.addEventListener('click', function(){
//     contenedor.classList.toggle('contenedor');
//     boton.style.display = 'block';
//     boton2.style.display = 'none';
// });
// Ejercicios JS (Parte 5)


// 1)	A través de código crear un objeto JSON de “usuario” definiendo sus siguientes atributos:
// •   id
// •   Nombre
// •   Edad
// •   Género
// •   Mail
// Mostrar en pantalla a través de un innerHTML los resultados.

// let usuario = {
//     id: "urchi_87",
//     nombre: "Ramon",
//     apellido: "Urchipia",
//     edad: 33,
//     genero: "Masculino",
//     mail: "ramonurchipia@gmail.com"
// };

// let contenidoJson = JSON.stringify(usuario);
// document.body.innerHTML = contenidoJson;
 
// 2)	Crear un arrow function que permita sumar 2 números.   
// Ejemplos del método tradicional para tener como guía:
 
// function suma(num1, num2) {
//  return num1 + num2;
// }

// let suma = (num1, num2) =>{
//     return num1 + num2;
// }
// console.log('La suma da: ' + suma(50, 20));
 
// 3)	Crear un arrow function (función flecha) que permita saludar a todas las personas que pueden ingresar a nuestra web. 
// El mensaje final deberá ser por ej: "Hola Marcela". 
// *Tener en cuenta que no conocemos el nombre de nuestros usuarios.

// let nombre = prompt('Ingresa tu nombre');
// let saludo = () =>{
//     return alert('Bienvenido ' + nombre + '!');
// }
// saludo();

// 4)	 Tener un botón llamado "Cambiar" que cuando el usuario pase sobre él, cambie su aspecto con respecto al color de fondo, tamaño y color de letra, padding y bordes del mismo y cuando deje de estar sobre el botón que vuelva a su estado natural.

// let boton = document.getElementById('boton');
// boton.addEventListener('mouseover', function(){
//     boton.style.background = 'red';
//     boton.style.width = '300px';
//     boton.style.height = '300px';
//     boton.style.color = 'white';
//     boton.style.padding = '50px';
//     boton.style.border = 'none';
// })

// boton.addEventListener('mouseout', function(){
//     boton.style = 'none';
// })

// 5)	 De la siguiente api, mostrar las imágenes de los usuarios:
// https://randomuser.me/api

// function obtener() {
//     fetch('https://randomuser.me/api') 
//     .then(data => data.json()) 

//     .then( data=> { 
//         let foto = document.createElement('img');
//         foto.setAttribute("src", data.results[0].picture.large);
//         document.body.appendChild(foto);
        
//     });
// };
// obtener();

// 6)	 Crear un carrito de compras aplicando HTML, CSS y JS con los siguientes puntos a tener en cuenta:
// •   Añadir productos al listado de compras, uno por uno.
// •   Eliminar un producto específico del listado. 
// •    Eliminar todos los productos existentes del listado. 
// •    A medida que se vayan agregando productos al listado, que se muestre el precio total. (Adicional, no obligatorio)

// *Deberán utilizar localstorage



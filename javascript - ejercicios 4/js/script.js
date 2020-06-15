// Ejercicios JS (Parte 4)

// 1)	En base al siguiente ejemplo se deberá hacer lo siguiente:
// -input nombre
// -input apellido
// -boton enviar
// -tildar terminos y condiciones

// let formulario = document.getElementsByName('formulario')[0];
// let elmentos = formulario.elements;
// let boton = document.getElementById('boton');

// let validarNombreApellido = function(e){
//     if(formulario.nombre.value == 0){
//         alert('Completa el campo nombre');
//         e.preventDefault();
//     } else if(formulario.apellido.value == 0){
//         alert('Completa el campo apellido');
//         e.preventDefault();
//     } else if(formulario.terminos.checked == false){
//         alert('Acepta los terminos');
//         e.preventDefault()
//     }
// }

// let validar = function(e){
//     validarNombreApellido(e);
//     validarTerminos(e);
// }
// formulario.addEventListener('submit', validar);

// ●	Obtener el valor ingresado dentro de cada input y asegurarnos que estén guardados. (Tip: usar value).   
// ●	Definir un tope máximo de longitud para los campos de Nombre y Apellido de 20 caracteres cada uno (aplicando JS).
// ●	Validar los campos de textos informando si están vacíos o no (si es que se completan o no).
// ●	Validar e informar si el checkbox está seleccionado o no. 


// 4)	Se le pedirá al usuario un número del 0 al 50 y se deberá mostrar el resultado por escrito.
// Ej: si el usuario ingresa 36 se deberá mostrar “Treinta y seis”.
// *****************lo hice del 1 al 3

// let boton = document.getElementById('boton');
// let input = document.getElementById('input');
// let numeros = ['uno', 'dos', 'tres'];

// let obtenerNumero = function(){
//     if(input.value == 1){
//         alert(numeros[0]);
//     } else if(input.value == 2){
//         alert(numeros[1]);
//     } else if(input.value == 3){
//         alert(numeros[2]);
//     }else{
//         alert('Ingresa un numero del 1 al 3');
//     }
// }
// boton.addEventListener('click', obtenerNumero);



// -----------------VARIABLES

// var nombre;

// nombre = prompt("Ingresa tu nombre");
// edad = 30 + 3;

// console.log(nombre + " tiene " + edad + " años.");



// ---------------------TIPO DE DATOS 

// NUMERICO Int o float
// var edad = 333.62; 

// STRING
// var nombre = "Ramon";
// var apellido = "Urchipia";
// document.write(nombre + " " + apellido);

// ARRAY 
// var amigos = ["Juan", "Pepe", "Rick", 50, false];
// document.write(amigos[2]);

// OBJETOS
// var objeto = {
//     color: "Black",
//     tamaño: 50
// }

// BOOLEANO
// var booleano = false

// UNDEFINED 
// var ramonUrchipia;
// document.write(ramonUrchipia);

// NULL 
// var numero2 = 10;
// var numero2 = null;

// NAN 
// var texto2 = "Hola";
// document.write(texto2 * 6);


// --------------------------------------ARRAYS

// var amigos = ["Carlos", "Juan", "Roberto"];

// amigos[0] = "Ramon";
// console.log(amigos[0])

// ------------------------METODOS PARA ARRAYS

// var amigos = ["Zarlos", "Juan", "Roberto"];
// var enemigos = ["Oscar", "Diego", "Joan"];
// var amigosYenemigos = amigos.concat(enemigos);

// console.log(amigosYenemigos);
 
// LONGITUD
// console.log("Tenes " + amigos.length + " amigos." )

// AGREGAR
// amigos[amigos.length] = "Fernando";

// OTRA FORMA DE AGREGAR
// amigos.push("Juan", "Maria");

// ELIMINAR EL ULTIMO
// amigos.pop();

// CONCATENAR
// var amigos = ["Carlos", "Juan", "Roberto"];
// var enemigos = ["Oscar", "Diego", "Joan"];
// var amigosYenemigos = amigos.concat(enemigos);

// console.log(amigosYenemigos);

// JOIN agrega algo a los elementos
// document.write(amigos.join(" : "));

// ORDENAR
// var ordenar = amigos.sort();
// document.write(ordenar);



// ---------------------------------CONDICIONALES

// var nombre = "Juan",
//     edad = 33;

// if(condicion){
    // instrucciones
// } else if (condicion){
    // instrucciones
// } else{
    // instrucciones
// }

// -----------------------CICLO FOR 

// for( i = 0; i <= 10; i++){
//     document.write(i + "<br>")
// }

// for con variable
// var numeroDeUsuarios = 50;
// for( i = 0; i <= numeroDeUsuarios; i++){
//     document.write(i + "<br>");
// }

// for con array 
// var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// for(i = 0; i <= dias.length -1; i++){
//     console.log(dias[i]);
// }

// -----------------------------CICLO WHILE 

// i = 0;
// while(i <= 10){
//     document.write(i + "<br>")
//     i++;
// }

//WHILE CON ARRAY



// numeroDias = dias.length -1;
// i = 0;
// while(i <= numeroDias){
//     document.write(dias[i] + "<br>")
//     i++;
// }


// ---------------------FUNCIONES 

// function saludo(nombre){
//     document.write("Holaaaa " + nombre);
// }
// saludo("Ramon");

// function suma(num1, num2){
//     document.write(num1 + num2)
// }
// suma(25, 63);

// function suma(num1, num2){
//     return num1 + num2;
// }
// document.write(suma(52, 89));

// var suma = function(num1, num2){
//     return num1 + num2;
// }
// document.write(suma(52, 89));

// FUNCION CON IF

// function numeroMaximo(valor1, valor2){
//     if(valor1 > valor2){
//         return valor1;
//     } else{
//         return valor2;
//     }
// }
// console.log("El numero mas grande es: " + numeroMaximo(10, 20));


// --------------------FUNCIONES Y FORMULARIOS

// ver el html
// var suma = function(numero1, numero2){
//     var numero1 = parseInt(document.getElementById('numero1').value);
//     var numero2 = parseInt(document.getElementById('numero2').value);

//     var resultado = numero1 + numero2;
//     return resultado;
// }


// ------------------METODOS PARA CADENAS DE TEXTO

// var texto = "Ramon Urchipia";
// mide la cantidad
// var textoNuevo = texto.length;

// corta desde esa posicion 
// var textoNuevo = texto.substring(3);

// corta desde la posicion del segundo parametro 
// var textoNuevo = texto.substr(0, 5);

// busca desde la posicion del segundo parametro
// var textoNuevo = texto.indexOf("a", 5)

// busca desde el final 
// var textoNuevo = texto.lastIndexOf("a")

// reemplaza
// var textoNuevo = texto.replace(texto, "Ricardo")

// document.write(textoNuevo);


// --------------------DOM 

// 1) Crear el elemento.
// var elemento = document.createElement('h2');
// 2) Crear un nodo de texto.
// var contenido = document.createTextNode('Este es el nuevo texto');
// 3) Añadir el nodo de texto al elemento.
// elemento.appendChild(contenido);
// 4) Agregar atributos al elemento.
// elemento.setAttribute("align", "center");
// 5) Agregar el elemento a documento. 
// document.getElementById('subtitulo').appendChild(elemento);

// ----------------------EVENTOS 

// EJEMPLO 1

    // var saludo = function(){
    //     console.log("Saludoooooos");
    // }

    // var saludo2 = function(){
    //     console.log("Saludoooooos 22222");
    // }

    // var boton = document.getElementById('boton');
    // boton.addEventListener('click', saludo);
    // boton.addEventListener('click', saludo2);


// EJEMPLO 2

// var focus = function(){
//     console.log('Focuuuussss');
// }

// var input = document.getElementById('input');
// input.addEventListener('focus', focus);

// EJEMPLO 3
// quitar un evento 

// var saludo = function(){
//     console.log("Saludoooooos");
// }

// var saludo2 = function(){
//     console.log("Saludoooooos 22222");
// }

// var boton = document.getElementById('boton');
// boton.addEventListener('click', saludo);
// boton.addEventListener('click', saludo2);
// boton.removeEventListener('click', saludo);

// EJEMPLO 4
// para saber que tipo de evento es 

// var saludo = function(e){
//     console.log("Este evento es de tipo: " + e.type);
// }

// var boton = document.getElementById('boton');
// boton.addEventListener('click', saludo);

// EJEMPLO 5
// para ver a que se esta aplicando

// var saludo = function(e){
//     console.log("Este evento se aplica a: " + e.target);
// }

// var boton = document.getElementById('boton');
// boton.addEventListener('click', saludo);

// EJEMPLO 6

// var prevenir = function(e){
//     console.log('Esta previniendo');
//     e.preventDefault();
// }

// var enlace = document.getElementById('enlace');
// enlace.addEventListener('click', prevenir);

// ---------------------FORMULARIOS
// e----> para que no se envien los datos si falta completar algo

// var formulario = document.getElementsByName('formulario')[0];
// var elementos = formulario.elements; 
// var boton = document.getElementById('btn');

// var validarNombre = function(e){
//     if(formulario.nombre.value == 0){
//         alert("Completa el campo nombre");
//         e.preventDefault();
//     }
// };

// var validarRadio = function(e){
//     if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){

//     } else{
//         alert("Completa sexo")
//         e.preventDefault();
//     }
// };

// var validarTerminos = function(e){
//     if(formulario.terminos.checked == false){
//         alert("Acepta los terminos");
//         e.preventDefault();
//     }
// }

// var validar = function(e){
//     validarNombre(e);
//     validarRadio(e);
//     validarTerminos(e);
    
// }

// formulario.addEventListener('submit', validar);


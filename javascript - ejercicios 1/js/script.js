// Ejercicios JS (Parte 1)

// 1)	Al usuario se le pide completar nombre, apellido y edad.
// A su vez se le mostrará en pantalla el resultado en una sola ventana que confirmará sus datos ingresados. 

// let nombre = prompt('Ingrese su nombre');
// let apellido = prompt('Ingrese su apellido');
// let edad = prompt('Ingrese su edad');
// let datos = document.write("Hola " + nombre + " " + apellido + ", usted tiene " + edad + " años.");

// 2)	Se le pedirá al usuario un número y se le mostrará en pantalla si es divisible por 2 o no. (Dando como resultado un número entero).


// let numero = prompt('Ingresa un numero');

// if(numero % 2 == 0){
//     document.write(numero + ' dividido 2 es: ' + numero / 2);
// } else{
//     document.write(numero + " no es divisible por 2");
// }


// 3)	Se le pedirá al usuario ingresar tres números y se le mostrará en pantalla cuál es el mayor de ellos.

// let numero1 = prompt('Ingresa el primer numero');
// let numero2 = prompt('Ingresa el segundo numero');
// let numero3 = prompt('Ingresa el tercer numero');

// if(numero1 > numero2 || numero1 > numero3){
//     document.write('El primer numero es el mayor: ' + numero1);
// } else if(numero2 > numero1 || numero2 > numero3){
//     document.write('El segundo numero es el mayor: ' + numero2);
// } else{
//     document.write('El tercer numero es el mayor: ' + numero3);
// }

// 4)	Pedir al usuario un número, sumarle 5 y mostrar el resultado por pantalla. 

// let numero = prompt('Ingresa un numero');
// let masCinco = parseInt(numero) + 5;
// document.write(numero + ' mas 5 es: ' + masCinco);

// 5)	Se debe preguntar al usuario su edad y calcular en base a su respuesta la cantidad de días que tienen esos años. Muestra la respuesta a través de una alerta.

// let edad = prompt('Ingresa tu edad');
// let dias = parseInt(edad) * 365;
// let cantidadDeDias = alert('Viviste ' + dias + ' dias');

// 6)	Convertir a código la siguiente expresión:
// Si te invitan a un evento estarás emocionado en ir si es que darán souvenir o de comer.
// Si te invitan hasta 3 eventos, bajo las mismas condiciones definidas anteriormente, en una misma semana irás igual para cumplir terminando con más cansancio. De otra manera rechazaras las invitaciones amablemente.


// var invitacion = prompt('Venis al evento? Si - No').toLowerCase();

// if(invitacion == 'si'){

//     let souvenir = prompt('Hay souvenir?').toLowerCase();
//     let comida = prompt('Hay comida?').toLowerCase();
    

//     if(souvenir == 'si' || comida == 'si'){
//         document.write('Dale voy')
//     } else{
//         document.write('Ni en pedo');
//     }

// }else{
//     document.write('No, estoy cansado');
// }
 
 


// 7)	Mostrarle al usuario por pantalla un “Hola” y su nombre cuando se le pregunte cómo se llama. 

// let nombre = prompt('Como es tu nombre?');
// document.write('Hola ' + nombre);

// 8)	Se le pedirá al usuario 2 números para generar la suma, la resta, la división y la multiplicación entre ellos (Preguntar al usuario que operación quiere realizar). 

// let numero1 = parseInt(prompt('Ingresa un numero'));
// let numero2 = parseInt(prompt('Ingresa otro numero'));
// let operacion = prompt('Que operacion queres hacer? Ingresar: " +, -, *, / "')

// let suma = function(){
//     return document.write(numero1 + numero2);
// }

// let resta = function(){
//     return document.write(numero1 - numero2);
// }

// let multiplicacion = function(){
//     return document.write(numero1 * numero2);
// }

// let division = function(){
//     return document.write(numero1 / numero2);
// }

// if(operacion == "+"){
//     suma();
// } else if(operacion == "-"){
//     resta();
// } else if(operacion == "*"){
//     multiplicacion();
// } else if(operacion == "/"){
//     division();
// } else{
//     document.write('Ingresa una operacion valida')
// }




// 9)	Un estudiante necesita saber el promedio de sus 3 calificaciones que obtuvo en sus materias a modo de control. 
// Una vez que ingresa al sistema se le pedirá: 
// a)	nombre y apellido
// b)	nombre de la materia
// c)	las 3 calificaciones obtenidas
// 	Se le deberá mostrar en pantalla el siguiente resultado:

// 		Nombre y Apellido: Pepe Milano
// 		Materia: X (el nombre de la materia previamente cargada)
// 		Promedio final: 7.45
		
// let alumno = prompt('Ingresa tu nombre y apellido');
// let materia = prompt('Ingresa la materia');
// let nota1 = parseInt(prompt('Ingresa la primer nota'));
// let nota2 = parseInt(prompt('Ingresa la segunda nota'));
// let nota3 = parseInt(prompt('Ingresa la tercer nota'));
// let promedio = function(){
//     suma = nota1 + nota2 + nota3;
//     final = suma / 3;
//     return final.toFixed(2);

// };

// document.write('Nombre y Apellido: ' + alumno + "<br>" +
// 'Materia: ' + materia + "<br>" +
// 'Promedio: ' + promedio());


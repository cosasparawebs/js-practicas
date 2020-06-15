// Ejercicios JS (Parte 2)

// 1)	Crear una calculadora  que genere la suma, resta, división y multiplicación utilizando funciones.
// Si el dato que introduce no es válido, se le informará que es erróneo y que lo introduzca correctamente.  También tener en cuenta que sucede cuando dividimos por el número 0 . 

// lo hice en la parte 1

// 2)	Pedirle al usuario un número y que se le informe si ese número es positivo, negativo o cero.

// let numero = parseInt(prompt('Ingresa un numero'));
// if(numero <= -1){
//     document.write(numero + ' es un numero negativo');
// } else if (numero >=1){
//     document.write(numero + ' es un numero positivo');
// }else{
//     document.write('El numero que ingresaste es cero');
// }


// 3)	Dada la edad de una persona (entre 1 y 110 años) y su género ('F' para mujeres, 'M' para hombres), indicar si está en edad para jubilarse o no. 
// Observación: Las mujeres se jubilan con 60 años o más. Los hombres se jubilan con 65 años o más. 
// Ejemplo: Si ingresa 60 y 'M', debe mostrar como resultado en pantalla “No se jubila”. 
// Si el dato que introduce no es válido, se le informará que es erróneo y se pedirá que lo introduzca correctamente. 

// let sexo = prompt('Ingrese si sexo: M / F').toLowerCase();
// let edad = parseInt(prompt('Ingrese su edad'));

// if(sexo == 'm' && edad >= 65){
//     document.write('Ud señor, puede jubiarse.');
// } else if(sexo == 'm' && edad <= 65){
//     document.write('Ud señor, no esta en edad para jubiarse.');
// } else if(sexo == 'f' && edad >= 60){
//     document.write('Ud señora, puede jubiarse.')
// } else if(sexo == 'f' && edad <= 60){
//     document.write('Ud señora, no esta en edad para jubiarse.');
// } else{
//     document.write('Por favor, ingrese un dato valido.')
// }


// 4)	Se le pedirá al usuario ingresar una letra y se le deberá informar si es o no una letra vocal.

// let letra = prompt('Ingresa una letra').toLowerCase();
// if(letra.includes('a') || letra.includes('e') ||letra.includes('i') || letra.includes('o')|| letra.includes('u')){
//     document.write(letra + ' es una vocal.');
// }else{
//     document.write(letra + ' es una consonante.')
// }


// 5)	Pedir dos números al usuario y mostrar como resultado el rango de valores que hay entre ellos, informando a su vez cuáles son pares e impares. 
// Si el dato que introduce no es válido, se le informará que es erróneo y se pedirá que lo introduzca correctamente. 

// let numero1 = parseInt(prompt('Ingresa un numero'));
// let numero2 = parseInt(prompt('Ingresa otro numero'));

// if(numero1 <= numero2){
//     for(i = numero1; i < numero2 -1; i++){
//         document.write(i+1 + '<br>');
//     }
// }else{
//     for(i = numero1; i > numero2 +1; i--){
//         document.write(i-1 + '<br>');
//     }
// }


// 6)	Mostrar en pantalla una escalera de asteriscos de 5 filas.
// Ejemplo:
// *
// **
// ***
// ****
// *****

// let aterisco = ['*', '**', '***', '****', '*****']

// for(i = 0; i < 5; i++){
//     document.write(aterisco[i] + '<br>');
// }



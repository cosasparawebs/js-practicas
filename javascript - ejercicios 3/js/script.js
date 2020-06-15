// Ejercicios JS (Parte 3)

// 1)	Se tendrá que calcular y mostrar los números primos entre 1 y 150

// for (var i = 2; i <= 150; i++) {
// 	var primo = 1;
// 	var contador = 2;
// 	while(contador <= i/2 && primo) {
// 		if (i % contador === 0) {
// 			primo = 0;
// 		}
// 		contador++;
// 	}
// 	if( primo ) {
// 		document.write(i + "<br>");
// 	}
// }


//--------------------- este codigo esta bien pero da como resultado el rango de pares, lo dejo por las dudas------------------
// for (primos = 1; primos <= 150; primos++) {
// 	if (primos % 2 == 0) {
// 		document.write(primos+"<br>");
// 	}else {
// 		console.log(primos+': No es primo');
// 	}
// }

// 2)	Introducir una serie indeterminada de números en un programa y que su suma no supere el valor de 100.
// Cuando esto suceda se debe mostrar el total acumulado y el contador de cuantos números se han introducido.




// 3)	Pedir al usuario que ingrese 3 palabras y luego informar cual es la palabra con mayor cantidad de letras junto a la cantidad.

// let palabra1 = prompt('Ingresa la primer pañabra');
// let palabra2 = prompt('Ingresa la segunda pañabra');
// let palabra3 = prompt('Ingresa la tercera pañabra'); 

// if(palabra1.length > palabra2.length || palabra1.length > palabra3.length){
//     document.write('La palabra con mas letras es la primera: ' + palabra1 + '.');
// } else if(palabra2.length > palabra1.length || palabra2.length > palabra3.length){
//     document.write('La palabra con mas letras es la segunda: ' + palabra2 + '.');
// }else if(palabra3.length > palabra1.length || palabra3.length > palabra2.length){
//     document.write('La palabra con mas letras es la tercera: ' + palabra3 + '.');
// } else{
//     document.write('No ingresaste nada');
// }

// 4)	Del siguiente arrays mostrar cuales son los números pares y cuáles impares:
// 	var numeros = [10, 4, 8, 1, 19, 5, 3, 8, 11, 18, 33, 45, 99, 14, 22, 23]; 

// let numeros = [10, 4, 8, 1, 19, 5, 3, 8, 11, 18, 33, 45, 99, 14, 22, 23]; 

// let pares = numeros.filter(numeros => numeros %2 == 0 );
// document.write('Estos numeros son pares: ' + pares + '<br>');

// let impares = numeros.filter(numeros => numeros %2 == 1 );
// document.write('Estos numeros son impares: ' + impares);

           
// 5)	Crear un listado de 7 instrumentos musicales, como mínimo, y mostrarlos uno debajo de otro. 

// let instrumentos = ['Guitarra', 'Bajo', 'Bateria', 'Microfono', 'Teclado', 'Saxo', 'Armonica'];
// for(i = 0; i < instrumentos.length; i++){
//     document.write(instrumentos[i] + '<br>');
// }
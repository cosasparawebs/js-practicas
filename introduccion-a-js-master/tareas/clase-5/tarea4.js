//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

// let numerosLista = document.querySelectorAll('li'); //esto es un nodelist, NO es lo mismo que un aarray
// // console.log(numerosLista) 

// // let numerosArray = Array.prototype.slice.call(numerosLista); // esto lo convierte en array, es la forma vieja de hacerlo
// // console.log(numerosArray)

// let numerosArray = Array.from(numerosLista); // esto tambien convierte en array, es la forma nueva
// // console.log(numerosArray);


let numerosLista = document.querySelectorAll('li');
let numerosArray = Array.from(numerosLista);
let sumaNumeros = 0;
let promedio = document.querySelector('#promedio');
let contador = 0;

function calcularPromedio(numerosArray){
    for(i = 0; i < numerosArray.length; i++){
        sumaNumeros += Number(numerosArray[i].innerText);
    }
    return sumaNumeros / numerosArray.length;
}

promedio.innerText = `El promedio es ${calcularPromedio(numerosArray)}`;


// function menor() {
    
//     const arrayDeNumeros = [];
//     for (let i = 0; i < numerosArray.length; i++) {
//       arrayDeNumeros.push(Number(numerosArray[i].value));
//     }
//     return arrayDeNumeros;
//   }

//   console.log(menor())
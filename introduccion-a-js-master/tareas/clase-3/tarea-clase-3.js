// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// let usuario = prompt('Ingresa tu nombre' || '').toLowerCase(); -----> el string vacio es para que el programa siga funcionando y no de un error en la consola
// let usuarioAmigo = 'Juan';

// if(usuario === 'ramon'){
//     console.log(`Hola! Yo tambien me llamo Ramon`);
// }else if (usuario === 'juan'){
//     console.log(`Hola ${usuario}! Te llamas igual a mi amigo`);
// } else{
//     console.log(`Hola ${usuario}!`)
// }

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

// let edadUsuario = Number(prompt('Ingresa tu edad'));

// if(edadUsuario < 33){
//     console.log('Sos mas chico que yo');
// } else if (edadUsuario > 33){
//     console.log('Sos mas grande que yo');
// } else{
//     console.log('Tenemos la misma edad');
// }

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


// let documento = prompt('Tenes documento?').toLowerCase();

// if(documento === 'si'){
    
//    let edad = Number(prompt('Que edad tenes?'));

//    if(edad >= 18){
//        console.log('Podes entrar al bar');
//    }else{
//        console.log('No podes entar, sos menor');
//    }

// }else if(documento === 'no'){
//     console.log('No podes entrar sin documento');
// }else{
//     console.log('Contesta si o no')
// }
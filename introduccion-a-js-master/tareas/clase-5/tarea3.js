//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


let boton = document.getElementById('boton');
boton.addEventListener('click', function(){

    let horas = document.getElementById('horas');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let resultado = document.getElementById('resultado');

    function mostrarHoras(){
        resultado.innerText = horas.value+ ':' + minutos.value + ':' + segundos.value;
    }

    mostrarHoras()
})
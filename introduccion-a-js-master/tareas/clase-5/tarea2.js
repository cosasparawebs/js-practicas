let inputNombre = document.getElementById('nombre');
let inputEdad = document.getElementById('edad');
let saludo = document.getElementById('saludo');
let datos = document.getElementById('datos');
let boton = document.getElementById('boton');

boton.addEventListener('click', function(){

    saludo.innerText = 'Bienvenido, ' + inputNombre.value;
    datos.innerText = 'Nombre: ' + inputNombre.value + ', Edad: ' + inputEdad.value;
    
})
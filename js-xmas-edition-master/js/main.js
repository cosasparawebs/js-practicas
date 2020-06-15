const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

// console.log(nombre);
// console.log(ciudad);
// console.log(comportamiento);
// console.log(descripcionRegalo);

function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo tiene que tener al menos 1 caracter';
    } 

    if(nombre.length >= 50){
        return 'Este campo debe tenr menos de 50 caracteres';
    }

    if(!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras'
    }

    return '';
}

function validarCiudad(ciudad){
    if(ciudad.length == 0){
        return 'Selecciona una ciudad / provincia';
    }

    return '';
}

function validarRegalo(descripcionRegalo){
    if(descripcionRegalo.length >=100){
        return 'La descripcion es demasiado larga'
    }

    if(descripcionRegalo.length == 0){
        return 'Descibi tu regalo';
    }

    if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return 'El campo descripcion solo puede tener numeros y letras'
    }

    return '';
}
// "use strict"
console.log('this', this); //por default es "window",  globalmente

//dentro de funciones
function x(){
  console.log("this dentro de x ", this)
};
x(); //this = window. descomentar la línea 1 y probar otra vez, el resultado es undefined.

//this en objetos
const persona = {
  nombre: "Fabricio",
  decirHola(){
    console.log("Hola ", this.nombre); //Hola Fabricio
  }
}

persona.decirHola(); //persona = this
const persona2 =  Object.assign({}, persona);
persona2.nombre = "Pepe";
persona2.decirHola(); //Hola Pepe. persona2 = this

const saludar = function(){
  console.log('this adentro de saludar', this);
  // console.log("Saludos ", this.nombre); //notar que "this.nombre" no es nada al momento de definir la función
}

saludar(); //Saludos undefined

persona.saludar = saludar;
persona.saludar(); //Saludos Fabricio
persona2.saludar = saludar;
persona2.saludar(); //Saludos Pepe


//La función flecha NO ES CONTEXTUAL
//notar que "this" en este caso es "window"
// window.nombre = "pepe";
const saludarFlecha = () => console.log("Saludos (flecha) ", this.nombre);
saludarFlecha(); //Saludos undefined
persona.saludar = saludarFlecha;
persona2.saludar = saludarFlecha;
persona.saludar(); //Saludos undefined
persona2.saludar(); //Saludos undefined


// Ejemplo con bind para cambiar el contexto de this
saludar.bind(persona)(); //Saludos Fabricio
saludar.bind(persona2)(); //Saludos Pepe
// .call y .apply son similares, buscarlas en MDN

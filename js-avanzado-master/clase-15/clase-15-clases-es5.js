class PersonaES6{
  static enCuarentena = true; //propiedad estática, común a todas las clases
  tieneDni = true //propiedad pública
  //#id = 5 //propiedad privada, aún no soportada. Se puede lograr con Babel.

  constructor(nombre){ //función constructora (se  tiene que llamar constructor),  toma parámetros iniciales opcionalmente.
    this.nombre = nombre; //Nueva propiedad creada al instanciar un nuevo objeto
  }
  
  presentar(){ //método público
    return "Hola, mi nombre es " + this.nombre;
  }
}

// Clase persona en ES5
function Persona(nombre){
  const id = 5; //variable privada

  this.nombre = nombre; //propiedad pública
  this.tieneDni = true; //propiedad pública

  this.presentar = function(){ //método público
    return "Hola, mi nombre es " + this.nombre
  }
}
Persona.enCuarentena = true; //Propiedad estática

//Mismo código que en ES6
const fabricio = new Persona("Fabricio"); //Instancio una nueva clase  "Persona" y le paso un nombre como primer parámetro.
// la variable fabricio es ahora de tipo Persona.
console.log(fabricio.nombre); // Fabricio
console.log(Persona.enCuarentena); // Método estático accedido directamente desde la clase
console.log(fabricio.presentar()); // Hola, mi nombre es Fabricio
//se pueden agregar propiedades
fabricio.clubFavorito = 'Independiente';
console.log(fabricio.clubFavorito);

function Bombero(nombre){
  //constructor apunta a la función Persona, que es el prototipo de Bombero
  this.constructor(nombre); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
  console.log(this.constructor.toString());
}
Bombero.profesion = "Bombero"; //declara una propiedad estática
Bombero.prototype = new Persona();

const pepe = new Bombero("Pepe"); //hereda el constructor de Persona
console.log(pepe.presentar()); // Hola, mi nombre es Pepe
console.log(pepe.tieneDni) //true

// Ejemplo de herencia prototípica bien hecho con Babel
// https://babeljs.io/en/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEAaDeAoa0B2YC2BTaBeaARAGJgBGBy0wA9qhAC4BOArsPdYwBRgAOWIIAJYATagEokKFPQAWgiADpe_IaLzRlAkdQDclAL6JDiUJBgBNaFgAe9LKmEwERoA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.9.0&externalPlugins=

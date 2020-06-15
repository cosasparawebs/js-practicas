//clases en ES6
class Persona{
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

const fabricio = new Persona("Fabricio"); //Instancio una nueva clase  "Persona" y le paso un nombre como primer parámetro.
// la variable fabricio es ahora de tipo Persona.
console.log(fabricio.nombre); // Fabricio
console.log(Persona.enCuarentena); // Método estático accedido directamente desde la clase
console.log(fabricio.presentar()); // Hola, mi nombre es Fabricio
//se pueden agregar propiedades
fabricio.clubFavorito = 'Independiente';
console.log(fabricio.clubFavorito);

//==========
// Herencia
//==========
class Bombero extends Persona{
  static nombreProfesion = "Bombero"
}

const pepe = new Bombero("Pepe"); //hereda el constructor de Persona
console.log(pepe.presentar()); // Hola, mi nombre es Pepe

class Programador extends Persona{
  static nombreProfesion = "Programador"
  
  constructor(nombre, nivel){ //pisa el constructor de Persona
    super(nombre); //llama al constructor de Persona
    this.nivel = nivel;
  }

  presentar(){ //pisa la función presentar de Persona
    return `${super.presentar()} y soy un ${Programador.nombreProfesion} ${this.nivel}`; //llama a la función presentar padre
  }
}

const juan = new Programador("Juan", "Senior");
console.log(juan.presentar());
console.log(juan.clubFavorito);


const jose = new Programador("Jose", "Junior"); //ahora hay 2 programadores.

// Concepto de prototype y __proto__ 
// JavaScript es muy flexible y podemos modificar las propiedades de las clases incluso una vez que hayan objetos instanciados 

Persona.prototype.nacionalidad = 'Argentina';

console.log(fabricio.nacionalidad, juan.nacionalidad, jose.nacionalidad);
console.log(fabricio, jose, juan);

// filtrando las propiedades que sólo pertenecen directamente al objeto fabricio
for(const key in fabricio){
  if(fabricio.hasOwnProperty(key)){
    console.log(key); //no imprime `nacionalidad`
  }
}

// si queremos modificar el prototipo de un objeto pero no sabemos de qué clase es, podemos hacer:
jose.__proto__.lenguajes = ["js", "php", "python"] //esto es equivalente a Programador.prototype
console.log(jose.lenguajes, juan.lenguajes);
console.log(fabricio.lenguajes, pepe.lenguajes); //undefined undefined.
jose.__proto__.__proto__.nombre = "X"; //en este caso todos ya tenían nombre, por lo que no se pisa.
console.log(juan.nombre); //sigue siendo "Juan"
jose.__proto__.__proto__.apellido = "Pérez"; //en este caso nadie tenía apellido, por lo que se crea con este valor.
console.log(juan.apellido, pepe.apellido); //Pérez Pérez



// Method override (pisar métodos)
class A {
  a(){
    return this.b();
  }

  b(){
    return 'A';
  }

  c(){
    return 'A';
  }
}

class B extends A{
  b(){
    return 'B';
  }
}

const a = new A();
const b = new B();


console.table([
  ['Método', 'Objeto A', 'Objeto B'],  
  ['método a', a.a(), b.a()], //incluso si b no reemplaza el método "a", al llamar a "this.b()" está llamando al método `b` de B.
  ['método b', a.b(), b.b()],
  ['método c', a.c(), b.c()],
]);

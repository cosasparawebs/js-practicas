// https://docs.google.com/document/d/11U1TNn-YpebK8JY6mvXSZhIa4TDW-tIhsNGZe7-QTSY/edit

// Repaso de objetos

console.log('Repaso de objetos');
let objeto = {};
console.log(objeto);
objeto = new Object();
console.log(objeto);

// for...in
console.log('for...in');
for(let key in {a: 1, b:2}){
  console.log(key);
}

// funciona también con keys con valor undefined
for(let key in {a: 1, b:2, c: undefined}){
  console.log(key); //a,b,c
}


// funciona con índices de arrays y strings

console.log("arrays...");
for(let key in [1,2]){
  console.log(key); //0,1
}

console.log("strings...");
for(let key in "hola"){
  console.log(key); //0,1,2,3
}

// Así que en este caso queremos usar for...of
console.log('for...of');

console.log("arrays...");
for(let val of [1,2]){
  console.log(val); //1,2
}

console.log("strings...");
for(let val of "hola"){
  console.log(val); //h,o,l,a
}

//for...of no funciona con objetos (descomentar las 3 líneas de abajo para ver el error "not iterable")
// for(let val of {a: 1, b: 2}){
//   console.log(val);
// }


/// variables por valor y por referencia
// referencia = guardados en memoria (RAM)


console.log('por valor...');
let val1 = 1
let val2 = val1;
console.table([['val1', 'val2'], [val1, val2]]);

val1 = "hola";

console.table([['val1', 'val2'], [val1, val2]]);

console.log('por referencia...');
let ref1 = {a: 1};
let ref2 = {b: 2};

console.table([['ref1', 'ref2'], [ref1, ref2]]);
ref2 = ref1
console.table([['ref1', 'ref2'], [ref1, ref2]]);
ref1.a = "hola"
console.table([['ref1', 'ref2'], [ref1, ref2]]); //ambos objetos ahora tiene a = hola, porque en realidad son EL MISMO OBJETO

console.log('ref1 === ref2', ref1 === ref2); //true, son EL MISMO OBJETO
console.log('{} === {}', {} === {}); // false, los objetos tienen la misma estructura, pero son DISTINTOS OBJETOS

//Es importante tener en cuenta estos conceptos cuando se pasan como parámetros, porque van a estar modificando el mismo objeto.

console.log('por referencia...');
function agregarPropiedad(obj){
  obj.propiedadNueva = "nueva propiedad";
}

agregarPropiedad(ref1);
console.log('ref1 ', ref1);


// ejemplo con variables por valor
console.log('por valor...');
function sumar(valor){
  valor + 1;
}

let val3 = 1;
sumar(val3);
console.log('val3', val3); //val3 sigue siendo 1


// Si surge la necesidad de clonar objetos...
console.log("clonar objetos")
const obj1 = {a: 1, b: 2};
// const obj2 = obj1 // esto no es un clon, obj2 ahora es EL MISMO OBJETO QUE obj1
const obj2 = Object.assign({}, obj1);
console.log('obj1 == obj2', obj1, obj2, obj1 == obj2); //false, no son el mismo objeto

// objetos "nesteados"

const obj3 = {a: 1, b: {c: 2}};
const obj4 = Object.assign({}, obj3);
obj3.b.c = 3;
console.log('obj4.b.c', obj4.b.c); // 3, porque obj3.b es igual a obj4.b

// Object.assign hace un SHALLOW clone, nosotros necesitamos un DEEP CLONE.
// https://lodash.com/docs/4.17.15#cloneDeep mejor solución
// solución alternativa que funciona sin librerías extra (sólo usar para objetos que contienen datos):
const obj5 = JSON.parse(JSON.stringify(obj3));
obj3.b.c = "hola";
console.table([["obj3.b.c", "obj5.b.c"], [obj3.b.c, obj5.b.c], [obj3, obj5]]);

// Ejemplo de recolección de basura forzado
try{
  // recolección de basura
  {
    let x = 1;
  }

  console.log(x); //error, x is not defined. dentro del scope anterior ya no existe
} catch(e){
  console.log(e);
}



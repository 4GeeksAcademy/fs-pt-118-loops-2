import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};



const arr = [1, 2, 3, 4, 56, 7, 8, 9, 5, 4, 332, 687, 2331, 9687, 3201]

//slice --> va a devolver un pedazo del array como un nuevo array
console.table(arr)
console.log(arr.length)

const slicedArr = arr.slice(4, 10) //pido indices, no valores
console.table(slicedArr)
const fromToFinish = arr.slice(4, arr.length)

console.log(arr[arr.length - 1])

const fliped = arr.reverse()

console.log(fliped)

//splice --> modifica el array original 
const thisCopyArr = arr // ambos hacen referencia al mismo array
const copyArr = [...arr] //para hacer copias de objetos (y arrays) se usa el spread operator 

arr.push('pepe')
console.log('thisCopyArr ---> ', thisCopyArr)
copyArr.push('lola')
console.log('copyArr-> ', copyArr)

/*
splice(1,3) --> desde la posicion (indice) uno,  elimina 3 posiciones 
splice(8,0,'nuevo valor') ---> desde la posicion 1 (indice) , no elimines ningun elemento, añade 'nuevo valor'
splice(4,2,'valor', 'valores') ---. desde la posicion 4 (indice) , elimina 2 valores y agrega tantos nuevos elementos como se le pasen al metodo
*/
//copyArr.splice(0, 3)
//copyArr.splice(2, 5, 'maria')
//copyArr.splice(1,0, 'maria', 'santo', 'humberto')
console.log(copyArr)




//loops anidados

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matriz)
console.table(matriz)
// console.log(matriz[0][0])
// console.log(matriz[1][1])
// console.log(matriz[2][2])

for (let i = 0; i < matriz.length; i++) {
  //iteramos por el padre
  console.log('valor de i -> ', i)
  console.log('valor de matriz[i]', matriz[i])
  // matriz[i] accede al hijo
  for (let j = 0; j < matriz[i].length; j++) {
    //iteramos con j por los hijos
    console.log('valor de i -> ', i)
    console.log('valor de j -> ', j)
    console.log('valor de matriz[i]', matriz[i])
    console.log('valor de matriz[i][j]', matriz[i][j])
  }
}


for (let pVal of matriz) {
  console.log(pVal) // hace loop por el padre, pval es el valor
  for (let hVal of pVal) {
    console.log(hVal) //hace loop por el hijo, hval es el valor
  }
}

for (let i in matriz) {
  //iteramos por el padre. i es el indice
  for (let j in matriz[i]){
    // iteramos por los hijos, j es el indice
    console.log(matriz[i][j])
  }
}



// map, forEach

matriz.forEach(arr=> arr.forEach(el=>console.log('forEach el ---> ',el)))

matriz.map(arr=> arr.map(el=>console.log('map el ---> ',el)))



const forEachResult = matriz.forEach(arr=> arr.forEach(el=>{
  return `for${el}`
}))
console.log(forEachResult)
const mappedResult = matriz.map(arr=> arr.map(el=>{
  return `map${el}`
}))
console.log(mappedResult) 


const nums = [1,2,3,4,5,6]

//quiero que se muestre por consola los numeros multiplicados por 2

nums.forEach(el=> console.log(el*2))

//quiero un nuevo array con los numeros multiplicados por 2

const multiPorDosArr = nums.map(el=> el*2)
console.log(multiPorDosArr)


const testForEach = (arra) => {
  const aux = []
  arra.forEach(el=> aux.push(el*3))
  return aux 
}

const testMap = (arra) => {
  return arra.map(el=>el*3)
}


const multiplier = (num) => {
  console.log('multi',num*2)
}


console.log(testForEach([1,2,3]))
console.log(testMap([1,2,3]))

arr.forEach(multiplier)



//ejemplo: tengo una serie de datos que quiero enviar a la bd 

const envioDB = (arr) => {
  //codigo para enviar a bd
 arr.forEach(el=> 'enviar a db')
 return 'all sent to db'
}

//propuesta de solucion
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const dataset = [who, action, what, when]
const randomGenerator = arr => Math.floor(Math.random()*arr.length) //devuelve numero aleatorio de un array
const getValueOfArr = arr => arr[randomGenerator(arr)] // fguncion que extrae del array utilizando la funcion del numero aleatorio
const excuse = dataset.map(arr=> getValueOfArr(arr)).join(' ') // aplicamos a cada arra la funcion para extraer valor

// como el map devuelve un array, le pones el join(' ') ojo, tiene un espacio entre comillas, para que me convierta el array en string
// const excuse = result.join(' ')
console.log(excuse)

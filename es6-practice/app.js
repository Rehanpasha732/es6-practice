// <!-- var se bana hwa variable or function keyword se  bana hwa function hoisting keh lata hai  -->

// var  xyz
// console.log(xyz)
// var  xyz = 'rehan'

// ans 
//  undefined
// q k hoisting var ko upper lekr chali jaigi

//  function foo(){
//     console.log(abc)
//     var abc = "hello"
//  }

//  foo()


//  TOPIC 2 TEMPLATE STING
//  let first  = "rehan"
//  let last  = "pasha"

//  console.log(` MY name is ${first} ${last}`)

//  object destructuring 

//  let student ={
//     name:'rehan',
//     email : 'rehan @gmail.com'
//  }

//  const { name , email} = student

//  console.log(name)
//  console.log(email)

//  array destructuring 

//  let arr = [ 'rehan' , 'pasha']
// const[a , b] = arr
// console.log(b)

// //  rest operator
// function foo(a,...b){
//     console.log(a,b)
// }

// foo("muhammad", "rehan" , "pasha")


// sprade 

// for Array

//  let arr1 =["muhammad"]
//  let arr2 =["Rehan  pasha"]
//  let marg = [...arr1,...arr2]
//  console.log(marg)

//   for object
//   let obj1 = {
//     name:"rehan"
//   }

//   let obj2 = {
//     email:"rehan@gmail.com"
//   }

//   let margObj = {...obj1,...obj2}
//   console.log(margObj)

//   shallow copy

//   let objName = {name:'rehan'}
//   let obj2 = {...objName}
//   objName.name = 'pasha'

//   console.log(objName)
//   console.log(obj2)


//  call back function
// For Each

//   let arr =['Muhammad','rehan','pasha']
//   arr.forEach(function(v,i){
//     console.log(v,i)
//   })



//   Map
// let arr2=['Muhammad','rehan','pasha']
// const mapValue = arr2.map(function(v,i){
// return v,i
// })
// console.log(mapValue)

// filter
// let arr=['Muhammad','rehan','pasha']
// const filteerValue = arr.filter(function(v,i){
//     if(v === "rehan")
//     return v;
// })

// console.log(filteerValue)


// let arr=['Muhammad','rehan','pasha']
// const sortValue = arr.sort(function(v,i){
//     return v , i
// })


// call back function

//  arrow function always craete in a var , let , const

//  const foo  = () => {
//     return new Date().toDateString()
//  }

//  console.log(foo())
// //  single line 
// const sum = (a, b) => {
//     console.log(sum(3, 4))

// }
//   remove duplicate value im array

// let arr = ['rehan','pasha','rehan']
// console.log(new Set(arr))


// ternarry operator

// let str = 'hello'
//  str === 'hello' 
//  ?
//  console.log("yes")
//  :
//  console.log("no")

// Arrow function
// let myFunction = (a, b) => a * b;

//  console.log(myFunction(2,3))b




fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      
    })
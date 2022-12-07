// function getString(array) {
//  let result = "";
//  for(let i = 0; i < array.length; i++){
//    if (typeof array[i] == 'string') {
//      result = result + array[i] + " ";
//    }
//  }console.log(result);
// }
// getString([1,true,"get",false,"started",2,3,4,5,6,7,8,9,10,true,false]);



// function getNumberArray(array) {
//
//   let result = [];
//
//   for(let i = 0; i < array.length; i++){
//
//     if(typeof array[i] != 'number'){
//
//       result[result.length] = array[i]
//     }
//   }
//   console.log(result)
// }
// getNumberArray([1,2,true,'truerfd'])


// let quad = function(num) {
//   return num ** 2
// }
// console.log(quad(5))


// let quad = (num) => num ** 2
//
// console.log(quad(4))

// function getRandom(num) {
//   return Math.trunc(Math.random(num)*99)

// let result = 0;
// for(let i = result; i<=num;i++){
//   array[i] = getRandom()
// }
// console.log(array)
// }


// let checkNumber = (arr,func2) => {
//   if(typeof arr != 'string'){
//     func('Введеное значение не является строкой')
//     return
//   }
//   if(isNaN(+arr)){
//     func('значение не преобразовывается в число')
//   }else {
//     func2(+arr)
//   }
// }

// checkNumber('5', (elem) => console.log( elem ** 2))

// function changeElem(array, elem) {
//   let result = []
// for(let i = 0; i < array.length; i++){
// if(typeof array[i] == 'number'){
//   result[i] = array[i]
//   }else{
//     continue;
//   }
// }
// console.log(result)
// }

// let array = [1,2,3,4]
// changeElem(array, (elem) => elem ** 2)
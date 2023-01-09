//Task1
// function checkElem(num){
//     if(num % 7 == 0){
//         console.log('true')
//     }else{
//         console.log('false')
//     }
// }
// checkElem(7)
//Task2
// let array = [1,2,3,4]
// function changeElem(array, n){
//     let newarray = [];
//     for(let i = 0; i < array.length; i++){
//         newarray[i] = array[i] * n
//     }
//     console.log(newarray)
//     return newarray
// }
// let result = changeElem(array,3)
//Task3
// function sumElems(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         if(isNaN(array[i])){
//             continue
//         }else{
//             sum += parseInt(array[i])
//         }
//     }
//     return sum
// }
// let array = ['10','Строка','5g','15','05']
// let result = sumElems(array)
// console.log(result)
//Task4
function reverseIndex(array){
    let newarray = []
    for(let i = 0; i < array.length; i++){
        newarray[i] = array[array.length - i -1]
    }
    console.log(newarray)
}
let array2 = [1,2,3,4,5]
reverseIndex(array2)
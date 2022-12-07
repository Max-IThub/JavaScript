// function log(...rest){
//     for(let i of rest){
//         console.log(i)
//     }
// }
// console.log(1,2,3,4)

// Задача 2
// Напишите функцию checkElem(), которая может принимать любое количество
// аргументов и реализует следующее вычисление: 
// Если значение первого аргумента совподает с значениями прочих аргументов - 
// функция должна вернуть true, иначе false
// Пример: 
// checkElem(5,1,2,3,4,5)
// checkElem(6,1,2,3,4,5)
// Результат:
// true
// false

// function CheckElem(a, ...rest){
//     for(let elem of rest){
//         if(elem == a){
//             return true
//         }
//     }
//     return false
// }
// console.log(CheckElem(1,2,1,3,4,5,6,))
// console.log(CheckElem(1,2,3,4,5,6,7,8))
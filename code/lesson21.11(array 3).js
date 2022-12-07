// b = [...a]                       - spread    
// log(...a)                        - spread
// function log(...a){              - rest
//  ...
// }     
// let [a,b,...a] = [1,2,3,4,5,6]    - rest 

// ---------------------------------------
// Rest-опреатор (аргументы)

// function log(...rest){
//     for (let i of rest){
//         console.log(i)
//     }
// }


// log(1,2,3,4)

// ------------------------
// Цикл по массиву

// for (let elem IN object)         - цикл по ключам объекта
// for (let elem OF array)          - цикл по значениям элемента массива
// for (let elem IN array)          - цикд по индексам элементов массива

// let a = [1,2,3,4,5]

// for (let elem in a){
//     console.log(elem, a[elem])
// }

//------------------------
// Задача 1
// Напишите функцию getSum(), которая может принимать любое количество
// аргументов и выводит в консоль итогувую сумму все аргументов.

// Пример: getSum(1,2,3,4)

// Результат: 10

// function getSum(...rest){
//     let sum = 0
//     for (let elem of rest){
//         sum += elem
//     }
//     console.log(sum)
// }

// getSum(1,2,3,4,5,6,7)
// getSum(1,2,3,4)


// ------------------
// Еще про rest...

// function func(...rest){
//     arg1 = rest[0]
//     rest = rest.slice(1)
//     console.log(arg1, rest)
// }

// func(1,2,3,4)
// 1 [ 2, 3, 4 ]

// function func(a, ...rest){
//     console.log(a,rest)
// }
// func(1,2,3,4)

// ---------------------------
// Дефолтное значение

// Задача: напишите функцию handler(n,m), которая возвадит число n в степень m. 
// Если второй аргумент не указан - функция должна возводит число n в квадрат

// function handler(n,m = 2){
//     console.log(n ** m)
// }

// handler(2,3)
// handler(2,4)
// handler(2,5)
// console.log('_-'.repeat(10))
// handler(2)
// handler(3)
// handler(4)

// function func(a, b = 'world!'){
//     console.log(a+b)
// }

// func('Hello ')
// func('Hello ', 'friend')


// ------------------------------
// Задача 2
// Напишите функцию checkElem(), которая может принимать любое количество
// аргументов и реализует следующее вычисление: 
// Если значение первого аргумента совподает с значениями прочих аргументов - 
// функция должна вернуть true, иначе false

// Пример: 
// checkElem(5, 1,2,3,4,5)
// checkElem(6, 1,2,3,4,5)

// Результат:
// true
// false

// function checkElem(a, ...rest){
//     for (let elem of rest){
//         if (elem == a){
//             return true
//         }
//     }
//     return false
// }

// console.log(checkElem(1,2,3,4,5))
// console.log(checkElem(3,2,3,4,5))
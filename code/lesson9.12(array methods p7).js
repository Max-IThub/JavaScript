// ---------------------------------------------
// метод map() - метод возвращает новый массив, значения элементов которых 
// меняются по правилу колбек-функции

// let a = [3,4,5]
// let newArray = a.map((elem) => elem + '100')
// console.log((newArray))

// -----------------
// Задача 1
// Повторить метод map(array,callback)
// let a = [4,5,6]

// function map2(array, callback){
//     let newarray = []
//     for (let elem of array){
//         newarray.push(callback(elem))
//     }
//     return newarray
// }

// console.log(map2(a,elem => elem ** 10))

// --------------------------
// метод forEach() - задача метода - просто сформировать цикл for одной строкой
// Метод ничего не возвращает

// let a = [1,2,3,4]

// a.forEach(elem => console.log(elem))

// -------------------------
// метод reduce() - метод ля формирования агрегационных вычислений (слева-направо)

// let array = [1,2,3,4,5]

// Решение без reduce
// let sum = 0
// for (let elem of array){
//     sum = sum + elem
// }
// console.log(sum)

// Решение с reduce
// let sum_reduce = array.reduce((sum, elem) => sum + elem, 0)
// console.log(sum_reduce)


// --------------------------------
// Задача 1

// Используя метод reduce решите ряд Задач
// а) Посчитайте итоговую стоимость всех товаров
// б) Посчитайте произведиение всех quantity 
// в) Сконкатенируйте первые буквы всех товаров в единую строку

// let goods = [
//     {id: 4, name: 'Скейтборд', price: 3500, quantity: 30},
//     {id: 4, name: 'Самокат', price: 1300, quantity: 15},
//     {id: 3, name: 'Велотренажер', price: 999, quantity: 20},
//     {id: 3, name: 'Велосипед', price: 5400, quantity: 5},
// ]

// console.log(goods.reduce((sum, elem) => sum + elem.price, 0))
// console.log(goods.reduce((sum, elem) => sum * elem.quantity, 1))
// console.log(goods.reduce((sum, elem) => sum + elem.name[0], ''))

// let numbers = [
//     [1,2,3],
//     [3,4,5],
//     [6,7,8],
//     [9,6,7]
// ]

// let result = numbers.reduce((sum, elem) => sum + elem.reduce((sum, elem) => sum + elem),0)
// console.log(result)

// -----------------------------------------------------
// метод reduceRight() - метод ля формирования агрегационных вычислений (справо-налево)

let array = [1,2,3,4,5]

// Какое количество элементов в массиве необходимо подряд сложить, чтобы итоговая сумма не превышала значение 7

console.log(array.reduce((sum, elem) => sum + elem))
console.log(array.reduceRight((sum, elem) => sum + elem))



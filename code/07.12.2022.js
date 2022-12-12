//some() - метод массива который отвечает на вопрос, есть ли хотя бы 1 элемент
//который удовлетворяет условие CallBack. Возвращает булевый тип. 

// let a = [4,5,6,7,8]

// console.log(a.some(elem => elem>6))

// //every() - метод, который отвечает на вопрос, все ли элементы выполняют условие CallBack. Возвращает булевый тип.

// console.log(a.every(elem => elem>6))

// let password = "j/00ghLx="

// let checkPassword = password.split(' ').some(elem => elem == '/' || elem == 'i')

// console.log(checkPassword)

// ---------------
// Задача: рассчитать 85% от заданных значений элементов массива
// let prices = [100,400,250,1000,499]

// console.log(prices.map(elem => elem * 0,85 ))

// Задача 2
// Используя метод map, сформируйте новый массив, который содержит
// все сво-ва объектов (id, name, quantity) с небольшими изменениями:
// 1) id необходимо возвести в квадрат
// 2) заменить занчения сво-ва name на ее длину (число)
// 3) значение сво-ва quantity заменить на произведение значение id и quantity
// let goods = [
//     {id: 4, name: 'Скейтборд', quantity: 30},
//     {id: 4, name: 'Самокат', quantity: 15},
//     {id: 3, name: 'Велотренажер', quantity: 20},
//     {id: 3, name: 'Велосипед', quantity: 5},
// ]

// let result = goods.map(elem => ({id: elem.id ** 2, name: elem.name.length, quantity: elem.quantity*elem.id}))

// console.log(result)

let goods = [
    {id: 4, name: 'Скейтборд', quantity: 30},
    {id: 4, name: 'Самокат', quantity: 15},
    {id: 3, name: 'Велотренажер', quantity: 20},
    {id: 3, name: 'Велосипед', quantity: 5},
]

let result = goods.map(elem => ({id: elem.id ** 2, name: elem.name.length, quantity: elem.quantity*elem.id}))

console.log(result)
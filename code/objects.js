// let obj = new Object({name: 'Maxim', age: 17});
// let obj1 = {
//     name: 'Maxim',
//     age:17,
//     isJob: false,
// }

// console.log(obj1.name, obj.age, obj1.isJob)

// let user1 = {
//     id: 1,
//     username: 'user'
// }

// console.log(JSON.parse(JSON.stringify(user1)))
// console.log((JSON.stringify(user1)))

// let array = [1,2,3]
// let object = {
//     id: 1,
//     user: 'Maxim',
//     salary: 1000
// }
// object.salary = 999

// for(let i in object){
//     console.log(i)
// }

// for(let i in object){
//     console.log(object[i])
// }

// for(let i in object){
//     console.log(`${i} - это ключ, а ${object[i]} - это значение`)
// }
// console.log()

// Задача 1 
// Используя цикл, выведите все значения объекта с числовым набором данных.
// Решение:
// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1,
// }
// for(let i in obj){
//     if(typeof obj[i] == 'number'){
//         console.log(`${i} - это ключ, а ${obj[i]} - это number`)
//     }
//     if(typeof obj[i] == 'string'){
//         console.log(`${i} - это ключ, а ${obj[i]} - это string`)
//     }
//     if(typeof obj[i] == 'boolean'){
//         console.log(`${i} - это ключ, а ${obj[i]} - это boolean`)
//     }
//     }


// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1
// }

// for ( let key in obj){
//     if(key.slice(-1) % 2 == 0){
//         console.log(obj[key])
//     }
// }

// Используя цикл, определите первый элемент, где встречается булевое заначение и удалите его. 
// Пример:
// let obj = {
//     name: 'Alex',
//     age: 25,
//     isJob: true,
//     some: 'text',
//     test: false
// }
// // Результат:
// // {
// //     name: 'Alex',
// //     age: 25,
// //     some: 'text'
// // }

// for(let i in obj){
//         if(typeof obj[i] == 'boolean'){
//             delete obj[i]
//         }
//         if(typeof obj[i] == 'number'){
//                     console.log(`${i} - это ключ, а ${obj[i]} - это number`)
//                 }
//          if(typeof obj[i] == 'string'){
//                    console.log(`${i} - это ключ, а ${obj[i]} - это string`)
//                 }
//     }

let obj = {
    name: 'Max',
    age:18,
    id:50
}
console.log(Object.entries(obj))
console.log(Object.values(obj))
console.log(Object.keys(obj))

// let user1 = {
//     name: 'Maxim'
// }
// let user2 = {
//     lastname: 'Nikolaev',
//     age: 17
// }
// let user = Object.assign(user1,user2)

// console.log(user)
// console.log(user1)
// console.log(user2)
//результат записывается не в user, а  в user1, мы не создаем новый объект user, мы перезаписываем user1.


//копирование объектов
// let user ={
//     name: 'Maxim',
//     age: 17,
//     salary: 250000
// }
// //не глубокое копирование
// let user_copy = Object.assign({}, user)
// user_copy.gender = 'М'
// //глубокое копирование
// let user_copy2 = JSON.parse(JSON.stringify(user))


// console.log(user)
// console.log(user_copy)
// console.log(user_copy2)

// Задача 2. 
// Сделать аналог метода Object.entries(), сформировав функцию getEntries(obj)
// Примечание: методами Object пользоваться нельзя
// Результат:
// [ [ 'name', 'Alex' ], [ 'salary', 1000 ], [ 'isJob', true ] ]

// function getEntries(){

// }


// Решение ДЗ

// let url = 'https://jsonplaceholder.typicode.com/albums';

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         let result = data.filter(elem => elem.userId == 9) 
//         console.log(result)
//     }) 

// ----------------------
// Конструкция async await

// Пример функции 
// function getData(url){
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// 1) async await применяется строго к функциям
// 2) await применяется только перед промисом
// 3) await позволяет сохранить аргумент resolve() у промиса в новую переменную
// 4) Весь код внутри функции выполняется последвательно

// async function getData(url){
//     let res = await fetch(url)  // resolve(res)
//     let data = await res.json() // resolve(data)
//     console.log(data)
// }

// getData('https://jsonplaceholder.typicode.com/albums')

// задача: 
// Необходимо по username пользователя определить список его задач


// function getTodosByUser(nick){
//     let todosUrl = 'https://jsonplaceholder.typicode.com/todos'
//     let usersUrl = 'https://jsonplaceholder.typicode.com/users'
//     fetch(usersUrl)
//         .then(res => res.json())
//         .then(usersData => {
//             let userData = usersData.find(elem => elem.username == nick)
//             fetch(todosUrl)
//                 .then(res => res.json())
//                 .then(todosData => {
//                     console.log(todosData.filter(elem => elem.userId == userData.id))
//             })
//         })
// }

// getTodosByUser('Antonette')
// getTodosByUser('Samantha')

// async function getTodosByUser(nick){
//     let todosUrl = 'https://jsonplaceholder.typicode.com/todos'
//     let usersUrl = 'https://jsonplaceholder.typicode.com/users'
//     let usersRes = await fetch(usersUrl)
//     let todosRes = await fetch(todosUrl)
//     let usersData = await usersRes.json()
//     let todosData = await todosRes.json()
//     let userTodos = todosData.filter(elem => elem.userId == usersData.find(elem => elem.username == nick).id)
//     console.log(userTodos)
// }

// getTodosByUser('Antonette')
// getTodosByUser('Samantha')


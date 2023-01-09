// Введние в промисы
 
// Пример 1
// function func1(){
//     setTimeout(()=> {
//         console.log('func1')
//         func2()
//     }, Math.random() * 200)
// }

// function func2(){
//     setTimeout(()=> {
//         console.log('func2')
//     }, Math.random() * 200)
// }

// func1()

// ---------------------------
// Пример2

// setTimeout(()=> {
//     console.log('func1')
//     setTimeout(()=> {
//         console.log('func2')
//         setTimeout(()=> {
//             console.log('func3')
//         }, Math.random() * 200)
//     }, Math.random() * 200)
// }, Math.random() * 200)


// --------------------------------
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise load...')
//         let data = [1,2,3]
//         resolve(data)
//         // reject('ОШИБКА!')
//     }, Math.random() * 200)
// })

// Метод then() дожидается пока промис получит resolve() и только потом начнет выполнение тело колбека
// promise.then(() => console.log('resolve!'))

// Метод catch() дожидается пока промис получит reject() и только потом начнет выполнение тело колбека
// promise
//     .then((data) => {
//         data.push(4)
//         console.log('resolve!', data)
//     })
//     .catch((e)=> console.log('catch!', e))


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise load...')
//         let data = [1,2,3]
//         resolve(data)
//         // reject('ОШИБКА!')
//     }, Math.random() * 200)
// })

// Метод finaly() исполняет свое тело для любого состояния promise
// promise
//     .then((data) => {
//         data.push(4)
//         console.log('resolve!', data)
//     })
//     .catch((e)=> console.log('catch!', e))
//     .finally(() => console.log('finally!'))




// ---------------------------
// fetch() - метод, позволяющие отправить HTTP - запрос

// let url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         let post = data.slice(0,3)
//         console.log(post)
//     })



// ------------------------------------------
// GET и POST запросы

// Пример get запроса
// Если fetch() указывает 1 аргумент, то он автоматический формирует get - запрос
// let url = 'http://158.160.53.101:8000/api/posts/'

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })


// ----------------------------
// POST запрос
// POST запрос позволяет передавать данные серверу, который в дальнейшем сохраняться в СУБД. Далее их можно будет 
// посмотреть используя GET - запрос

// let url = 'http://158.160.53.101:8000/api/posts/'

// let data = {
//     title: 'Последнее занятие',
//     text: 'Сегодн последнее занятие',
//     topic: 3
// }

// let request = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(data)
// }

// fetch(url, request)
//     .then(res => res.json())
//     .then(data => console.log(data))


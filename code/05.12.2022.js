// Задание 1
// Найдите пользователся, id которого представляется в виде четного числа, а возраст менее 33
// let users = [
//     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
//     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33},
//     {id: 3, name: 'Steven', lastname: 'Fersters', age: 35},
//     {id: 4, name: 'Neena', lastname: 'Maxwell', age: 31},
// ]

// let users = [
//     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
//     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33},
//     {id: 3, name: 'Steven', lastname: 'Fersters', age: 35},
//     {id: 4, name: 'Neena', lastname: 'Maxwell', age: 31},
// ]


// let FilterUsers = users.filter(elem => elem.age < 33 && elem.age%2==0)

// console.log(FilterUsers)


// Задача 2.2
// Определите наличие двух пробелов в поиске индекса элемента массива. 
// Пример значений переменных:
// users = [
//     {login: "user1", role: "Admin test test"},
//     {login: "user2", role: "State user"},
//     {login: "user3", role: "Moderator"}
// ]
// // Пример результата:
// // 0

// console.log(users.findIndex(elem => elem.role.split(' ').length == 3))

//метод sort() - метод, сортирующий указанный массив.

let array = ["Киви", "Арбуз", "Яблоко", "Мандарин", "Банан"]
array.sort()
array.sort().reverse()
console.log(array)
// метод filter()

// let data = [
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000},
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 4, goods: 'Ракетки', count: 30, price: 1000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
// ]

// console.log(data.filter(elem => elem.count > 14))

// Задача:
// Отфильтруйте массив по следующим правилам:
// 1) id должен быть нечетным, а прайс должен хранить длину числа больше 3
// 2) Товары, итоговая стоимость которых (с учетом количества) превышает значение 10000


// console.log(data.filter(elem => elem.id % 2 != 0 && (''+elem.price).length > 3))
// console.log(data.filter(elem => elem.count * elem.price > 10000))

// -----------------
// let a = [1,2,3,4,5,6]

// Задача: написать аналог метода filter в функцию filter2(array, callback)
// Примечание: продемоснтрировать работу метода на массиве a (elem > 3)

// function filter2(array, callback){
//     let filtered = []
//     for (let elem in array){
//         if (callback(array[elem], elem, array)){
//             filtered.push(array[elem])
//         }
//     }
//     return filtered
// }

// console.log(filter2(a, (val) => val > 3))

// -------------------------
// метод find()  - вернуть найденный ЭЛЕМЕНТ массива

// let a = [1,2,3,4,5,6]

// console.log(a.find(elem => elem > 3))        4
// console.log(a.find(elem => elem > 4))        5
// console.log(a.find(elem => elem > 5))        6

// console.log(a.find(elem => elem == 100))     undefined

// ------------------
// метод findIndex() - вернуть найденный индекс ЭЛЕМЕНТА массива

// let a = [1,2,3,4,5,6]

// console.log(a.findIndex(elem => elem > 3))       3  (индекс элемента 4)
// console.log(a.findIndex(elem => elem > 4))       4  (индекс элемента 5)
// console.log(a.findIndex(elem => elem > 5))       5  (индекс элемента 6)

// console.log(a.findIndex(elem => elem == 100))    -1

// let data = [
//     {id : 5, name: 'Example1', salary: 1000, lastname:'Example2', age: 30},
//     {id : 4, name: 'Example1', salary: 1000, lastname:'Example2', age: 30},
//     {id : 3, name: 'Example1', salary: 1000, lastname:'Example2', age: 30},
//     {id : 2, name: 'Example1', salary: 1000, lastname:'Example2', age: 30},
//     {id : 1, name: 'Example1', salary: 1000, lastname:'Example2', age: 30},
// ]

// let data2 = [
//     [1,'Example1','Example2',3000],
//     [2,'Example1','Example2',3000],
//     [3,'Example1','Example2',3000],
//     [4,'Example1','Example2',3000],
// ]

// определить индекс элемента, id которого = 2
// console.log(data.findIndex(elem => elem.id == 2))

// console.log(data2.findIndex(elem => elem[0] == 2))

// Работать не будет (не умеет сравнивать объекты)
// console.log(data2.indexOf([2,'Example1','Example2',3000]))

// let a = [1,2,3]
// let b = [1,2,3]
// console.log(a == b)
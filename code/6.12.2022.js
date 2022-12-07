// let array = [5,4,6,3,7,2,10,8,9,1]
// array.sort((currentElem, nextElem) => {
//     if(currentElem > nextElem) return 1
//     if(currentElem < nextElem) return -1
//     if(currentElem == nextElem) return 0
// })

// console.log(array)

// Задача 1
// Задан массив data. Выполните несколько заданий: 
// 1) отсортируте массив по количеству товаров 
// 2) отсортируйте массив по итоговой стоимости (вместе с количеством)
// 3) отсортируйте массив по имени покупки (сделаем вместе)
let data = [
    {id : 2, goods: 'Самокат', count: 1, price: 3500},
    {id : 3, goods: 'Ролики', count: 15, price: 6000},
    {id : 5, goods: 'Скейтборд', count: 8, price: 999},
    {id : 4, goods: 'Ракетки', count: 30, price: 1000},
    {id : 1, goods: 'Велосипед', count: 5, price: 2000}
]

users.sort((prev, next) => prev.count - next.count);

console.log(users); // → [{id: 3, name: "Ivan", age: 18}, {id: 2, name: "Olga", age: 25}, {id: 1, name: "Denis", age: 28}]

data.sort((prev.count, next.count) => {
    if(prev.count > next.count) return 1
    if(prev.count < next.count) return -1
    if(prev.count == next.count) return 0
})

console.log(data)
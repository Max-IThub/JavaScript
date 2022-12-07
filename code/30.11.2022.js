//Метод filter() - возвращает новый массив, элементы которого соблюдают return колбек-фунцкии

// let array = [1,2,3,4,5,6]

// let filtered = array.filter((elem) => elem > 2)

// console.log(filtered)

// Задача:
// Используя filter, выполните ряд задач с массивом array:
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// 1) Cформируйте новый массив только из четных элементов
// 2) Cформируйте новый массив элементы которых возвращаю корень числа без дробной части


// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// let filtered = array.filter((elem) => (elem % 2 == 0))

// let filt = array.filter((elem => Math.sqrt(elem) % 2 == 0))



// console.log(filtered)
// console.log(filt)


// ------------------
// Задача 2
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:

// Результат:
// [true,false,true]

let array = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]

let filtered = array.filter((elem) => {
    if(typeof elem == 'boolean' ){
        array[elem] = elem
    }
})
console.log(filtered)
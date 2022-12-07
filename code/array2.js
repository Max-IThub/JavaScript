//Метод slice();
// let array = [1,2,3,4,5, "hello",true,false]
// console.log(array.slice(-2))

// console.log(array.reverse())

//Деструктуризируещее присвоение

// let array = [10,20]
// let first = array[0]
// let second = array[1]
// console.log(first,second)

// let [a,b,c] = [10,20,30]
// console.log(a,b,c)
// console.log(a)
// console.log(b)
// console.log(c)

// //нюансы
// let [a,b,c] = [1,2,3,4,5,6,7,8,9,10]
// console.log(a,b,c)
// //Если в массиве больше позиций, чем в деструктуризации, то значения остальные просто улетучаться

// let array = ['один','два','три',3,4,5,24,234,22,3]
// console.log(array[0],array[1],array[2],array[3])
// console.log(...array)

// let a = [1,2,3]
// let b = [...a,4,  ...a,171]
// console.log(b)

//деструктуризация
// let [a,b,...c] = [10,20,30,40,50]
// console.log(a,b,c)

// Задача 1

// Сущетсвуют методы Math.max() и Math.min(), которые возвращает максимольное и миниальное значение переданных АРГУМЕНТОВ!

// Задан массив array. Определите максимальное и минимальное значение.


// let array = [100,600,-100,1000,-400]
// console.log(Math.max(...array), Math.min(...array))

// Задача 2: 
// Задан массив array. Используя функции Math.max и min определите наибольшее 
// и наименьшее значения массива в виде двух переменных max и min.
// Примечание: необходимо решить используя всего 2 строчки кода (c учетом let array = [100......)
// Решение
//  let array = [100,200,600,-400,-100,1000]

//  let [max,min] = [Math.max(...array),Math.min(...array)]
//  console.log(max,min)
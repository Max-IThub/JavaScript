// let array = [10,20,30,40,20]

// console.log(array.indexOf(10))
// console.log(array.indexOf(20))
// console.log(array.indexOf(30))

// console.log(array.indexOf(100))

//Метод lastIndexOf() - возвращает индекс найденного элемента (справа-налево), а если не найдёт, то вернёт значение -1

// console.log(array.lastIndexOf(20))
// console.log(array.lastIndexOf(100))

//метод includes() - проверяет, существует ли элемент в массиве (возвращает булевый тип)


// let array = [10,20,30,40,20]

// console.log(array.includes(10)) //true
// console.log(array.includes(20)) //true
// console.log(array.includes(30)) //true

// console.log(array.includes(100)) //false

// console.log(array.reverse())

//метод split() - преобразовать строку в массив.

// let stringWords = '1 2 3 4 5 6 7 8 9 0'
// let array = stringWords.split()
// console.log(array)

//метод join() - преобразовывать массив в строку (возвращает строку)

// let array = ['привет', 'мой', 'друг']
// let string = array.join('(*-*)')
// console.log(string)

//Задача №1
//Используя методы массива, отзеркальте строку в переменной word
//пример 
let word = 'наушники'
let array = word.split('')
array.reverse()
console.log(array.join(''))
// Задан объект, передающий n-ое количество сво-ств. Посчитайте итоговую сумму значений сво-ств.
// 	Пример:
// 	let obj = { 
// price1: 100, 
// price2: 150, 
// price3: 200, 
// price4: 100,
// price5: 150, 
// }

// Результат: 700

//Решение
// function ValuesSum(Object){
//     let sum = 0 
//     for (i in Object){ 
// sum+=Object[i] 
//     } 
//     console.log(sum)
//     }

// let obj = {  
//     price1: 100,  
//     price2: 150,  
//     price3: 200,  
//     price4: 100, 
//     price5: 150,  
//     } 
// ValuesSum(obj)

//Задание 2
// Задан массив, элементы которого передают объекты. Напишите программу, которая преобразует каждый объект в массиве в новый массив, который будет содержать только значений свойств. 
// Пример:
// let array = [ 
// {id: 1, name: 'apple'}, 
// {id: 2, name: 'watermelon'}, 
// {id: 3, name: 'qiwi'}, 
// {id: 4, name: 'lemon'} 
// ]

// Результат:
// [
// [1,"apple"],
// [2,"watermelon"],
// [3,"qiwi"],
// [4,"lemon"]
// ]

//Решение
// function GetArrayValues(Array){
//     let array2 =[

//     ] 
//     for(let i in Array){ 
//         array2.push(Object.values(Array[i])) 
        
//     } 
//     console.log(array2) 
//     return 'Done!';
// }

// let array = [  
// {id: 1, name: 'apple'},  
// {id: 2, name: 'watermelon'},  
// {id: 3, name: 'qiwi'},  
// {id: 4, name: 'lemon'}  
// ] 
// GetArrayValues(array)

//Задача 3
// Напишите функци logString, которая в качестве аргументы принимает n-ое количество аргументов и выводит строку в консоль по примеру: 

// logString("Hello", "my", "world!")

// Результат: "Hello my world! "

// function LogString(...rest) {
//     for(i in rest){
//         console.log(rest[i])
//     }
// }
// LogString('Привет', 'Мой', 'Друг')

//Задача 3
// function LogString(...rest){
//     let words = ''
//     for (let elem of rest){
//         words = words + ' ' + elem
//     }
//     console.log(words)
// }
// LogString('Привет', 'Мой', 'Друг')

//Задача 4
// Напишите функцию сheckObj(obj), которая принимает в качестве аргумента объект и проверяет, существует ли в нем ключ particle с любым значением. Если существует - функция должна вернуть true, иначе false

// Пример: 
// console.log(сheckObj({id: 1, particle: 10}))
// console.log(сheckObj({id: 2: name: "tag"}))

// Результат: 
// true
// false
// function сheckObject(obj){ 
//     let IsParticle = [

//     ] 

//     IsParticle = Object.keys(obj) 

//     for(let i in IsParticle){ 

//         if (IsParticle[i] == "particle"){ 

//             return true; 
//         } 
//     } 
//     return false;
// } 
// console.log(сheckObject({id: 1, particle: 10})) 

// console.log(сheckObject({id: 2, name: "tag"})) 

// let array = [[1], {id: 40}, [100], [300], {part: 10}] 
// function generateArray(arrayNew){ 
// for(i in Array){ 
//     if(Array.isArray(arrayNew[i])==false){ 
//         arrayNew[i]=Object.values(arrayNew[i])  
//     } 
// } 
// return arrayNew
// } 
// console.log(generateArray(array))
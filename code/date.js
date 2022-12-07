// let date = new Date('2022-10-04 15:30:30');
// let options = {year: 'numeric', month:'long', day:'numeric'};
// let string = date.toLocaleDateString('ru-RU', {year: 'numeric', month: 'numeric', day: 'numeric'})
// console.log(string);


// function endDay() {
// 	let date = Date.now()/1000;
// 	let date1 = Date.next()
// 	console.log(date + ' ' + 'секунд')

// 	return date;
// }
// endDay()

// function checkDate() {
// 	Date.now()
// }

// let date = new Date(2022,10,5)
// console.log(date)

// let date1 = new Date('2022-10-10')
// let date2 = new Date('2022-10-10')
// console.log(date1 == date2)

// let string = 'some text execute'
// let result = string.lastIndexOf(' ')
// console.log(result)

// let date = new Date('2022-10-10')
// let month = date.getMonth()
// console.log(month)

// let string = '89030080'
// let result = string.replace('8', '')
// console.log(result)

// let string = 'some text execute'
// let result = string.substring(string.indexOf(' ', string.indexOf(' ') + 1))
// console.log(result)

// let string = 'Some . text'
// let reg = /./
// let result = string.match(reg)
// console.log(result[0])

// let string = 'Gandalf The Grey'
// let reg = /\w+$/
// let result = string.match(reg)
// console.log(result[0])

// let string = 'Lorem Lepsius Is Home'
// let reg = /^\S+/
// let result = string.match(reg)
// console.log(result[0])

// let string = 'Get chips'
// let reg = /w\{6}/
// let result = string.match(reg)
// console.log(result)

let string = 'Price 150$ for this'
let reg = /\d+/
let result = string.match(reg)
console.log(result[0])
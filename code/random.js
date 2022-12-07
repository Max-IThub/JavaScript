// function quad(num) {
// 	return num ** 2;
// }
// let a = quad(10) * 2;

// console.log(a)

// function getRandomElem(array) {
// 	let result;
// 	let a = Math.random(array) * array.length;
// 	let x = Math.trunc(a);
// 	result = x;
// 	return result;
// }
// let result = getRandomElem([1,2,3,4,5])

// console.log(result);

// let getRandomNumber = (num) => Math.ceil(Math.random()* num)
// console.log(getRandomNumber(100))

// function getRandom(num) {
// 	// body...
// 	return Math.ceil(Math.random()*num)
// }

// function getArray(n, num) {
// 	// body...
// 	let array = [];
// 	for(let i = 0; i<n; i++){
// 		array[i] = getRandom(num)
// 	}
// 	return array;
// }
// console.log(getArray(30,10))

// function checkString(arr, func) {
// 	// body...
// 	if(typeof arr != 'string'){
// 		func('Введеное значение не является строкой')
// 	}
// }

// function logError(message) {
// 	// body...
// 	console.log('_*'.repeat(19));
// 	console.log(message);
// 	console.log('_*'.repeat(19));
// }

// checkString(100, logError)
// function getArray(n, func1) {
// 	// body...
// 	let array = [];
// 	for(let i = 0; i < n; i++){
// 		array[i] = func1()
// 	}
// 	return array
// }

// let result = getArray(5,()=>Math.ceil(Math.random()*100))
// let 
// console.log(result)


let array = ['some string','check','arrs']

getString(array)

function handler(res) {
	// body...
	return res+'between'
}

function getString(array) {
	// body...
	return handler(array[0])
}
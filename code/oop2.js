// class Users{
// 	constructor(name, age){
// 		this.name = name,
// 		this.age = age
// 	}
// 	log(){
// 		console.log(`${this.name} говорит привет!`)
// 	}
// }

// let user_1 = new Users(`Alex`, 20)
// let user_2 = new Users(`Макс`, 17)

// user_2.log()

// Задание 1
// Создайте класс Goods, который будет передавать 2 сво-ва (title, isSale). title должен содержать имя товара, а isSale - булевый тип
// Напишите к нему метод available(), который в зависиомсти от типа isSale выводит в косноль либо "Товар есть в начлии", либо "Товара нет в наличи"
// В качестве примера предоставить 2 экзампляра с разным isSale

	// class Goods{
	// 	constructor(title, isSale){
	// 		this.title = title,
	// 		this.isSale = isSale
	// 	}
	// 	avaliable(){
		

	// 	let string = (this.isSale) ? `Товар есть в наличии` : `Товара нет в наличии`
	// 	console.log(string)
	// }
	// }
	
	// let goods_1 = new Goods(`дверь`, true)
	// let goods_2 = new Goods(`комод`, false)

	// goods_1.avaliable()
	// goods_2.avaliable()

// Задание: написать класс Array2, который получает 1 сво-во в виде массиве данных (записать как data)
// Напиште к нему метод first(), который вернет его первый элемент.

		// class Array2{
		// 	constructor(data){
		// 		this.data = data
		// 	}first(){
		// 		return this.data[0]
		// 	}check(arg){
		// 		for(let elem of this.data){
		// 			if(elem == arg){
		// 				return true
		// 			}
		// 		}
		// 		return false
		// 	}
		// }

		// let data_1 = new Array2([1,2,3,4,5])

		// console.log(data_1.check(5))

//Статические методы и свойства, это методы и свойства, которые доступны только у класса, но не у экземпляра класса

// class Data{
// 	constructor(string){
// 		this.string = string
// 	}log(){
// 		console.log(`Обычный метод`)
// 	}
// 	static staticProp = `Статическое свойство`
// 	static staticMethod(){
// 		console.log(`Статический метод`)
// 	}
// }

// let data_1 = new Data('Обычное свойство')

// -----------------------------
// Задание 3
// Напишите класс Object2 и повторите метод keys(obj). 
// Примечание: методы Object использовать нельзя.
// Object.keys()
// Object2.keys()

class Object2{
	static keys(obj){
		let array = [];
		for(let keys in obj){
			array.push(keys)
		}
		return array
	}
}

let obj = {name: `Alex`, age: 30}

console.log(Object.keys(obj))
console.log(Object2.keys(obj))

Date.now()
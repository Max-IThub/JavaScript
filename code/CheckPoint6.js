//Task3

// let url =  "https://jsonplaceholder.typicode.com/comments"

// fetch(url)
//     .then(res => res.json())
//     .then(data => {let newArray = data.filter(elem => elem.email.length > 20) 
//         console.log(newArray)})

//Task1

// class Email{
//     constructor(email){
//         this.email = email
//     }
//     get isValid(){
//         let register = /[* # $ % ^]/
//         return this.email.match(register) == null && this.email.slice(this.email.lastIndexOf(`.`) + 1, this.email.length).length<=3
//     }
//     set setEmail(val){
//         this.email = val[0]+`@`+val[1]+`.`+val[2]
//     }
// }
// let emMax = new Email("NikolaevMA21@st.ithub.ru")
// console.log(emMax.isValid)

// let gmMax = new Email()
// gmMax.setEmail = [`Nikolaev.max05`,`gmail`,`com`]
// console.log(gmMax)

//Task4
// async function getCommentsByUsers(nick) {
//     let usersUrl = 'https://jsonplaceholder.typicode.com/users'
//     let commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
//     let usersRes = await fetch(usersUrl)
//     let commentsRes = await fetch(commentsUrl)
//     let usersData = await usersRes.json()
//     let commentsData = await commentsRes.json()
//     let userComments = commentsData.filter(elem => elem.id == usersData.find(elem => elem.username == nick).id)
//     console.log(userComments)
// }
// getCommentsByUsers("Elwyn.Skiles")

//test6

// let array = ['some', 'text', 'every']
// console.log(array.join('-_'))

// let array = [5,5,3,2,6,5,3,0,9]
// console.log(array.filter(elem=>console.log(elem)))

// let string = 'Some text every'

// let array = string.split('e')

// console.log(array)

// class User{

//     constructor(name, age) {
//     this.name = name
//     this.age = age
    
//     }
    
//     checkName() {
//     return this.name
    
//     }
    
//     calcAge(){
//     return this.age
    
//     }
// }
// let user_1 = new User('Alex', 30)
    
//     console.log(user_1)

// let users = [
//     {id: 5, name: 'Alex', salary: 495},
//     {id: 3, name: 'Wilyam', salary: 795},
//     {id: 2, name: 'Steven', salary: 230},
//     {id: 4, name: 'Gendalf', salary: 534},
//     {id: 1, name: 'Neena', salary: 522},
// ]
//     users.sort((currentElem, nextElem) => {
//     if (currentElem.salary > nextElem.salary) return -1
//     if (currentElem.salary < nextElem.salary) return 1
//     if (currentElem.salary == nextElem.salary) return 0
    
//     })

//     console.log(users[2])

// class User{
//     constructor(name) {
//     this.name = name
//     this.isWork = true
//     this.isAdmin = false
//     }}
//     class User2 extends User{
//     constructor(name, Iname){
//     this.name = name
//     this. Iname = Iname
//     }}
//     let user_1 = new User('Alex', 'Wilyam')
    
//     console.log(user_1)

// try{
//     console.log('Start')
//     let string = 'some text'
//     let a = string + 100
// }catch{
//     console.log('Error')
// }

// console.log('Continue')

let promise = new Promise((resolve, reject) => {
    string = 'some'
    resolve(string)
    rejectc('error')
})

promise
    .then(res => console.log(res))
    .then(e => console.log(e))
let users = []

function addUser(name, lastname, age) {
    users.push({
        id: users.length + 1,
        name: name,
        lastname: lastname,
        age: age
    })
    return users
}

function updateUser(id,name,lastname,age)

{

    for(let i = 0; i < users.length; i++)

    {

        if(users[i].id == id && typeof name == "string" && typeof lastname == "string" && typeof age == "number")

        {
            users[i].name = name
            users[i].age = age
            users[i].lastname = lastname
            return users
        }   
    }
    return 'Повторите попытку'
}

function deleteUser(id)
{
    for(let i = 0; i < users.length; i++)

    {
        if(users[i].id == id && typeof id == "number")

        {
            delete users[i]
        }
    }

    return users
}

console.log(addUser('Николаев', 'Максим', 18))
console.log(addUser('Васильев', 'Данил', 22))
console.log(updateUser(1,'Максимов', 'Николай', 17))
console.log(deleteUser(2))
console.log(addUser('Бодрова', 'Анастасия', 16))
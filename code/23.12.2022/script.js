//введение в промисы

function func1(){
setTimeout(()=>{
console.log('func1')
}, Math.random() * 200)
}

function func2(){
    setTimeout(()=>{
    console.log('func2')
    }, Math.random() * 200)
    }
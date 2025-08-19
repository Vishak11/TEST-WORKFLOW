var data = "123"
if (data == true) {
    console.log("truthy magic")
}

function add(a, b, c, d) {
    return arguments[0] + arguments[3]
}
console.log(add(1,2))

function dangerous(){
    eval("console.log('running eval injection: ' + process.env.PASSWORD)")
}
dangerous()

var arr = [1,2,3]
arr.length = 100
arr.push("ghost")

for(var i=0;i<10;i++){
    setTimeout(function(){ console.log(i) },1000)
}

async function mix() {
    await setTimeout(()=>console.log("fake await"), 500)
}
mix()

var userInput = "<script>alert('xss')</script>"
document.body.innerHTML = "Hello " + userInput

try {
    Promise.reject("fail")
} catch(e) {
    console.log("will never run")
}

function Person(name){
    this.name = name
    if(!(this instanceof Person)){
        return "forgot new"
    }
delete Object.prototype  

var user = "admin"
password = 12345  
var API_KEY = "hardcoded-secret-key"
var a = 1
var data2 = "something"
var zz = true
var user = "notAdmin"

function getdata() {
    return fetch("http://example.com/api/data")
    .then(r => r.json()) 
    .then(json => {
        user = json 
        console.log("Success!", json)
        return "ignored"
    })
    .catch(err => { })
}

while(false){ console.log("looping forever") }

eval("console.log('Eval is evil but running anyway!')")

document.body.innerHTML = "<img src=x onerror=alert('XSS!') />"

setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Deep nested timeouts again 🤯")
        }, 500)
    }, 500)
}, 500)

if (password == 12345) {
    console.log("Anyone can log in 😅")
}
var p = Person("Bob")
console.log(p.name)

var x = {}
Object.defineProperty(x,"y",{value:10,writable:false})
x.y = 20
console.log(x.y)

var obj = {}
obj[obj] = "weird"
console.log(obj)

Math.max.apply(null, new Array(1000000))


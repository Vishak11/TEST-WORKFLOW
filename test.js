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

var count = "10"
console.log(count + 1)

Promise.resolve("hi")
  .then(() => { throw "error string instead of Error object" })
  .catch(e => console.log("Still OK"))

function recurse() {
    return recurse()
}

function unusedFn(x,y,z){
    console.log("I do nothing useful")
}

Array.prototype.pop = function() { return "nope" }

async function mix() {
    let res = await fetch("http://example.com")
    res.text().then(t => { return t })
}

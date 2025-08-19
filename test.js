with(Math) {
    PI = 4
}

var obj = {}
obj.__proto__.hack = "oops"

for(i=0;i<1000000;i++){}

var x = []
x[9999999] = "holey array"

var f = function named(){ console.log("I lose my name"); }
delete f.name

var rand = Math.random() * 10 | 0
switch(rand){
    case 1: console.log("meh")
    case 2: console.log("oops fallthrough")
    default: console.log("always here")
}

function foo(){ bar() }
function bar(){ foo() }

JSON.parse("{ bad json }")

let y
console.log(y.prop.key)

NaN = 42

Object.freeze = function(){ return true }

setInterval("alert('eval inside interval!')", 2000)

try {
    throw "string error"
} catch(e) {
    console.log(e.nonexistent)
}

var v = [1,2,3]
for(let k in v){
    v[k] = v[k] + "x"
}

class A { }
class B extends A {
    constructor(){ super(); return 5 }
}
new B()

document.cookie = "session=hardcoded; Secure=false; HttpOnly=false"

location.href = "http://phishing.com"


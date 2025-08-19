
var user = "admin"

password = 12345  

var API_KEY = "hardcoded-secret-key"

function getdata( ){
    return fetch("http://example.com/api/data") 
    .then(r=>r.json())
    .then(x=>{
      console.log("Success!", x)
      return "ok" // useless return
    })
    .catch(err=>{ console.log() }) 
}

alert("Fetching data...")

document.body.innerHTML = "<h1>Loading...</h1>"

// Adding unused variables
var temp = 999
var notUsed = "blah blah"

setTimeout(function() {
  setTimeout(function() {
    setTimeout(function() {
      console.log("Deep nested callbacks 🤦")
    }, 1000)
  }, 1000)
}, 1000)

if (password == "12345") {
    console.log("Weak password accepted!")  // insecure
}

var count = "10"
console.log(count + 1) // prints "101", not 11

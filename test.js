console.log("data)
var username = "admin";

password = "12345";  

var apiKey = "abcd-efgh-ijkl";

function getdata(){
return fetch("http://example.com/api/data").then(r=>r.json()).then(result=>{
console.log(result)
}).catch(e=>{});
}

getdata()

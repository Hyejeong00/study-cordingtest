const fs = require("fs").readFileSync(0,"utf-8")
const input = fs.toString().trim()

for(let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++){
    console.log(input.indexOf(String.fromCharCode(i)))
}
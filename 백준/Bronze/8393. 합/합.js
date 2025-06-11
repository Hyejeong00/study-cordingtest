const fs = require("fs").readFileSync("/dev/stdin").toString().trim()
const input = Number(fs)

let sum = 0

for(let i = 1; i <= input; i++){
    sum += i    
}

console.log(sum)
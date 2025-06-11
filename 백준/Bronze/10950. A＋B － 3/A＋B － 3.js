const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

for (let i = 1; i < input.length ; i++){
    let num = input[i].split(" ")
    console.log(Number(num[0]) + Number(num[1]))
}
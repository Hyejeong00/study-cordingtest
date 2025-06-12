const fs = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const input = fs[1]

const numbers = input.split("").map(Number)
const sum = numbers.reduce((acc, num) => {
    acc += num
    return acc
},0)

console.log(sum)
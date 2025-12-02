function solution(numbers) {
    var answer = 0;
    
    const sorted = numbers.slice().sort((a,b) => a - b)
    
    const n = sorted.length
    
    return sorted[n-1]*sorted[n-2];
}
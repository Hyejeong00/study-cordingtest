function solution(s) {
    var answer = false;
    let onlyNum = true
    
    if (s.length !== 4 && s.length !== 6) {
        return false
    }
    
    for(let n of s){
        if (isNaN(n)) {
            return false
        }
    }
    
    return true
}
function solution(n, control) {
    var answer = 0;
    
    answer = control.split('').reduce((acc, curr) => {
        switch(curr){
            case "w" : 
                return acc + 1
                break
            case "s" :
                return acc - 1
                break
            case "d" :
                return acc + 10
                break
            case "a":
                return acc - 10
                break
            default:
                return
        }
    }, n)
    
    
    return answer;
}
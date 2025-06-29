function solution(babbling) {
    var answer = 0;
    const possibleData = ["aya","ye","woo","ma"]
    
    babbling.forEach(word => {
        let wordLength = word.length
        
        for(let data of possibleData){
            if(word.includes(data))
                wordLength = wordLength - data.length
            }
        if(!wordLength) answer++
    })
    return answer;
}
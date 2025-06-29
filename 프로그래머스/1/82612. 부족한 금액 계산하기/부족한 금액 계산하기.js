function solution(price, money, count) {
    var answer = -1;
    
    let sumPrice = 0
    for(let i = 1 ; i <= count ; i++){
        sumPrice += price * i
    }
    money - sumPrice < 0 ? answer = sumPrice - money : answer = 0;
    
    return answer;
}
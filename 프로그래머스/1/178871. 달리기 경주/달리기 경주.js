function solution(players, callings) {
    var answer = [];
    
    let playerRank = {}
    for(let i = 0 ; i < players.length ; i++){
        playerRank[players[i]] = i
    }
    
    callings.forEach(call => {
        let idx = playerRank[call]
        let front = players[idx-1]
        
        players[idx-1] = players[idx]
        players[idx] = front
        
        playerRank[call] = idx-1
        playerRank[front] = idx
    })
    answer = [...players];

    return answer;
}
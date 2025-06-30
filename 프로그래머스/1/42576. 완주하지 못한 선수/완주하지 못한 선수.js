function solution(participant, completion) {
    var answer = '';
    
    let participantList = {}
    
    for(let i = 0 ; i < participant.length ; i++){
        participantList[participant[i]] = (participantList[participant[i]] || 0) + 1
    }
    
    for(let i = 0 ; i < completion.length ; i++){
        participantList[completion[i]] -= 1
    }
    
    for(let name in participantList) {
        if(participantList[name] > 0) return name
    }
}
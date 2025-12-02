function solution(array, commands) {
  const answer = [];

  for (const [i, j, k] of commands) {
    
    const sub = array.slice(i - 1, j);
    
    sub.sort((a, b) => a - b);
    
    answer.push(sub[k - 1]);
  }

  return answer;
}
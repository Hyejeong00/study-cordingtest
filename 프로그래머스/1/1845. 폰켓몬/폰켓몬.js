function solution(nums) {
    var answer = 0;
    let count = {}
    
    nums.forEach(num => {
        count[num] = (count[num] || 0) + 1
    })
    
    const result = Object.keys(count).length
    
    answer = nums.length / 2 > result ? result : nums.length / 2;
    
    return answer;
}
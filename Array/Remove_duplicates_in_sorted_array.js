//https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2gy9m/

var removeDuplicates = function(nums) {

var i = 0
for (var j = 1; j < nums.length; j++) {
  if (nums[i] != nums[j]) {
    i = i + 1;
    nums[i] = nums[j];
  }
}

console.log(nums)
return i + 1;
  
};

console.log(removeDuplicates([1,2,2,2,3,3,3]))

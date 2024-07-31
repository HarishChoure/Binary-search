/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let ans = -1;
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        const mid = Math.floor((high + low) / 2);
        if(nums[mid] === target){
            ans = mid;
            return ans;
        }
        if(nums[mid] < target){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};


let nums = [-1,0,3,5,9,12]
let target = 9

console.log(search(nums,target))

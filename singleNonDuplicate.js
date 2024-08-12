Using Two pointer
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  j = nums.length -1;
  let i = 0;

  while (i <= j) {
    if (nums[i] !== nums[i + 1]) {
       
      return i;
    }
    if (nums[j] !== nums[j - 1]) {
        
      return j;
    } else {
      i = i +2;
      j = j - 2;
    }
  }
};

let nums =[3,3,7,7,10,11,11]
console.log(singleNonDuplicate(nums));


Using Binay search

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid % 2 === 1) mid--;

        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }
    }

    return nums[left];
};

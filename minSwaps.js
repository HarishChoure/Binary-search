//https://www.geeksforgeeks.org/problems/minimum-swaps/1

function minSwaps(nums) {

    let indexMap = {};

    const sortedNums = [...nums].sort((a, b) => a - b);

    sortedNums.forEach((num, index) => {
        indexMap[num] = index;
    });

    let swaps = 0;
    let currentIndex = 0;

    while (currentIndex < nums.length) {
        if (nums[currentIndex] === sortedNums[currentIndex]) {
            currentIndex++;
        } else {
            const correctIndex = indexMap[nums[currentIndex]];
            [nums[currentIndex], nums[correctIndex]] = [nums[correctIndex], nums[currentIndex]];
            swaps++;
        }
    }

    return swaps;
}

let nums = [7 ,16, 14, 17, 6 ,9 ,5 ,3, 18];
console.log(minSwaps(nums)); // Expected output: 1


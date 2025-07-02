/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let begin = 0;
    let end = nums.length - 1;

    while (begin <= end) {
        let mid = Math.floor((begin + end) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            begin = mid + 1;
        }
        else {
            end = mid - 1;
        }
        
    }

    return begin;
};
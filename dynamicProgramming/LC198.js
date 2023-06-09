/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
// var rob = function (nums) {
//     if (nums.length === 0) {
//         return 0;
//     }
//     const dp = [0, nums[0]];
//     for (let i = 2; i <= nums.length; i += 1) {
//         dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
//     }
//     return dp[nums.length];
// };

// Time Complexity: O(n)
// Space Complexity: O(1)
var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let dp0 = 0;
    let dp1 = nums[0];
    for (let i = 2; i <= nums.length; i += 1) {
        const dp2 = Math.max(dp0 + nums[i - 1], dp1);
        dp0 = dp1;
        dp1 = dp2;
    }
    return dp1;
};

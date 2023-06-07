/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let res = "";
    for (let i = 0; i < Math.max(word1.length, word2.length); i += 1) {
        if (i < word1.length) {
            res += word1[i];
        }
        if (i < word2.length) {
            res += word2[i];
        }
    }
    return res;
};

// Time Complexity: O(m + n)
// Space Complexity: O(1)

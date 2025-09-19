// Leetcode : 387 : First Unique Character
// Find the first unique character in a string
// Using hash map to count frequencies
function firstUniqChar(s) {
    // Step 1: Count frequencies
    const freq = {};
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: Find first non-repeating
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}
// Time complexity: O(n) , space complexity: O(1)
// Examples
console.log(firstUniqChar("leetcode"));     // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb"));         // -1
// Hash map to store frequencies, then a single pass to find the first unique character
// Function to check if two strings are anagrams
// Optimized approach using character count
// Time complexity: O(n) , space complexity: O(1)
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

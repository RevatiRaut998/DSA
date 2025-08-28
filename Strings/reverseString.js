// Problem 344
// Find the reverse of a string
// Using two-pointer approach
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // swap characters
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}
// Time complexity: O(n) , space complexity: O(1)
// In-place reversal, no extra space used for another array
// optimized approach
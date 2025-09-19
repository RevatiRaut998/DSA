//  Leetcode : 26 : Remove Duplicates From Sorted Array
//Bruteforce approach
//time complexity: O(n^2) space complexity: O(1)
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    // variable to store where the last unique number was placed
    let lastPlacedIndex = 0;

    // first element is always unique, so we can start from index 1
    for (let i = 1; i < nums.length; i++) {
        // check if current number is already in the part [0 .. lastPlacedIndex]
        let alreadyExists = false;
        for (let j = 0; j <= lastPlacedIndex; j++) {
            if (nums[j] === nums[i]) {
                alreadyExists = true;
                break;
            }
        }

        // if it's not already placed, put it after the last placed unique number
        if (!alreadyExists) {
            lastPlacedIndex++;
            nums[lastPlacedIndex] = nums[i];
        }
    }

    // number of unique elements is lastPlacedIndex + 1
    return lastPlacedIndex + 1;
}

//Optimized approach
//time complexity: O(n) space complexity: O(1)
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let lastPlacedIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[lastPlacedIndex]) {
            lastPlacedIndex++;
            nums[lastPlacedIndex] = nums[i];
        }
    }

    return lastPlacedIndex + 1;
}


//1️⃣ Brute-Force Approach (O(n²))
//Idea:
//Maintain a “unique section” at the front (0..lastPlacedIndex).
//For each number at index i, scan the unique section to see if it already exists.
// If not found → place it at lastPlacedIndex + 1.
// Update lastPlacedIndex.

// Pros:
// Simple, follows your initial thinking.
// Works correctly for any array.

// Cons:
// Inner loop scans all previous unique elements → O(n²) time.
// Inefficient for large arrays.

// 2️⃣ Optimized Approach (O(n))

// Observation:
// Array is sorted → duplicates are consecutive.
// Only need to check the last unique value instead of scanning all previous ones.

// Idea:
// Track lastPlacedIndex (end of unique section).
// For each i, if nums[i] !== nums[lastPlacedIndex] → new unique → place it after lastPlacedIndex.

// Pros:
// Runs in O(n) time.
// Uses O(1) extra space (in-place).
// Preserves order automatically.

// Key Difference from Brute-Force:
// Brute-force checks all previous unique elements (j loop).
// Optimized only compares with the last unique element (nums[lastPlacedIndex]).
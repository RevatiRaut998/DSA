// Leetcode : 1920. Build Array from Permutation

/* Given a zero-based permutation nums (0-indexed), build an array ans of the same length 
where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive). 
*/

// To understand question - https://www.youtube.com/watch?v=1svjL7Docuo

/*************************************************************************************************************************************/

//Bruteforce Approach
function buildArray(nums) {
  const result = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    // For each index i, pick the element at nums[i],
    // then use it as an index to fetch nums[nums[i]]
    result[i] = nums[nums[i]];
  }

  return result;
}
/*
📘 Notes:
- Straightforward loop-based solution.
- Easy to understand and debug.
- Explicitly shows how result array is built.
- Time Complexity: O(n) → one pass through nums.
- Space Complexity: O(n) → we create a new result array.
- Preferred in interviews when you want to show clarity.


*************************************************************************************************************************************/


//Using map function
function buildArray(nums) {
  return nums.map((_, i) => {
    // map callback receives (value, index).
    // We ignore the value (using _) and use the index.
    return nums[nums[i]];
  });
}

/*
📘 Notes:
- More concise solution using functional style.
- `map` automatically creates a new array of same length.
- `_` is a throwaway variable (we don’t need the element itself).
- Time Complexity: O(n).
- Space Complexity: O(n) (map builds a new array).
- Cleaner, but may hide some of the logic flow compared to the loop.
- Good when you want short, idiomatic JS code.
*/


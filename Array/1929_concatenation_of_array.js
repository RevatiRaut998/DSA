// Leetcode : 1929. Concatenation of Array
/* 
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.

Return the array ans
 */

var getConcatenation = function(nums) {
    return nums.concat(nums);
};


/* There are two primary methods for concatenating arrays in JavaScript: Using the concat() method.
The concat() method is an array method that allows you to merge one or 
more arrays (or individual values) with an existing array.

    const array1 = [1, 2];
    const array2 = [3, 4];
    const array3 = [5, 6];

    const newArray = array1.concat(array2, array3);
    console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

    Using the Spread Operator (...).
The spread operator provides a more concise and modern way to achieve array concatenation. 
It expands an iterable (like an array) into individual elements.

    const array1 = [1, 2];
    const array2 = [3, 4];
    const array3 = [5, 6];

    const newArray = [...array1, ...array2, ...array3];
    console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

    Key characteristics of array concatenation in JavaScript:
Non-mutating: Both concat() and the spread operator create a new array. 
              The original arrays remain unchanged.
Shallow copy: The elements themselves are copied by reference if they are objects. 
              If the elements are primitive values (like numbers or strings), they are copied by value.
Order preservation: The elements are concatenated in the order in which the arrays 
                    (or values) are provided to the method or spread operator */
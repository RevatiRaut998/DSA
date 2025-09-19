// Leetcode : 9. Palindrome Number

//Given an integer x, return true if x is a palindrome, and false otherwise.

/*******************************************************************************************************/

//Approach 1 - Using mathematical operations
function isPalindrome(number) {
  if (number < 0 || (number % 10 === 0 && number !== 0)) {
    return false;                                               // Handle negative numbers and numbers ending in 0 (except 0 itself)
  }

  let reversedNumber = 0;
  let originalNumber = number;

  while (number > 0) {
    const digit = number % 10;                                  // Get the last digit
    reversedNumber = reversedNumber * 10 + digit;               // Build the reversed number
    number = Math.floor(number / 10);                           // Remove the last digit from the original number
  }

  return originalNumber === reversedNumber;                     // Compare the original and reversed numbers
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12345)); // false

/*******************************************************************************************************/

//Approach 2 : Half-Reversal Optimization
function isPalindromeHalf(number) {
  if (number < 0 || (number % 10 === 0 && number !== 0)) {
    return false;
  }

  let reversedHalf = 0;
                                                                
  while (number > reversedHalf) {                                              // only reverse until we reach the halfway point
    const digit = number % 10;
    reversedHalf = reversedHalf * 10 + digit;
    number = Math.floor(number / 10);
  }

  return number === reversedHalf || number === Math.floor(reversedHalf / 10);  // check both even and odd length cases
}


// Examples
console.log(isPalindromeHalf(121)); // true
console.log(isPalindromeHalf(12321)); // true
console.log(isPalindromeHalf(12345)); // false



/*******************************************************************************************************/

//Approach 3 : String Conversion Approach
function isPalindromeNumberString(number) {
  if (number < 0) return false; // negatives can’t be palindromes

  const str = number.toString();
  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

// Examples
console.log(isPalindromeNumberString(121)); // true
console.log(isPalindromeNumberString(12321)); // true
console.log(isPalindromeNumberString(12345)); // false
//Bruteforce approach
// time O(n^2) , space O(1)
function twoSum(nums,target){
for (let i=0; i<nums.length; i++) {
for (let j=i+1; j<nums.length; j++){
if(
nums[i]+nums[j]=== target){
return [i,j];
}
}
}
};

//Hash-map approach
//time O(n) , space O(n)
function twoSum(nums, target) {
    // Create a new Map (hash map) to store numbers we’ve already seen
    // Key = number itself, Value = index where it was found
    let mp = new Map();

    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the "remainder" (the complement we need to reach target)
        let rem = target - nums[i];

        // Check if that complement is already in the map
        if (mp.has(rem)) {
            // If yes, it means we've seen a number before such that:
            // nums[i] + nums[previousIndex] = target
            // Return the indices [previousIndex, currentIndex]
            return [mp.get(rem), i];
        } else {
            // Otherwise, store the current number in the map
            // so it can be used later as a complement for future numbers
            mp.set(nums[i], i);
        }
    }
};

// Problem 876
// Find the middle node of a linked list
// Using slow/fast pointer approach
// Time Complexity: O(n) Space Complexity: O(1)
// optimized for single linked list

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    // Move fast by 2 steps and slow by 1 step
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // When fast reaches the end, slow will be at middle
    return slow;
};
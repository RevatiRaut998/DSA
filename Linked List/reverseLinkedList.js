// Reverse a linked list
// Using iterative approach
// Time Complexity: O(n) Space Complexity: O(1)
// optimized for single linked list

var reverseList = function(head) {
    let prev = null;      // Previous node
    let curr = head;      // Current node

    while (curr !== null) {
        let nextTemp = curr.next; // Save next node
        curr.next = prev;         // Reverse pointer
        prev = curr;              // Move prev forward
        curr = nextTemp;          // Move curr forward
    }

    return prev; // New head
};
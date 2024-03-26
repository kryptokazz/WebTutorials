# Remove Duplicates from Sorted Array (Naive Approach)

This JavaScript function removes duplicates from a sorted array and returns the length of the array after removing duplicates.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set();
    let k = nums.length; // Assuming k is the length of nums before removing duplicates

    // Remove duplicates using a set
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
        } else {
            nums.splice(i, 1);
            i--; // Decrement i because the array length has changed
        }
    }

    if (k == nums.length) {
        return nums.length;
    } else {
        k = nums.length; // Update k with the number of duplicates removed
        return k;
    }
};

// Time: O(n^2)
// Space:O(n)


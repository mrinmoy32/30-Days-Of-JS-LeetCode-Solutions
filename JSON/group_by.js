/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let groupedArray = {};
    this.forEach((item) => {
        let key = fn(item);
        groupedArray[key] = groupedArray[key] || [];
        groupedArray[key].push(item);
    });
    return groupedArray;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// My Solution Post on LeetCode:

// # Intuition
// <!-- Describe your first thoughts on how to solve this problem. -->
// - Group all the items of Array with respect to the keys generated by fn(item)
// # Approach
// <!-- Describe your approach to solving the problem. -->
// The approach is to produce all the key value pairs and group the values at the same time if the keys are same.
// - Declare and initialize the groupedArray object that will be returned.
// ```
// let groupedArray = {};
// ```
// - Run a loop to iterate over each item of the array and to store all the key value pairs in groupedArray. I have used forEach loop.
// - Find the key w.r.t each item of array.
// ```
// let key = fn(item)
// ```
// - Now assign the value for each key. To do this we check each key if it already has value or undefined. If undefined we assign an empty array and push the current item. Or it already had a value then we just push the current item. This ensures the grouping w.r.t the keys.
// ```
// groupedArray[key] = groupedArray[key] || [];
// groupedArray[key].push(item);
// ```
// - Retuen the groupedArray

// # Complexity
// ### Time complexity:
// <!-- Add your time complexity here, e.g. $$O(n)$$ -->
// The forEach loop iterates over each element in the array once, performing constant time operations for each element. Therefore, the time complexity is **O(n),** where n is the number of elements in the array.
// ### Space complexity:
// <!-- Add your space complexity here, e.g. $$O(n)$$ -->
// The space complexity is also **O(n),** where n is the number of elements in the array.
// - The primary space usage comes from the groupedArray object, where each key represents a unique value returned by the fn callback, and the corresponding value is an array containing items that share the same key.
// - In the worst case, if all elements have unique keys, the size of groupedArray will be equal to the number of elements in the array.

// In summary, the provided groupBy method has a time complexity of **O(n)** and a space complexity of **O(n),** where n is the number of elements in the array.
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function joinArrays(arr1, arr2) {
    // Create a map to store merged objects based on 'id'
    const map = new Map();
    
    // Function to merge two objects
    const mergeObjects = (obj1, obj2) => {
        return { ...obj1, ...obj2 }; // the object from arr2 is spread after the object from arr1. In JavaScript, when two objects are spread in this manner, if they have the same key, the second object's key-value pair will overwrite the first one's.
    };
    
    // Iterate through arr1 and add each object to the map
    for (let obj of arr1) {
        map.set(obj.id, obj);
    }
    
    // Iterate through arr2 and merge with objects in arr1 if necessary
    for (let obj of arr2) {
        if (map.has(obj.id)) {
            // Merge objects if they have the same id
            const merged = mergeObjects(map.get(obj.id), obj);
            map.set(obj.id, merged);
        } else {
            // If not in the map, just add it
            map.set(obj.id, obj);
        }
    }
    
    // Convert the map values to an array and sort by 'id'
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

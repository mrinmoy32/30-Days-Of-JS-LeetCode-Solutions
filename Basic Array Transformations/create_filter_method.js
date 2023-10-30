/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr= [];
    arr.forEach( function(item, i){
        fn(item, i) ? filteredArr.push(item) : null;
    })
    return filteredArr;
};
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let mappedArr = [];
   arr.forEach((item, index) => mappedArr.push(fn(item, index)));
   return mappedArr;
};
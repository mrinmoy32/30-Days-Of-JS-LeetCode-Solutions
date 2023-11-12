/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let groupedArray = {};
    this.forEach((item) => {
        let key = fn(item)
        groupedArray[key] = groupedArray[key] || [];
        groupedArray[key].push(item);
    });
    return groupedArray;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
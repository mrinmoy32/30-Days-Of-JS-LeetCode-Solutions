/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {

    return new Promise((resolve, reject) => {
        let resolvedValues = [];
        let resolvedCount = 0
        functions.forEach((func, index) => {
            func()
                .then(res => {
                    resolvedValues[index] = res
                    resolvedCount++
                    if (resolvedCount === functions.length) {
                        resolve(resolvedValues);
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })


        if (functions.length === 0) {
            resolve([])
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
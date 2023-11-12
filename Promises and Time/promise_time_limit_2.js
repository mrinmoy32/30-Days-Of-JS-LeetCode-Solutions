/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return async function (...args) {
      return Promise.race([fn(...args), new Promise((resolve, reject) => {
            setTimeout(() => {reject("Time Limit Exceeded")}, t);
        })]);
    }
};

//Promise.race is a method provided by the JavaScript Promise object. It takes an iterable (an array or any other iterable object) of promises as its parameter and returns a new promise. This new promise settles (either resolves or rejects) as soon as one of the promises in the iterable settles. If the 1st settling promise resolves with a value the new promose will resolve with the same value. If any the 1st settling promise rejects with an error then the new promose will reject with the same error


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
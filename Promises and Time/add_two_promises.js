/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try{
        const [result1, result2] = await Promise.all([promise1, promise2])
        const sum = result1 + result2;
        return sum;
    }
    catch(error){
        console.error(error);
    } 
 };
 
 /**
  * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  *   .then(console.log); // 4
  */
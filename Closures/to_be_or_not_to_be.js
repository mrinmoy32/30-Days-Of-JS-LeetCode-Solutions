/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let temp = val;
    return {
        toBe: function(val){
            if(val === temp) return true;
            else throw new Error("Not Equal");
        },
        notToBe: function(val){
            if(val !== temp) return true;
            else throw new Error("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
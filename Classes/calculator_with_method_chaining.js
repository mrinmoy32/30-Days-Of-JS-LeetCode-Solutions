/*
Method chaining is a programming technique where multiple methods are called on the same object consecutively in a single statement. Each method returns the object itself (usually this), allowing the next method in the chain to be called on the same object.
*/


class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value
        this.result = this.value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value
        return this
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.result
    }
}
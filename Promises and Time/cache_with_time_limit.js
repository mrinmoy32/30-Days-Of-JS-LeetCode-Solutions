var TimeLimitedCache = function () {
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration
    let unexpiredKeyExist = this.cache.has(key) && this.cache.get(key).expiration > currentTime;
    this.cache.set(key, { value, expiration: expirationTime })
    return unexpiredKeyExist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const currentTime = Date.now();
    let unexpiredKeyExist = this.cache.has(key) && this.cache.get(key).expiration > currentTime;;
    if (unexpiredKeyExist) {
        return this.cache.get(key).value
    } else return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const currentTime = Date.now();
    let count = 0
    for (let [key, { expiration }] of this.cache) {
        if (expiration > currentTime) {
            count++
        }
    }
    return count
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
class EventEmitter {
    constructor() {
        this.table = {}
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.table[eventName]) {
            this.table[eventName] = [callback]
        } else {
            this.table[eventName].push(callback)
        }

        return {
            unsubscribe: () => {
                const index = this.table[eventName].indexOf(callback);
                if (index > -1) {
                    this.table[eventName].splice(index, 1);
                }
                return undefined
            }
        }
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.table[eventName]) {
            return []
        }
        else {
            return this.table[eventName].reduce((res, cb) => {
                res.push(cb(...args));
                return res
            }, [])
        }
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
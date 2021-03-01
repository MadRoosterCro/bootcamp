// 
/**
 * !!! IMPORTANT !!!
 * 
 * USE "for" loop to recreate all JS pre-built functions
 */

/**
 * Exercise #1
 *
 * create a function forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */
const forEach = (array, callback) => {
    for (let i=0; i<array.length; i++) {
        callback(array[i], i)
    }
}
/**
 * Exercise #2
 *
 * create a function map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
const map = (array, callback) => {
    let newArray = [];
    for (let j=0; j<array.length; j++) {
        let result = callback (array[j], j);
        newArray.push(result);
    }
    return newArray;
}
/**
 * Exercise #3
 *
 * create a function filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
const filter = (array, callback) => {
    let newArray = [];
    for (let k=0; k<array.length; k++) {
        let result = callback (array[k], k);
        if(result === true) {
            newArray.push(array[k]);
        }
    }
    return newArray;
}
/**
 * Exercise #4
 *
 * create a function find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
const find = (array, callback) => {
    const newArray = [];
    for (let l=0; l<array.length; l++) {
        let result = callback(array[l], l);
        if (result === true) {
            newArray.push(array[l]);
            break;
        }
    }
    return newArray[0];
}

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
const findIndex = (array, callback) => {
    let newArray = [];
    for (let m=0; m<array.length; m++) {
        let result = callback(array[m], m);
        if (result === true) {
            newArray.push(m);
            break;
        }
    }
    return newArray[0];
}
/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
const every = (array, callback) => {
    for (let n=0; n<array.length; n++) {
        let result = callback(array[n], n);
        if(!result) {
            return false;
        }
    }
    return true;
}

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
const some = (array, callback) => {
    for (let o=0; o<array.length; o++) {
        let result = callback(array[o], o);
        if (result) {
            return true;
        }
    }
}
/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */
const reduce = (array, callback, initialValue = 0) => {
   let value = initialValue;
    for (p=0; p<array.length; p++) {
        value = callback(value, array[p], p);
    }
    return value;
}
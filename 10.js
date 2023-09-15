/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false 
    let ans 
    return function(...args){
        if(called)
            return undefined
        else 
            called = true
            ans = fn(...args)
            return ans 


    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

Array.prototype.map = function(fn, context) {
    if (!Array.isArray(this)) {
        throw new TypeError(this + 'is not a Array');
    }

    var O = Object(this),
        len = O.length >>> 0,
        k = 0,
        res = new Array(len);

    fn = !fn || typeof fn !== 'function' ? function() {} : fn;

    while (k < len) {
        if (O.hasOwnProperty(k)) {
            res[k] = fn.call(context, O[k], k, O);  
        }
        k++;
    }

    res.length = k;

    return res;
}
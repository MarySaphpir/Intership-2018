function infinitySum(x) {
    let currentSum = x
    function newSum(y) {
        currentSum += y
        return newSum
    }
    newSum.toString = function () {
        return currentSum
    }
    return newSum
}

alert(infinitySum(1)(2)(3))


function sum(x) {
    let currentSum = x
    function newSum(y) {
        if (y)
            currentSum += y
        return newSum
    }
    newSum.toString = function () {
        return currentSum
    }
    return newSum
}
alert(sum(3)(5)())

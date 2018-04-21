/************
 Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */

function bouncer(arr) {
    var arrayToReturn = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            arrayToReturn.push(arr[i]);
        }
    }
    return arrayToReturn;
}
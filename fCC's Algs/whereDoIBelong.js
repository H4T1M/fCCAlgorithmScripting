/****************
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
 */
function getIndexToIns(arr, num) {
    var newArray = arr.sort(function (a, b) {
        return a - b;
    });
    if (num > newArray[newArray.length - 1]) {
        return newArray.length;
    } else if (num <= newArray[0]) {
        return 0;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (num > newArray[i] && num <= newArray[i + 1]) {
                return i + 1;
            }
        }
    }
}
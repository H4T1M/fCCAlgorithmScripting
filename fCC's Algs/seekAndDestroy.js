/********************
 You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 */
function destroyer(arr) {
    var argumentsUsed = [];
    for (var i = 1; i < arguments.length; i++) {
        argumentsUsed.push(arguments[i]);
    }
    return arr.filter(function (currentVal) {
        for (var i = 0; i < argumentsUsed.length; i++) {
            if (argumentsUsed[i] === currentVal) {
                return false;
            }
        }
        return true;
    });
}
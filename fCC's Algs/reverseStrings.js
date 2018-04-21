/**************
 Reverse the provided string.
 */
function reverseString(str) {
    var string = "";
    for (var i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
}
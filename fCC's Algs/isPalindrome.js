/****************
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 */
function reverseString(str) {
    var string = "";
    for (var i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
}
function palindrome(str) {
    var newStr = str.replace(/\W|_/g, "").toLowerCase();
    return reverseString(newStr) == newStr;
}

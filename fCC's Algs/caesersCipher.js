/****************
 One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 */
function rot13(str) { // LBH QVQ VG!
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (!str[i].match(/\w/g)) {
            newString += str[i];
        } else if (str[i] == "_") {
            newString += str[i];
        } else if (str.charCodeAt(i) >= 78) {
            newString += String.fromCharCode(str.charCodeAt(i) - 13);
        } else if (str.charCodeAt(i) < 78) {
            newString += String.fromCharCode(str.charCodeAt(i) + 13);
        }
    }
    return newString;
}
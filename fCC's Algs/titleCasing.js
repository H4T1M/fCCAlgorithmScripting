/*************
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 */
function titleCase(str) {
    var wordArray = str.split(' ');
    var strToReturn = "";
    for (var i = 0; i < wordArray.length; i++) {
        var newWord = wordArray[i].toLowerCase();
        if (i === wordArray.length - 1) {
            strToReturn += newWord[0].toUpperCase() + newWord.substr(1);
            return strToReturn;
        }
        strToReturn += newWord[0].toUpperCase() + newWord.substr(1) + " ";
    }
}
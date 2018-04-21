/***************
 Return the length of the longest word in the provided sentence.
 */
function findLongestWord(str) {
    var wordArray = str.split(' ');
    var max = 0;
    for (var i = 0; i < wordArray.length; i++) {
        var currentWordLength = wordArray[i].length;
        if (currentWordLength > max) {
            max = currentWordLength;
        }
    }
    return max;
}
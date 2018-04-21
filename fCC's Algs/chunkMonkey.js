/*************
 Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
    var arrayToReturn = [];
    if (size < arr.length) {
        for (var i = 0; i < arr.length; i += size) {
            arrayToReturn.push(arr.slice(i, i + size));
        }
        return arrayToReturn;
    }
    return arr;

}
/***************
 Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
 */
function largestOfFour(arr) {
    var returnedArray = [];
    for (var i = 0; i < arr.length; i++) {
        var j = 0;
        var max = arr[i][j];
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        returnedArray.push(max);
    }
    return returnedArray;
}
module.exports = function towelSort (matrix) {
    if(!matrix)
      return [];
    return matrix.map((arr, index) => {
        return index % 2 !== 0 ? arr.reverse() : arr;    
    }).flat();
}

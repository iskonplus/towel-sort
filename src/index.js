module.exports = function towelSort(matrix) {
  
  const newArr = []

  if (matrix === undefined) {
      return newArr
  }

  for (let i = 0; i < matrix.length; i++) {
      for (let ind = 0; ind < matrix[i].length; ind++) {

        console.log([i]);
        console.log([ind]);
        console.log(matrix[i][(matrix[i].length-[ind]-1)]);

        newArr.push(([i]) % 2 !== 0 ?
          matrix[i][(matrix[i].length - ind - 1)] :
          matrix[i][ind]
        );
          
      }

  }

  return newArr

  }


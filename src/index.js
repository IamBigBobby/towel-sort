
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = '';
  if(matrix === undefined || matrix.length === 0){
    return result = [];
  }
  else{
    const reverseMatrix = [];
    matrix.forEach(function(item, index, array) {
        if (index === 0){
          reverseMatrix.push(item)
        }
        else if (index !== 2){
          reverseMatrix.push(item.reverse())
        }
        else{
          reverseMatrix.push(item)
        }
    })
    const reverseMatrixString = reverseMatrix.join();
    const arrReverseMatrixString = reverseMatrixString.split(',')
    const arrFinal = [];
      for(let element of arrReverseMatrixString){
        if (element !== ','){
          arrFinal.push(Number(element))
        }
      }
    result = arrFinal;
    return result;
  }
}
console.log(module.exports())

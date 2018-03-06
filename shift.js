function shift(array, direction, number){
  for(i = 0; i < number; i++){
      if(direction == 'right') array.unshift(array.pop());
      if(direction == 'left') array.push(array.shift());
  }
  return array;
}

var testarray = shift(['john', 'jane', 'sarah', 'alex'], 'left', 2);
console.log(testarray);
var testarray2 = shift([1, 2, 3, 4 ,5], 'right', 3);
console.log(testarray2);

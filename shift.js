function shift(array, direction, number){
  for(i = 0; i < number; i++){
      if(direction == 'right') array.unshift(array.pop());
      if(direction == 'left') array.push(array.shift());
  }
  return array;
}

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));

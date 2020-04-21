/*4. Doubler
What is the Big O of the following algorithm? Explain your answer */

//Answer
/*O(n) lienar time complexity. */

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

console.log(doubleArrayValues([1, 2, 3, 4, 5]));

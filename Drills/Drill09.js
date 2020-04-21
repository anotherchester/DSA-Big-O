/*9. Random element
What is the Big O of the following algorithm? Explain your answer*/

//Answer
//O(n) Liner time complexity. 

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(findRandomElement([1, 3, 5, 7, 4, 2]));

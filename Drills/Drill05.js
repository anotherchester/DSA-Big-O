/*5. Naive search
What is the Big O of the following algorithm? Explain your answer*/

//answer:
/*O(n) Linear time complexity. ecause the search gets longer the bigger the input is*/

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

console.log(naiveSearch([1, 2, 3, 4, 5], 5));

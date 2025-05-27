/** Gets random integer: [1..6]. */

function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

/** Get n rolls => [num, ...]. */

function getRolls(n) {
  return Array.from({ length: n }, () => d6());
}



//Example: Array.from({ length: 3 }) creates [undefined, undefined, undefined] of length 3.

//Second argument to Array.from: () => d6()    ---> //This is a mapping function applied to each element of the array.
//For every element (which is just undefined), it calls d6() and replaces it with a random number from 1 to 6.

/** Get sum of nums. */

function sum(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0);
}

export { d6, getRolls, sum };

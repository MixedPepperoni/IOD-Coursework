//Returns the sum of two numbers.
function sum(a, b) {
  return a + b;
}
//test
if (sum(5, 1) != 6) { error }
//return the code
console.log(sum(5, 1));

//returns the subraction of two numbbers.
function sub(a, b) {
  return a - b;
}
if (sub(5, 1) != 4) { error }
//return the code
console.log(sub(5, 1));

//outputs the multipication of two numbers. EX: a*b=answer/2*2=4.
function mult(a, b) {
  return a * b;
}
//test
if (mult(5, 1) != 5) { error }
//return the code
console.log(mult(5, 1));

//returns the division of the two nuumbers. EX; a/b=answer or 9/3=3.
function divd(a, b) {
  return a / b;
}
console.log(divd(5, 2));

//outputs a phrase in the terminal. "Hello Brendan" should be the output.
let test1 = "Hello";
let test2 = "Brendan";
console.log(test1.concat(" ", test2));

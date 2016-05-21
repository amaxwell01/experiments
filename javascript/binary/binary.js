/*
* Create a program which can take in 3 integers
* See if the outcome is odd or even.
* Goal is to use binary and && / ||
* This is part of the test that I got from Joe Bently when joining GoPro
* You can & the number and 1, if you get 0 then the number is even, 1 means the number is odd.
*
>>> 2 & 1
0
>>> 3 & 1
1
*/

const myNumbers = [1, 2, 7];

console.log(
  !!(myNumbers[0] & 1) ||
  !!(console.log(myNumbers[1] & 1)) ||
  !!(console.log(myNumbers[2] & 1))
);

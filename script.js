/*
There are three ways to write a function in JavaScript:

function declarations
function expressions
arrow functions
*/

//  Function declaration
function squareDeclaration(number1D, number2D) {
  const squared1D = number1D*number1D;
  const squared2D=number2D*number2D;
  const totalD=squared1D+squared2D;
  const totalsumD=totalD*totalD;
    return (totalsumD);
};


console.log(squareDeclaration(5,5)); // 2500

//function expression
const squareExpression = function (number1E, number2E) {
    const squared1E = number1E*number1E;
  const squared2E=number2E*number2E;
  const totalE=squared1E+squared2E;
  const totalsumE=totalE*totalE;
    return (totalsumE);
};
console.log(squareExpression(5,5)); // 2500

//arrow function
const squareArrow = (number1A, number2A) => {
     const squared1A = number1A*number1A;
  const squared2A=number2A*number2A;
  const totalA=squared1A+squared2A;
  const totalsumA=totalA*totalA;
    return (totalsumA);
};
console.log(squareArrow(5,5)); // 2500

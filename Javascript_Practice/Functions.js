// Question - 1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Example usage:
const userName = 'Alice';
greet(userName); // Output: Hello, Alice!


// Question - 2:  Write a function that takes two parameters, adds them together, and returns the result.

function Add (Num1,Num2){
    const FinalAnsewer = Num1 + Num2
    return FinalAnsewer
}

const Num3= 13
const Num4 = 10

console.log(Add(Num3,Num4))

// Question - 5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

// Example usage:
const baseNumber = 2;
const exponentNumber = 3;
const result = calculatePower(baseNumber, exponentNumber);
console.log(`The result of ${baseNumber} raised to the power of ${exponentNumber} is: ${result}`);

// Question - 6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

// Question - 7:  Write a function that has a local variable and another function that has a global variable.Demonstrate the difference between global and local scope.

// Question - 8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

// Question - 9:  Write a recursive function to calculate the factorial of a given number.

// Question - 10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).

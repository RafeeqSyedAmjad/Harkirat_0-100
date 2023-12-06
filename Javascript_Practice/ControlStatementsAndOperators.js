// Control Statement Practice Problems

// Question - 1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

let x = 10;
if (x>10) {
 console.log("x is greater than 10")
}

else {
 console.log("x is not greater than 10")
}

// Question - 2 :   WAP that check that if an user is illegible for drive a car or not(take user age as input).

let User = 12;

if(User >= 18){
    console.log("User can drive a car")
}
else{
    console.log("User can't drive a car")
}

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

let subjectScore = 83;

if(subjectScore>=90 && subjectScore<=100){
    console.log("GradeA")
}
else if (subjectScore >= 80 && subjectScore<=90) {
    console.log("GradeB")
}
else if (subjectScore>=70 && subjectScore <=80){
    console.log("GradeC")
}
else if (subjectScore>=60 && subjectScore<=70){
    console.log("GradeD")
}

else {
    console.log("Grade f")
}


// Question - 4:   WAP to check  time of day based on the current hour.For example, if it's before noon, log "Good morning.". (take time as an input).

const now = new Date();
const curentHour = now.getHours();
console.log(curentHour)

if (curentHour >= 5 && curentHour < 12){
    console.log("Good morning")
}
else if (curentHour >= 12 && curentHour <= 18){
    console.log("Good Afternoon")
}
else if (curentHour >= 12 && curentHour < 22){
    console.log("Good Evening")
}
else  {
    console.log("Good Night")
}

// Question - 5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

let number = 3

switch (number) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
    default:
        break;
}

// Question - 6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

let month = 3

switch (month) {
    case 1:
        console.log("Jnauary")
        break;
    case 2:
        console.log("feburary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
    default:
        break;
}

// Question - 7:   Implement a switch case statement to determine the type of fruit based on a variable.Handle at least three different fruit options.

const fruit = "apple"; // Replace this with the actual fruit variable

switch (fruit) {
    case "apple":
        console.log("This is an apple.");
        break;
    case "banana":
        console.log("This is a banana.");
        break;
    case "orange":
        console.log("This is an orange.");
        break;
    default:
        console.log("Unknown fruit type.");
        break;
}

// Question - 8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

const CurentTemp = 28

if (CurentTemp >= 0 && CurentTemp <= 15) {
    console.log("Low temprature Range")
}

else if (CurentTemp >= 15 && CurentTemp <= 30){
    console.log("Medium temprature Range")
}
 else{
    console.log("less temprature Range")
 }

 // Operator Assignment

// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

function performArithmeticOperations(a, b) {
    const addition = a + b;
    const subtraction = a - b;
    const multiplication = a * b;
    const division = a / b;

    console.log(`Addition: ${addition}`);
    console.log(`Subtraction: ${subtraction}`);
    console.log(`Multiplication: ${multiplication}`);
    console.log(`Division: ${division}`);
}

// Example usage:
const number1 = 10;
const number2 = 5;

performArithmeticOperations(10, 30);

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let j = 10; // Assignment operator (=) assigns the value 10 to variable x
console.log("Initial value of x:", j);

j += 5; // Add and assign operator (+=) adds 5 to x and assigns the result back to x
console.log("After j += 5:", j);

j -= 3; // Subtract and assign operator (-=) subtracts 3 from x and assigns the result back to x
console.log("After x -= 3:", j);

j *= 2; // Multiply and assign operator (*=) multiplies x by 2 and assigns the result back to x
console.log("After j *= 2:", j);

j /= 4; // Divide and assign operator (/=) divides x by 4 and assigns the result back to x
console.log("After j /= 4:", j);



// Assignment operator are += -= *= /=

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

function compareNumbers(num1, num2) {
    if (num1 === num2) {
        console.log("The numbers are equal.");
    } else if (num1 > num2) {
        console.log("The first number is greater than the second number.");
    } else {
        console.log("The first number is lesser than the second number.");
    }
}

// Example usage:
const num1 = 10;
const num2 = 5;

compareNumbers(num1, num2);

// // Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

// logical oeprators && || !

function evaluatecondition(a,b,c) {
    if (a>b && c !== 0){
        console.log("Condition met: a is greater than b and c is not equal to zero");
    }
    else if (a==b || c<0){
        console.log("Condition met: a is equal to b or c is greater than zero")
    }
    else if (!(a < 0)){
        console.log("condition met: a is not less than zero")
    }
    else {
        console.log("condition not met")
    }

}

// Example usage:
const numberA = 10;
const numberB = 5;
const numberC = -3;

evaluatecondition(numberA, numberB, numberC);

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

// bitwise operations (AND,OR,XOR,NOT)

function performBitwiseOperations(a,b) {
    console.log(`Bitwise AND: ${a & b}`);
    console.log(`Bitwise OR: ${a | b}`);
    console.log(`Bitwise XOR: ${a ^ b}`);
    console.log(`Bitwise NOT for a: ${~a}`);
    console.log(`Bitwise NOT for b: ${~b}`);
    
}

// Example usage:
const number5 = 5;
const number6 = 3;

performBitwiseOperations(number5, number6);

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

function findLargestNumber(a,b){
    const LargestNumber = a > b ? a : b;
    console.log(`The larger number is :${LargestNumber}`);
}

//Example Usage
const number7 = 11;
const number8 = 12;

findLargestNumber(number7, number8);

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

function demonstrateTypeOperators(value) {
    console.log(`Value: ${value}`);
    console.log(`Type of value: ${typeof value}`);
    console.log(`Is it a number? ${typeof value === 'number'}`);
    console.log(`Is it a string? ${typeof value === 'string'}`);
    console.log(`Is it a boolean? ${typeof value === 'boolean'}`);
    console.log(`Is it undefined? ${typeof value === 'undefined'}`);
    console.log(`Is it null? ${value === null}`);
    console.log(`Is it an object? ${typeof value === 'object' && value !== null}`);
    console.log(`Is it an array? ${Array.isArray(value)}`);
    console.log(`Is it a function? ${typeof value === 'function'}`);
}

// Example usage:
const numberValue = 10;
const stringValue = 'Hello';
const booleanValue = true;
const undefinedValue = undefined;
const nullValue = null;
const objectValue = { key: 'value' };
const arrayValue = [1, 2, 3];
const functionValue = function () { };

demonstrateTypeOperators(numberValue);
demonstrateTypeOperators(stringValue);
demonstrateTypeOperators(booleanValue);
demonstrateTypeOperators(undefinedValue);
demonstrateTypeOperators(nullValue);
demonstrateTypeOperators(objectValue);
demonstrateTypeOperators(arrayValue);
demonstrateTypeOperators(functionValue);

// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

function concatenateStrings(str1, str2) {
    const concatenatedString = str1 + ' ' + str2;
    console.log(`Concatenated String: ${concatenatedString}`);
}

// Example usage:
const string1 = 'Hello';
const string2 = 'World';

concatenateStrings(string1, string2);

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

const obj6 = {
    Name:'Rafeeq',
    age:22
}

console.log('Name'in obj6)
console.log('height' in obj6)
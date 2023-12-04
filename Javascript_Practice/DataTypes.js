/*
    Javascript has two Data types
    1.Primitive DataTypes
    2.Non-Primitive DataTypes (Refrence DataTypes)

    Primitive DataTypes
    1. Primitive Data Types are immutable cannot be changed
    2. They are stored directly in memory
    Ex - Strings, boolean , undefined , null etc

    Non-Primitive DataTypes 
    1.Are Mutable
    2.they are stored as a refrence to a location in a memory
    Ex - Functions,Array,Objects 
*/

// Question - 1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

function convertDistance(kilometers){
    // Convert Kilometer to meters and centimeters
    const meters = kilometers * 1000 // 1 kilometer = 1000 meters
    const centimeters = kilometers * 100000 // 1 Kilometer = 100000 centimeters

    // Return an object containing the results
    return {
        meters: meters,
        centimeters: centimeters
    };
}

// Example Usage
const distanceKilometers = 10
const result = convertDistance(distanceKilometers);

console.log(`the Result in meters:${result.meters}`)
console.log(`the Result in Kilometers:${result.centimeters}`)

//Question-2:    WAP to input radius of a circle and log the area of circle.

function calculateAreaOfCircle(radius){
    const area = Math.PI * radius * radius; // Formula for circle area:
    return area;
}

// Example Usage
const radius = 5;
const AreaoftheCircle = calculateAreaOfCircle(radius)

console.log(`For the Given Radius the area of the circle:${AreaoftheCircle.toFixed(2)}`)

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

function Add (Num1,Num2){
    const Add = Num1 + Num2;
    return Add;
}

//Example Usage
const Number1 = 10;
const Number2 = 20;
const addedNumber = Add(Number1, Number2);
console.log(`The final answer after adding two number:${addedNumber}`)


// Question - 3: Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

function calculateSimpleInterest(principal,rate,time){
    const interest = (principal * rate * time) / 100;
    return interest;
}

// Example usage:
const principalAmount = 1000; // Replace this with your principal amount
const interestRate = 5; // Replace this with your interest rate
const numberOfYears = 2; // Replace this with the number of years

const simpleInterest = calculateSimpleInterest(principalAmount, interestRate, numberOfYears);

console.log(`the Final Simple Interest is : ${ simpleInterest }`)






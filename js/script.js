let weight = 70; // weight in kilograms
let height = 1.75; // height in meters
let name = "John Doe";
let isMetric = true;
const POUNDS_TO_KILOGRAMS = 0.453592;

let bmi;
if (isMetric) {
    bmi = weight / (height * height);
} else {
    const heightInInches = height * 39.3701;
    const weightInPounds = weight / POUNDS_TO_KILOGRAMS;
    bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
}
console.log(`BMI: ${bmi}`);

bmi += 0.5; // Increment BMI by 0.5
console.log(`Incremented BMI: ${bmi}`);

bmi -= 0.5; // Decrement BMI by 0.5
console.log(`Decremented BMI: ${bmi}`);

bmi *= 1.1; // Increase BMI by 10%
console.log(`Increased BMI by 10%: ${bmi}`);

bmi /= 1.1; // Decrease BMI by 10% (reverting back)
console.log(`Decreased BMI by 10%: ${bmi}`);

let weightStr = "70";
let heightStr = "1.75";
let weightNum = +weightStr; // Convert string to number
let heightNum = +heightStr; // Convert string to number
console.log(`Converted weight: ${weightNum}, Converted height: ${heightNum}`);

const UNDERWEIGHT = 18.5;
const NORMAL = 24.9;
const OVERWEIGHT = 29.9;

if (bmi < UNDERWEIGHT) {
    console.log("Underweight");
} else if (bmi <= NORMAL) {
    console.log("Normal weight");
} else if (bmi <= OVERWEIGHT) {
    console.log("Overweight");
} else {
    console.log("Obese");
}

if (bmi >= UNDERWEIGHT && bmi <= NORMAL) {
    console.log("You are within the normal weight range.");
} else {
    console.log("You are outside the normal weight range.");
}

let number = 42;
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

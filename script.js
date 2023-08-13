///////  LET, VAR  AND CONST ////////
//////  Answer # 1  /////////////
const pi = 3.14159;
console.log(pi); //Output: 3.14159

// Trying to reassign will result in an error
// pi = 3.14; // This will throw an error
//'pi' is declared as a constant variable with the value of 3.14159. If you try to reassign a new value to 'pi', you will get an error because it's declared as a constant and its value cannot be changed.

/////////  Answer # 2  ///////////////

function sumOfSquares(numbers) {
    let totalSum = 0; // Declared using let in the function scope
  
    for (const num of numbers) {
      const square = num * num; // Declared using const in the loop scope
      totalSum += square;
    }
  
    if (numbers.length > 0) {
      var bonus = 100; // Declared using var in the block scope
      totalSum += bonus; // You can access bonus here due to var's function scope
    }
  
    return totalSum;
  }
  
  const numbersArray = [3, 5, 7];
  const result = sumOfSquares(numbersArray);
  console.log(result); // Output: 119 (3*3 + 5*5 + 7*7 + 100) = 183
  
//////////////////////////////
/////////  Answer # 3  //////

const arrayOfStrings = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < arrayOfStrings.length; i++) {
  const firstLetter = arrayOfStrings[i][0]; // Declare a block-scoped variable using const
  console.log(firstLetter); // Output: a, b, c, d 
}

/////////////////////////////
//////////  Answer # 4  ////

function generateAsterisks(n) {
  const asterisk = "*"; // Declare a constant string with one asterisk
  return asterisk.repeat(n);
}

const numberOfAsterisks = 13;
const resultofAsterisks = generateAsterisks(numberOfAsterisks);
console.log(resultofAsterisks); // Output: *************

/////////////////////////////
//////////  Answer # 5  ////

function generateGreeting(person) {
  var message; // Declare a function-scoped variable using var

  if (person.age < 18) {
    message = `Hello, ${person.name}! You're young.`;
  } else {
    message = `Hello, ${person.name}! You're wise.`;
  }

  return message;
}

const personObject = {
  name: "Ali",
  age: 30,
};

const greeting = generateGreeting(personObject);
console.log(greeting); // Output: Hello, Ali! You're wise.

////////////////////////////
//////  Answer # 6  ////////

function findMaxValue(numbers) {
  let maxValue;

  if (numbers.length > 0) {
    maxValue = Math.max(...numbers);
  }

  return maxValue;
}

const numberOfArray = [10, 5, 8, 28, 31];
const max = findMaxValue(numberOfArray);
console.log(max); // Output: 31











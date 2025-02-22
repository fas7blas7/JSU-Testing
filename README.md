SumNumberTests.js, CheckForSymmetryTests.js & RgbToHexTests.js

This project contains unit tests for three functions:

    sum() from the 01_SumNumbers.js module – Calculates the sum of array elements.
    isSymmetric() from the 02_CheckForSymmetry.js module – Checks if an array is symmetric.
    rgbToHexColor() from the 03_RgbToHex.js module – Converts RGB values to hexadecimal color codes.

All tests are written using JUnit with the Chai assertion library.
📁 Project Structure

├── 01_SumNumbers.js            // Module containing the sum function
├── 02_CheckForSymmetry.js      // Module containing the isSymmetric function
├── 03_RgbToHex.js              // Module containing the rgbToHexColor function
└── tests
    ├── SumNumberTests.js       // Test cases for the sum function
    ├── CheckForSymmetryTests.js // Test cases for the isSymmetric function
    └── RgbToHexTests.js        // Test cases for the rgbToHexColor function

🚀 Getting Started

    Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install dependencies: Make sure you have Node.js installed. Then, run:

npm install

Run the tests:

    npm test

🧪 Test Cases
SumNumberTests.js

Tests for the sum() function cover the following scenarios:

    ✅ Returns the sum of an array of numbers.
    ✅ Returns the sum of an array containing numeric strings.
    ✅ Returns 0 when passed an empty array.
    ✅ Returns the correct sum for an array of negative numbers.
    ✅ Returns the correct sum for mixed input types (numbers and numeric strings).
    ✅ Returns NaN when non-numeric characters are included in the array.

CheckForSymmetryTests.js

Tests for the isSymmetric() function cover the following scenarios:

    ✅ Returns true for symmetric arrays.
    ✅ Returns false for non-symmetric arrays.
    ✅ Returns true for an empty array.
    ✅ Returns false for non-array inputs.
    ✅ Returns false when array elements are of different types.
    ✅ Returns true for single-element arrays.

RgbToHexTests.js

Tests for the rgbToHexColor() function cover the following scenarios:

    ✅ Returns the correct hex code for valid RGB inputs.
    ✅ Returns #000000 for the lower boundary (0, 0, 0).
    ✅ Returns #FFFFFF for the upper boundary (255, 255, 255).
    ✅ Returns undefined for negative numbers.
    ✅ Returns undefined for values greater than 255.
    ✅ Returns undefined for decimal values in any RGB component.
    ✅ Returns undefined for string inputs.

🔧 Example Usage
Sum Function:

import {sum} from './01_SumNumbers.js';

let result = sum([1, 2, 3]);
console.log(result);  // Output: 6

Symmetry Check Function:

import {isSymmetric} from './02_CheckForSymmetry.js';

let result = isSymmetric([1, 2, 3, 2, 1]);
console.log(result);  // Output: true

RGB to Hex Function:

import {rgbToHexColor} from './03_RgbToHex.js';

let hexColor = rgbToHexColor(255, 142, 144);
console.log(hexColor);  // Output: #FF8E90

📚 Dependencies

    Mocha - Test framework
    Chai - Assertion library

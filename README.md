SumNumberTests.js

This project tests the sum function from the 01_SumNumbers.js module using JUnit with the Chai assertion library. The sum function is designed to calculate the sum of elements in an array, supporting various input types.
📁 Project Structure

├── 01_SumNumbers.js   // The module containing the sum function
└── tests
    └── SumNumberTests.js   // Test cases for the sum function

🚀 Getting Started

    Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install dependencies: Make sure you have Node.js installed. Then, run:

npm install

Run the tests:

    npm test

🧪 Test Cases

The tests cover the following scenarios:

    ✅ Returns the sum of an array of numbers.
    ✅ Returns the sum of an array containing numeric strings.
    ✅ Returns 0 when passed an empty array.
    ✅ Returns the correct sum for an array of negative numbers.
    ✅ Returns the correct sum for mixed input types (numbers and numeric strings).
    ✅ Returns NaN when non-numeric characters are included in the array.

🔧 Example

import {sum} from './01_SumNumbers.js';

let result = sum([1, 2, 3]);
console.log(result);  // Output: 6

📚 Dependencies

    Mocha - Test framework
    Chai - Assertion library

## String Calculator

This project implements a simple String Calculator that takes a string of comma-separated numbers and returns their sum. It also supports various features like custom delimiters, handling new lines, and error handling for negative numbers.

## Features

1. **Handles Empty Strings**: Returns `0` for an empty string.
2. **Supports Single and Multiple Numbers**: Can sum one or two numbers separated by commas.
3. **Custom Delimiters**: Allows for custom delimiters specified in the format `//[delimiter]\n[numbers...]`.
   - Delimiters can be of any length with the following format: `//[delimiter]\n`. For example, `//[***]\n1***2***3` should return `6`.
4. **Multiple Delimiters**: Supports multiple delimiters specified like this: `//[delim1][delim2]\n`. For example, `//[*][%]\n1*2%3` should return `6`.
5. **New Line Support**: Supports new lines as delimiters.
6. **Error Handling**: Throws an error for negative numbers, displaying all negative numbers found.
7. **Ignores Large Numbers**: Ignores any numbers greater than `1000`.

## Installation

1. **Clone the Repository & Setup the code**:
   ```bash
   git clone https://github.com/yourusername/string-calculator.git
   cd string-calculator
   npm install

2. **Run the command to test the test cases**
   ```bash
   npm test
// test/calculator.test.js
const assert = require('assert');
const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', function() {
  let calculator;

  beforeEach(function() {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', function() {
    assert.strictEqual(calculator.add(''), 0);
  });

  it('should return the number itself if the input is one number', function() {
    assert.strictEqual(calculator.add('1'), 1);
  });

  it('should return the sum of two numbers', function() {
    assert.strictEqual(calculator.add('1,2'), 3);
  });

  it('should handle unknown amount of numbers', function() {
    assert.strictEqual(calculator.add('1,2,3,4,5'), 15);
  });

  it('should handle newlines between numbers', function() {
    assert.strictEqual(calculator.add('1\n2,3'), 6);
  });

  it('should support custom delimiters', function() {
    assert.strictEqual(calculator.add('//;\n1;2;3'), 6);
  });

  it('should throw an exception for negative numbers', function() {
    assert.throws(() => calculator.add('1,-2,3'), /negatives not allowed: -2/);
  });

  it('should throw an exception for multiple negative numbers', function() {
    assert.throws(() => calculator.add('1,-2,-3,4'), /negatives not allowed: -2, -3/);
  });

  it('should ignore numbers greater than 1000', function() {
    assert.strictEqual(calculator.add('2,1001'), 2);
  });

  it('should support delimiters of any length', function() {
    assert.strictEqual(calculator.add('//[***]\n1***2***3'), 6);
  });

  it('should support multiple delimiters', function() {
    assert.strictEqual(calculator.add('//[*][%]\n1*2%3'), 6);
  });

  it('should support multiple delimiters with lengths longer than one char', function() {
    assert.strictEqual(calculator.add('//[***][%%%]\n1***2%%%3'), 6);
  });
});

class StringCalculator {
    add(numbers) {
      // Test case: should return 0 for an empty string
      if (!numbers) return 0;
  
      // Default delimiters: comma or newline
      let delimiter = /,|\n/;  
  
      // Handle custom delimiters
      // Test case: should support custom delimiters (e.g., //[*][%]\n1*2%3)
      if (numbers.startsWith('//')) {
        const delimiterSection = numbers.match(/^\/\/(.*?)\n/);
        if (delimiterSection) {
          const delimiterString = delimiterSection[1];
          // Capture multiple delimiters in the form //[delimiter1][delimiter2]
          const delimiters = delimiterString.match(/\[(.*?)\]/g) || [];
          const singleDelimiters = delimiterString.match(/[^[]+/g) || [];
  
          // Combine all delimiters into a regex
          const allDelimiters = [...delimiters, ...singleDelimiters]
            .map(d => d.replace(/\[|\]/g, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('|');
  
          delimiter = new RegExp(allDelimiters, 'g'); // Create regex for all delimiters
          numbers = numbers.replace(delimiterSection[0], '');  // Remove the delimiter declaration
        }
      }
  
      // Split the numbers using the calculated delimiters
      // Test case: should handle numbers split by custom delimiters
      const numArray = numbers.split(delimiter).map(num => {
        const parsedNum = Number(num);
        return isNaN(parsedNum) ? 0 : parsedNum; // Convert to number, treating invalid as 0
      });
  
      // Handle negative numbers
      // Test case: should throw an error for negative numbers
      const negatives = numArray.filter(n => n < 0);
      if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
      }
  
      // Ignore numbers greater than 1000
      // Test case: should ignore numbers greater than 1000
      return numArray.reduce((sum, num) => sum + (num > 1000 ? 0 : num), 0);
    }
  }
  
  module.exports = StringCalculator;
  
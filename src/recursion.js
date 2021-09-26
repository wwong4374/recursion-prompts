/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // Negative Case
  if (n < 0) {
    return null;
  }
  // Base Case 0
  if (n === 0) {
    return 1;
  }
  // Base Case 1
  if (n === 1) {
    return 1;
  }
  // Recursive Case
  if (n > 1) {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // Base Case 0
  if (array.length === 0) {
    return 0;
  }
  // Base Case 1
  if (array.length === 1) {
    return array[0];
  }
  // Recursive Case
  return array[0] + sum(array.slice(1, array.length));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // Base Case 0
  if (array.length === 0) {
    return 0;
  }

  // Recursive Case
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    // If current element is an array
    if (Array.isArray(array[i])) {
      // arraySum(currentElement)
      sum += arraySum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);

  // Base Case 0
  if (n === 0) {
    return true;
  }
  // Base Case 1
  if (n === 1) {
    return false;
  }
  // Recursive Case
  while (n > 1) {
    n = n - 2;
    return isEven(n);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Check if n < 0
  var isNegative = false;
  if (n < 0) {
    isNegative = true;
    n = Math.abs(n);
  }

  // Base Case
  if (n === 0 || n === 1) {
    return 0;
  }
  // Recursive Case
  var sum = 0;
  sum += n - 1;
  sum += sumBelow(n - 1);

  if (isNegative) {
    sum = -sum;
  }

  return sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// range(2,4); // [3]
var range = function(x, y) {
  var numbers = [];
  // Base Case
  if (Math.abs(x - y) < 2) {
    return numbers;
  }
  // Recursive Case
  if (y > x) {
    numbers.push(x + 1);
    var innerNumbers = range(x + 1, y);
    if (innerNumbers.length > 0) {
      for (var i = 0; i < innerNumbers.length; i++) {
        numbers.push(innerNumbers[i]);
      }
    }
  } else if (y < x) {
    numbers.push(x - 1);
    var innerNumbers = range(x - 1, y);
    if (innerNumbers.length > 0) {
      for (var j = 0; j < innerNumbers.length; j++) {
        numbers.push(innerNumbers[j]);
      }
    }
  }
  return numbers;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Base Case 0
  if (exp === 0) {
    return 1;
  }
  // Base Case 1
  if (exp === 1) {
    return base;
  }
  // Recursive Case
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    exp = -exp;
    return 1 / (base * exponent(base, exp - 1));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // Base Case 0
  if (n === 0) {
    return false;
  }
  // Base Case 1, 2
  if (n === 1 || n === 2) {
    return true;
  }
  // Recursive Case
  if (n % 2 === 1) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // Base Case
  if (string.length === 0 || string.length === 1) {
    return string;
  }
  // Recursive Case
  var reversed = '';
  reversed += string[string.length - 1];
  reversed += reverse(string.slice(0, string.length - 1));
  return reversed;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  string = string.split(' ').join(' ');
  // Base Case 0 and 1
  if (string.length === 0 || string.length === 1) {
    return true;
  }
  // Base Case 2
  if (string.length === 2) {
    return string[0] === string[1];
  }
  // Recursive Case
  if (string.length % 2 === 0) {
    return (string[0] === string[string.length - 1]) && palindrome(string.slice(1, string.length))
  } else if (string.length % 2 === 1) {
    return (string[0] === string[string.length - 1]) && palindrome(string.slice(1, string.length - 1))
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (y === 1 || y === -1) {
    return 0;
  }

  if (x > 0 && y > 0) {
    if (x < y) {
      return x;
    } else {
      return modulo(x - y, y);
    }
  } else if (x > 0 && y < 0) {
    if (x < -y) {
      return x;
    } else {
      return modulo(x + y, y);
    }
  } else if (x < 0 && y > 0) {
    if (-x < y) {
      return x;
    } else {
      return modulo(x + y, y);
    }
  } else if (x < 0 && y < 0) {
    if (-x < -y) {
      return x;
    } else {
      return modulo(x - y, y);
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x === 1) {
    return y;
  }
  if (x === -1) {
    return -y;
  }
  if (y === 1) {
    return x;
  }
  if (y === -1) {
    return -x;
  }

  if (x > 0 && y > 0) {
    return x + multiply(x, y - 1);
  } else if (x > 0 && y < 0) {
    return -x + multiply(x, y + 1);
  } else if (x < 0 && y > 0) {
    return x + multiply(x, y - 1);
  } else if (x < 0 && y < 0) {
    return -x + multiply(x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// divide(17, 5) = 3
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (y === 1) {
    return x;
  }
  if (y === -1) {
    return -x;
  }

  if (x > 0 && y > 0) {
    if (x < y) {
      return 0;
    } else {
      return 1 + divide(x - y, y);
    }
  } else if (x > 0 && y < 0) {
    if (x < -y) {
      return 0;
    } else {
      return -1 + divide(x + y, y);
    }
  } else if (x < 0 && y > 0) {
    if (-x < y) {
      return 0;
    } else {
      return 1 + divide(x - y, y);
    }
  } else if (x < 0 && y < 0) {
    if (-x < -y) {
      return 0;
    } else {
      return 11 + divide(x + y, y);
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  // Base Case
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  if (x === y) {
    return x;
  }
  if (x < 0 || y < 0) {
    return null;
  }
  // Recursive Case
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // Base Case
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  // Base Case
  if (str1.length === 1 && str2.length === 1) {
    return str1[0] === str2[0];
  }
  // Recursive Case
  return (str1[0] === str2[0]) && compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// createArray('st') = [s, t];
var createArray = function(str) {
  // Base Case
  if (str.length === 0) {
    return [];
  }
  if (str.length === 1) {
    return [str[0]];
  }
  // Recursive Case
  var arr = [];
  arr.push(str[0]);
  // Create inner array and push chars to result
  var innerStr = str.slice(1, str.length);
  var innerArray = createArray(innerStr);
  for (var i = 0; i < innerArray.length; i++) {
    arr.push(innerArray[i]);
  }
  return arr;
};

// 17. Reverse the order of an array
// reverseArr([1,2,3]) = [3,2,1]
var reverseArr = function(array) {
  // Base Case
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  // Recursive Case
  var reversed = [];
  // Push last element
  reversed.push(array[array.length - 1]);
  // Pop last element and reverse remaining array
  var innerArr = array.slice(0, array.length - 1);
  var innerReversed = reverseArr(innerArr);
  for (var i = 0; i < innerReversed.length; i++) {
    reversed.push(innerReversed[i]);
  }
  return reversed;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,2) // [7,7]
var buildList = function(value, length) {
  // Base Case
  if (length === 0) {
    return [];
  }
  if (length === 1) {
    return [value];
  }
  // Recursive Case
  var array = [];
  array.push(value);
  var inner = buildList(value, length - 1);
  for (var i = 0; i < length - 1; i++) {
    array.push(inner[i]);
  }
  return array;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  // Base Case
  if (n === 1) {
    return ['1'];
  }
  // Recursive Case
  var result = [];
  var element = '';
  // Determine output element
  if (n % 3 === 0) {
    if (n % 5 === 0) {
      element = 'FizzBuzz';
    } else {
      element = 'Fizz'
    }
  } else if (n % 5 === 0) {
    element = 'Buzz';
  } else {
    element = n.toString();
  }

  result.unshift(element);
  var remaining = fizzBuzz(n - 1);
  for (var i = remaining.length - 1; i >= 0; i--) {
    result.unshift(remaining[i]);
  }
  return result;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // Base Case
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0] === value ? 1 : 0;
  }
  // Recursive Case
  return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1, array.length), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // Base Case
  if (array.length === 0) {
    return array;
  }
  if (array.length === 1) {
    return [callback(array[0])];
  }
  // Recursive Case
  var result = [];
  // First element
  var first = array.slice(0,1);
  var firstResult = callback(first[0]);
  result.push(firstResult);
  // Remaining elements
  var remaining = rMap(array.slice(1, array.length), callback);
  for (var i = 0; i < remaining.length; i++) {
    result.push(remaining[i]);
  }
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
/* var obj = {
  'e':{'x':'y'},
  't':{'r':{'e':'r'},
  'p':{'y':'r'}},
  'y':'e'
};
*/
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, target) {
  var count = 0;
  for (var key in obj) {
    if (key === target) {
      count++;
    }
    // Base Case - Value is not an object
      // Do nothing
    // Recursive Case - Value is an object
    if (typeof obj[key] === 'object') {
      count += countKeysInObj(obj[key], target);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
/* var obj = {
  'e':{'x':'y'},
  't':{'r':{'e':'r'},
  'p':{'y':'r'}},
  'y':'e'
};
*/
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj) {
    // Base Case - Value is not an object
    if (typeof obj[key] !== 'object') {
      if (obj[key] === value) {
        count++;
      }
    }
    // Recursive Case - Value is an object
    if (typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
/* var obj = {
  'e':{'x':'y'},
  't':{'r':{'e':'r'},
  'p':{'y':'r'}},
  'y':'e'
};
*/
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    // Base Case - Value is not an object
    if (typeof obj[key] !== 'object') {
      // If current key needs to be replaced
      if (key === oldKey) {
        // Create new property
        obj[newKey] = obj[key];
        // Delete old property
        delete obj[oldKey];
      }
    }
    // Recursive Case - Value is an object
    if (typeof obj[key] === 'object') {
      // Call replaceKeysInObj on nested object
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  // Base Case
  if (n < 1) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  // Recursive Case
  var result = [];
  var prior = fibonacci(n - 1);
  // Get current Fibonacci number
  var sum = prior[prior.length - 1] + prior[prior.length - 2];
  prior.push(sum);
  return prior;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // Base Case
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Recursive Case
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  // Base Case
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  // Recursive Case
  var upperCase = [];
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    var upperWord = capitalizeWords([word]);
    upperCase.push(upperWord[0]);
  }
  return upperCase;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    // Base Case
    if (array.length === 0) {
      return [];
    }
    if (array.length === 1) {
      var word = array[0];
      return [word[0].toUpperCase() + word.slice(1, word.length)];
    }
    // Recursive Case
    var upperCase = [];
    for (var i = 0; i < array.length; i++) {
      var word = array[i];
      var upperWord = capitalizeFirst([word]);
      upperCase.push(upperWord[0]);
    }
    return upperCase;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var evenSum = 0;
  for (var key in obj) {
    // Base Case
    if (typeof obj[key] !== 'object') {
      if (obj[key] % 2 === 0) {
        evenSum += obj[key];
      }
    }
    // Recursive Case
    if (typeof obj[key] === 'object') {
      evenSum += nestedEvenSum(obj[key]);
    }
  }
  return evenSum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    // Base Case - Element is not an array
    if (!Array.isArray(array[i])) {
      flattened.push(array[i]);
    } else {
    // Recursive Case - Element is an array
      flattened.push(...flatten(array[i]));
    }
  }
  return flattened;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

  obj = obj || {};
  // Base Case Length 0
  if (str.length === 0) {
    return obj;
  }
  // Base Case Length 1
  if (str.length === 1) {
    obj[str[0]] = 1;
    return obj;
  }

  // Iterate str
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    // Base Case - First time encountering char
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      // Recursive Case
      var currentObj = letterTally(char);
      obj[char] = currentObj[char] + 1;
    }
  }
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var compressed = [];
  for (var i = 0; i < list.length; i++) {
    // Base Case - First time encountering value
    if (!compressed.includes(list[i])) {
      // Push value to result
      compressed.push(list[i]);
    } else {
    // Recursive Case - Value has been encountered already
      var innerCompressed = compress(list.slice(1));
      for (var j = 0; j < innerCompressed.length; j++) {
        if (!compressed.includes(innerCompressed[j])) {
          compressed.push(list[j]);
        }
      }
    }
  }
  return compressed;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  // Base Case
  // Recursive Case
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // Iterate array
    // If element is 0
      // Recursive Case - Next element is 0
        // Splice out current element
        // Call minimizeZeroes on modified array
    // Base Case - If at last element
      // Return array
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};

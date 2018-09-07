/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n < 0) {
		return null;
	}
	if (n === 0) {
		return 1;
	}
	return (n * factorial(n - 1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if (array.length === 0) {
		return 0;
	} else {
		return array[0] + sum(array.slice(1));
		// return array.pop() + sum(array)
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

// create sum variable
// create a function that that loops around all the elements in the array
	// check if element is a number
		// add the number to sum variable
	// check if the element is an array
		// 
	// 

var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  if (!Array.isArray(array[0])) {
    return array[0] + arraySum(array.slice(1));
  } else {
    return arraySum(array[0]) + arraySum(array.slice(1))
  }
 };

// 4. Check if a number is even.
var isEven = function(n) {
	n = Math.abs(n);
	if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	}
	return isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21 = 6 + 5 + 4 + 3 + 2 + 1 + 0
var sumBelow = function(n) {
	if (n === 0) {
		return 0;
	} if (n < 0) {
		return (n + 1) + sumBelow(n + 1);
	}
	return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
	//base case
	//return array if x + 1 is equal to y - 1
	//recursive case
	//push it into array
	//add one to x each time you recurse



var range = function(x, y) {
	// var arrayRange = [];
	// if (x === y - 1) {
	// 	return arrayRange;
	// }
	// 	arrayRange.push(x + 1);
	// return range(x + 1, y);
  
  if (y - x === 1 || y - x === 0) {
    return [];
  }


  // recursive case
  y = y > x ? y - 1 : y + 1
  return y === x ? [] : range(x, y).concat(y); 
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

// exponent(4,3); // 64
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	}
	if (exp < 0) {
		return 1 / base * exponent(base, exp + 1);
	} else {
		return base * exponent(base, exp - 1);
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

	// for (var i = 1, i <= n; i++) {
	// 	if (i * i === n) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	if (n === 1) {
		return true;
	} else if (n < 1) {
		return false;
	}
	return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if (string === '') {
		return '';
	}
	var reverseStr = ''
	return reverseStr += string.substring(string.length - 1) + reverse(string.substring(0, string.length - 1));

	// var newStr = '';
	// for (var i = string.length - 1; i >= 0; i--) {
	// 	newStr = newStr + string[i];
	// }
	// return newStr;

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

	var string = string.toLowerCase();
	if (string.length === 1 || string.length === 0) {
		return true;
	}	
	if (string[0] !== string[string.length - 1]) {
		return false;
	}
	return palindrome(string.substring(1, string.length - 1))

	// for (var i = 0; i < string.length; i++) {
	// 	if (string[i] !== string[string.length - i - 1]) {
	// 		return false;
	// 	}
	// }
	// return true;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// modulo(10,-3) //-1
var modulo = function(x, y) {
	if (y === 0) {
		return NaN;
	}
	
	if (x < 0) {
		return -modulo(-x, y)
	}

	if (y < 0) {
		y = -y
	}

	if (x < y) {
		return x;
	}

	return modulo(x - y, y);

// var divisor = Math.floor(x / y)
// var remainder = x - (divisor * y)

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
// multiply(2, 4) // 8
var multiply = function(x, y) {
	if (y === 0) {
		return 0;
	}
	if (y < 0) {
		return -x + multiply(x, y + 1);
	}
	return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

var divide = function(x, y) {
	if (y === 0) {
		return 0;
	} else if (x - y === 0) {
		return 0;
	} else if (x < y) {
		return 1;
	} 
	return (1 + divide(x - y, y));
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
if (x === y) {
	return x;
}
if (y < 0 || x < 0) {
	return null;
}
if (x < y) {
	return gcd(x, y - x)
} else {
	return gcd(x - y, y)
}
// var small = Math.min(x, y)
// for (var i = small; i > 0; i--) {
// 	if (y % i === 0) && (x % i === 0) {
// 		return i;
// 	}
// }

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	if (str1.length === 0 && str2.length === 0) {
		return true;
	}
	if (str1[0] === str2[0]) {
		return compareStr(str1.substring(1), str2.substring(1));
	} else {
		return false;
	}
	// if (str1.length === str2.length) {
	// 	for (var i = 0; i < str1.length; i++) {
	// 		if (str1[i] !== str2[i]) {
	// 			return false
	// 		}
	// 	}
	// } else {
	//    return false;
	// }
	// return true;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function(str) {
	var arr = [];
    if(str.length === 0) {
        return arr;
    }
    arr.push(str[0]);
    arr = arr.concat(createArray(str.slice(1))); 
    return arr;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	var newArr = [];
	if (array.length === 0) {
		return newArr;
	}
	newArr.push(array.pop());
	newArr = newArr.concat(reverseArr(array));
	return newArr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var array = [];
	if (length === 0) {
		return array;
	}
	array.push(value)
	array = array.concat(buildList(value, length - 1))
	return array;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	var array = [];
	if (n === 0) {
		return array;
	}
	if (n % 3 === 0 && n % 5 === 0) {
		array.push('FizzBuzz');
	} else if (n % 3 === 0) {
		array.push('Fizz') 
	} else if (n % 5 === 0) {
		array.push('Buzz');
	} else {
		array.push(n.toString());
	}
	return fizzBuzz(n - 1).concat(array);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if (array.length === 0) {
		return 0;
	}
	return (array[0] === value) + (countOccurrence(array.slice(1), value));
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	var newArray = [];
	if (array.length === 0) {
		return newArray;
	};
	
	newArray.push(callback(array[0]));
	newArray = newArray.concat(rMap(array.slice(1), callback));
	return newArray;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {
// 'e':{'x':'y'},
// 't':{'r':{'e':'r'},
// 'p':{'y':'r'}},
// 'y':'e'
// };

// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var count = 0;
	for (var prop in obj) {
		if (prop === key) {
			count++;
		}

		var value = obj[prop];
		if (typeof value === 'object') {
			count += countKeysInObj(value, key)
		}
	}
	return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;
	for (var prop in obj) {
		if (obj[prop] === value) {
			count++;
		}
		var target = obj[prop];
		if (typeof target === 'object') {
			count += countValuesInObj(target, value)
	    }
	}
	return count;
};

// obj = {a:1, b:2, c:3}
// oldKey = c
// newKey = d

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for (var prop in obj) {
		if (prop === oldKey) {
			prop = newKey;
		}
		var value = obj[prop];
		if (typeof value === 'object') {
			prop = replaceKeysInObj(value, oldKey, newKey)
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
	var fibArray = [];

	if (n <= 0) {
		return null;
	}

	if (n === 1) {
		return [0, 1];
	}

	while (fibArray.length <= n) {
		fibArray.push(fibonacci(n-1) + fibonacci(n-2))
	}
	return fibArray;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if(n < 0) {
    	return null;
    } else if (n === 1) {
		return 1;
	}
  	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	var newArray = [];
	if (array.length === 0) {
		return newArray;
	}
	newArray.push(array[0].toUpperCase());
	newArray = newArray.concat(capitalizeWords(array.slice(1)));
	return newArray;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	var newArray = [];
	if (array.length === 0) {
		return newArray;
	}
	newArray.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
	newArray = newArray.concat(capitalizeFirst(array.slice(1)));
	return newArray;
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
		if (Number.isInteger(obj[key])) {
			if (obj[key] % 2 === 0) {
				evenSum += obj[key];
			}
		} else {
		  nestedEvenSum(obj[key]);
		}
	}
	return evenSum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var unnestedArr = [];

  for (var i = 0; i < array.length; i++) {
  	if (Array.isArray(array[i])) {
  		unnestedArr = unnestedArr.concat(flatten(array[i]));
  	} else {
  		unnestedArr.push(array[i]);
  	}
  }
  return unnestedArr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj={}) {
  if(str.length===0){
    return obj;
  }
  if(str[0] in obj){
    obj[str[0]]++
  }else{
    obj[str[0]] = 1;
  }
  return letterTally(str.slice(1),obj)
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	// var obj = {};
	// if (list.length === 0) {
	// 	return Object.keys(obj);
	// }

	// if (list[0] in obj) {
	// 	obj[list[0]]++;
	// } else {
	// 	obj[list[0]] = 1;
	// }
	// return compress(list.slice(1))
	var copy = list;
	var newArray = [];
	if (copy.length === 0) {
		return newArray;
	}

	if (copy.shift() !== copy[0]) {
		newArray.push(copy.shift());
	}

	return newArray.concat(compress(copy.slice(1)));

};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    return array.map(function(el){return el.concat(aug);});
    if(array.length===1) return array[0].concat(aug);
    return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	if (array.length === 0) { return array };
	if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
	    return minimizeZeroes(array.slice(1));
	} else {
	    return [array[0]].concat(minimizeZeroes(array.slice(1)));
	}
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	if (array.length === 0) { return array; }
	if(array[0] < 0) { array[0] = -array[0]; }
	if(array[1] > 0) { array[1] = -array[1]; }
	return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var strArray = str.split(' ');
	var newArray = [];
	var numObj = {zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9}

	var numText = function() {
		if (strArray.length === 0) {
			return newArray.join(' ')
		}
		if (numObj.hasOwnProperty(strArray[0])) {
			newArray.push(numObj[strArray[0]])
		} else {
			newArray.push(strArray[0])
		}
	}

	numText();
	return numToText(strArray.slice(1));
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

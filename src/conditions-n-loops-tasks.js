/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(...args) {
  let rezult = args[0];
  for (let index = 1; index < args.length; index += 1) {
    rezult = args[index] > rezult ? args[index] : rezult;
  }
  return rezult;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  )
    return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let equalSide;
  let thirdSide;
  if (a === b) {
    equalSide = a;
    thirdSide = c;
  } else if (a === c) {
    equalSide = a;
    thirdSide = b;
  } else if (b === c) {
    equalSide = b;
    thirdSide = a;
  } else {
    return false;
  }
  return thirdSide > 0 && thirdSide < equalSide ** 2;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let rezult = '';
  const numbArr = [];
  numbArr[1] = 'I';
  numbArr[5] = 'V';
  numbArr[10] = 'X';

  let tens = Math.floor(num / 10);
  while (tens) {
    rezult += 'X';
    tens -= 1;
  }
  let units = num % 10;
  if (units === 9) {
    rezult += 'IX';
  } else if (units === 4) {
    rezult += 'IV';
  } else {
    if (units > 4) {
      rezult += 'V';
      units -= 5;
    }
    while (units) {
      rezult += 'I';
      units -= 1;
    }
  }
  return rezult;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const numbersArray = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let rezult = '';
  for (let index = 0; index < numberStr.length; index += 1) {
    rezult += rezult.length > 0 ? ' ' : '';
    switch (numberStr[index]) {
      case '.':
      case ',':
        rezult += 'point';
        break;
      case '-':
        rezult += 'minus';
        break;

      default:
        rezult += numbersArray[+numberStr[index]];
        break;
    }
  }
  return rezult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  let sideL = Math.floor(str.length / 2) - 1;
  let sideR = str.length % 2 === 1 ? sideL + 2 : sideL + 1;

  do {
    if (str[sideL] !== str[sideR]) {
      return false;
    }
    sideL -= 1;
    sideR += 1;
  } while (sideL >= 0);

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === letter) return index;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let val = num;
  while (val) {
    if (val % 10 === digit) return true;
    val = Math.floor(val / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  for (let index = 1; index < arr.length - 1; index += 1) {
    let summLeft = 0;
    let summRight = 0;
    for (let l = 0; l < index; l += 1) {
      summLeft += arr[l];
    }
    for (let r = index + 1; r < arr.length; r += 1) {
      summRight += arr[r];
    }
    if (summLeft === summRight) return index;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],matrix
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let valueCounter = 1;
  const steps = Math.ceil(size / 2);
  let currentStep = 1;
  const rezultMatrix = [];

  for (let index = 0; index < size; index += 1) {
    rezultMatrix[index] = [];
  }

  function spiral() {
    if (currentStep === steps && size % 2 > 0) {
      rezultMatrix[currentStep - 1][currentStep - 1] = valueCounter;
    } else {
      const startPos = currentStep - 1;
      const endPos = size - currentStep;
      let currentPos;

      currentPos = startPos;
      while (currentPos <= endPos) {
        rezultMatrix[startPos][currentPos] = valueCounter;
        currentPos += 1;
        valueCounter += 1;
      }

      currentPos = startPos + 1;
      while (currentPos <= endPos) {
        rezultMatrix[currentPos][endPos] = valueCounter;
        currentPos += 1;
        valueCounter += 1;
      }

      currentPos = endPos - 1;
      while (currentPos >= startPos) {
        rezultMatrix[endPos][currentPos] = valueCounter;
        currentPos -= 1;
        valueCounter += 1;
      }

      currentPos = endPos - 1;
      while (currentPos > startPos) {
        rezultMatrix[currentPos][startPos] = valueCounter;
        currentPos -= 1;
        valueCounter += 1;
      }
    }
  }

  while (currentStep <= steps) {
    spiral();
    currentStep += 1;
  }
  return rezultMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rezultMatrix = [];
  const returnMatrix = matrix;

  for (let index = 0; index < matrix.length; index += 1) {
    rezultMatrix[index] = [];
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      rezultMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    returnMatrix[i] = rezultMatrix[i];
  }
  return returnMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function fastSort(arrS, startIndex, endIndex) {
    const sortArr = arrS;
    let leftMarker = startIndex;
    let rightMarker = endIndex;

    while (leftMarker !== rightMarker) {
      if (leftMarker + 1 === rightMarker) {
        if (sortArr[leftMarker] >= sortArr[rightMarker]) {
          const buff = sortArr[leftMarker];
          sortArr[leftMarker] = sortArr[rightMarker];
          sortArr[rightMarker] = buff;
          rightMarker -= 1;
        } else {
          leftMarker += 1;
        }
      } else if (sortArr[leftMarker] < sortArr[rightMarker]) {
        leftMarker += 1;
      } else {
        const buff = sortArr[leftMarker];
        sortArr[leftMarker] = sortArr[rightMarker - 1];
        sortArr[rightMarker - 1] = sortArr[rightMarker];
        sortArr[rightMarker] = buff;
        rightMarker -= 1;
      }
    }

    if (rightMarker - startIndex > 0) {
      fastSort(sortArr, startIndex, rightMarker - 1);
    }
    if (endIndex - rightMarker > 1) {
      fastSort(sortArr, rightMarker + 1, endIndex);
    }
  }

  if (arr.length <= 1) return arr;
  const rezultArray = arr;

  fastSort(rezultArray, 0, rezultArray.length - 1);
  return rezultArray;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function singleIteration(sourceStr) {
    let leftRezult = '';
    let rightRezult = '';
    for (let i = 0; i < sourceStr.length; i += 2) {
      leftRezult += sourceStr[i];
    }
    for (let i = 1; i < sourceStr.length; i += 2) {
      rightRezult += sourceStr[i];
    }
    return leftRezult + rightRezult;
  }

  function cashFunction(fn) {
    const cash = {};
    return function cashFn(n) {
      if (cash[n]) {
        return cash[n];
      }
      const result = fn(n);
      cash[n] = result;
      return result;
    };
  }

  let rezStr = str;
  const cashShuffleChar = cashFunction(singleIteration);

  for (let i = 0; i < iterations; i += 1) {
    rezStr = cashShuffleChar(rezStr);
  }

  return rezStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function findIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === value) return i;
    }
    return -1;
  }
  let currentDigitPlace = 1;
  const rightSideArray = [number % 10];

  while (number / 10 ** currentDigitPlace > 1) {
    currentDigitPlace += 1;

    const leftSide =
      Math.floor(number / 10 ** currentDigitPlace) * 10 ** currentDigitPlace;
    const rightSide = number % 10 ** currentDigitPlace;
    const newDigit = Math.floor(rightSide / 10 ** (currentDigitPlace - 1));

    const larger = rightSideArray.filter((item) => item > newDigit);
    if (larger.length !== 0) {
      const largerIndex = findIndexOf(rightSideArray, Math.min(...larger));

      let rightRezult = rightSideArray[largerIndex];

      rightSideArray[largerIndex] = newDigit;

      rightRezult *= 10 ** rightSideArray.length;
      rightSideArray.sort((a, b) => a - b);

      for (let i = 0; i < rightSideArray.length; i += 1) {
        rightRezult +=
          rightSideArray[i] * 10 ** (rightSideArray.length - i - 1);
      }
      return leftSide + rightRezult;
    }
    rightSideArray[rightSideArray.length] = newDigit;
  }

  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

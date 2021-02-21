const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */
const sortedData = (dataTypes) => {
  const keys = {
    strings: [],
    integers: [],
    floats: [],
    arrays: [],
    objects: [],
  };

  for (let data in dataTypes) {
    let property = dataTypes[data];
    switch (true) {
      case typeof property === "string":
        keys.strings.push(property);
        break;
      case typeof property === "number" && property % 1 === 0:
        keys.integers.push(property);
        break;
      case typeof property === "number" && property % 1 !== 0:
        keys.floats.push(property);
        break;
      case typeof property === "object" && Array.isArray(property):
        keys.arrays.push(property);
        break;
      case typeof property === "object" && Array.isArray(property) === false:
        keys.objects.push(property);
        break;
    }
  }
  return keys;
}

/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */

const multipliedByNextNumber = (arrOfNums) => {
  let newArr = [];
  for (i = 0; i < arrOfNums.length; i++) {
    let value = arrOfNums[i];
    let newValue = arrOfNums[i + 1];
    if (i + 1 !== arrOfNums.length) {
      value = value * newValue;
      newArr.push(value);
    } else if (i + 1 === arrOfNums.length) {
      value = value * 1;
      newArr.push(value);
    }
  }
  return newArr;
};

/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */

const multipliedEvenNumbers = (passedArr) => {
  const evenNums = passedArr.filter(num => num % 2 === 0);
  const multipliedNums = evenNums.map((num, index) => {
    if (evenNums[index + 1] !== undefined) {
      return num * evenNums[index + 1];
    } else {
      return num * 2;
    }
  });
  let result = passedArr.map(num => {
    if (num % 2) {
      return num;
    } else {
      return multipliedNums.shift();
    }
  });
  return result;
};

/**
 * Exercise 4
 *
 * create a function {multipliedOddNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 1.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [4, 15, 6, 8, 35, 7]
 */

const multipliedOddNumbers = (passedArr) => {
  const newArr = passedArr.filter(num => num % 2 !== 0);
  const multipliedNums = newArr.map((num, index) => {
    if (newArr[index + 1] !== undefined) {
      return num * newArr[index + 1];
    } else {
      return num * 1;
    }
  });
  const result = passedArr.map(num => {
    if (num % 2 === 0) {
      return num;
    } else {
      return multipliedNums.shift();
    }
  });
  return result;
};

/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */
const multipliedEvenOddNumbers = (inputArr, type) => {
  if (type === "odd") {
    return multipliedOddNumbers(inputArr);
  } else if (type === "even") {
    return multipliedEvenNumbers(inputArr);
  } else {
    return inputArr;
  }
};

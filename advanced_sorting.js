/*
Title: Advanced Reusable Sorting Algorithm

Description: This code demonstrates an advanced sorting algorithm that can be used on arrays of various data types including numbers, strings, and objects. It uses a combination of merge sort, bubble sort, and quick sort techniques to achieve efficient and accurate sorting results. Additionally, the code includes helper functions for generating random data, shuffling arrays, and checking sorting results.

Filename: advanced_sorting.js
*/

// Helper function to generate an array of random numbers
function generateRandomNumbersArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 1000));
  }
  return randomArray;
}

// Helper function to generate an array of random strings
function generateRandomStringsArray(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    let randomString = '';
    const stringLength = Math.floor(Math.random() * 10) + 1;
    for (let j = 0; j < stringLength; j++) {
      randomString += chars[Math.floor(Math.random() * chars.length)];
    }
    randomArray.push(randomString);
  }
  return randomArray;
}

// Helper function to generate an array of random objects
function generateRandomObjectsArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push({
      id: i + 1,
      name: `Object ${i + 1}`,
      value: Math.floor(Math.random() * 100),
    });
  }
  return randomArray;
}

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Helper function to check if an array is sorted
function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

// Merge Sort algorithm
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Bubble Sort algorithm
function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

// Quick Sort algorithm
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Testing the sorting algorithms

const numbersArray = generateRandomNumbersArray(1000);
const stringsArray = generateRandomStringsArray(1000);
const objectsArray = generateRandomObjectsArray(1000);

console.log('--- Numbers Array ---');
console.log('Array before sorting:');
console.log(numbersArray);
console.log('\nArray after merge sort:');
console.log(mergeSort(numbersArray.slice()));
console.log('Sorted: ' + isSorted(mergeSort(numbersArray.slice())));
shuffleArray(numbersArray);
console.log('\nArray after bubble sort:');
console.log(bubbleSort(numbersArray.slice()));
console.log('Sorted: ' + isSorted(bubbleSort(numbersArray.slice())));
shuffleArray(numbersArray);
console.log('\nArray after quick sort:');
console.log(quickSort(numbersArray.slice()));
console.log('Sorted: ' + isSorted(quickSort(numbersArray.slice())));

console.log('\n--- Strings Array ---');
console.log('Array before sorting:');
console.log(stringsArray);
console.log('\nArray after merge sort:');
console.log(mergeSort(stringsArray.slice()));
console.log('Sorted: ' + isSorted(mergeSort(stringsArray.slice())));
shuffleArray(stringsArray);
console.log('\nArray after bubble sort:');
console.log(bubbleSort(stringsArray.slice()));
console.log('Sorted: ' + isSorted(bubbleSort(stringsArray.slice())));
shuffleArray(stringsArray);
console.log('\nArray after quick sort:');
console.log(quickSort(stringsArray.slice()));
console.log('Sorted: ' + isSorted(quickSort(stringsArray.slice())));

console.log('\n--- Objects Array ---');
console.log('Array before sorting:');
console.log(objectsArray);
console.log('\nArray after merge sort (by value):');
console.log(mergeSort(objectsArray.slice(), (a, b) => a.value - b.value));
console.log(
  'Sorted: ' +
    isSorted(mergeSort(objectsArray.slice(), (a, b) => a.value - b.value))
);
shuffleArray(objectsArray);
console.log('\nArray after bubble sort (by value):');
console.log(bubbleSort(objectsArray.slice(), (a, b) => a.value - b.value));
console.log(
  'Sorted: ' +
    isSorted(bubbleSort(objectsArray.slice(), (a, b) => a.value - b.value))
);
shuffleArray(objectsArray);
console.log('\nArray after quick sort (by value):');
console.log(quickSort(objectsArray.slice(), (a, b) => a.value - b.value));
console.log(
  'Sorted: ' +
    isSorted(quickSort(objectsArray.slice(), (a, b) => a.value - b.value))
);
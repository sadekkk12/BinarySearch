const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(value, values) {
  let min = 0;
  let max = values.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let guess = values[middle];
    if (guess === value) {
      console.log(guess + " korrekt");
      return middle; 
    } else if (guess > value) {
      console.log(guess + " for højt");
      max = middle - 1;
    } else {
      console.log(guess + " for lavt");
      min = middle + 1;
    }
  }
  return -1; 
}



function binarySearchRecursive(value, values, start = 0, end = values.length - 1) {
    if (start > end) {
      return -1; 
    }
  
    let middle = Math.floor((start + end) / 2);
    let guess = values[middle];
    if (guess === value) {
      console.log(guess + " korrekt");
      console.log(`fandt ${value} på position ${middle}`);
      return middle; 
    } else if (guess > value) {
      console.log(guess + " for højt");
      return binarySearchRecursive(value, values, start, middle - 1);
    } else {
      console.log(guess + " for lavt");
      return binarySearchRecursive(value, values, middle + 1, end);
    }
  }

performance.mark("timer-start");
binarySearchRecursive(13, values); 
performance.mark("timer-stop");
performance.measure("binary-search-time", "timer-start", "timer-stop");
const measure = performance.getEntriesByName("binary-search-time")[0];
console.log(`Binary search took ${measure.duration} milliseconds.`);

  
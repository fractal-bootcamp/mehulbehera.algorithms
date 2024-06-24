//given a sorted array find an element in the array
export default function binarySearch(toSearchArray: number[], value: number) {
  let upperEnd = toSearchArray.length - 1;
  let lowerEnd = 0;
  let middleIndex = Math.floor((upperEnd + lowerEnd) / 2);

  while (upperEnd >= lowerEnd) {
    middleIndex = Math.floor((upperEnd + lowerEnd) / 2);
    if (toSearchArray[middleIndex] === value) {
      return middleIndex;
    }
    //if middle value is greater than key check the lower half
    else if (toSearchArray[middleIndex] > value) {
      upperEnd = middleIndex - 1;
    } else {
      lowerEnd = middleIndex + 1;
    }
  }

  return -1;
}
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 8));

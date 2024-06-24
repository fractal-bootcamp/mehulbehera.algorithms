const initialArray = [14, 7, 3, 12, 9, 11, 6, 2, 1];

//takes two sorted arrays and merges them arrays and returns a sorted array
export function merge(leftHalf: number[], rightHalf: number[]): number[] {
  let leftIter = 0;
  let rightIter = 0;
  const totalLength = leftHalf.length + rightHalf.length;

  console.log("leftHalf ", leftHalf);
  console.log("right ", rightHalf);

  const toReturnArray = [];

  while (toReturnArray.length < totalLength) {
    if (leftHalf[leftIter] <= rightHalf[rightIter]) {
      toReturnArray.push(leftHalf[leftIter]);
      leftIter++;

      if (leftIter >= leftHalf.length) {
        //no more left half push all the right side
        while (rightIter < rightHalf.length) {
          toReturnArray.push(rightHalf[rightIter]);
          rightIter++;
        }

        console.log("to Return", toReturnArray);

        return toReturnArray;
      }
    } else {
      toReturnArray.push(rightHalf[rightIter]);
      rightIter++;

      if (rightIter >= rightHalf.length) {
        //no more right half push the left on to toReturn
        while (leftIter < leftHalf.length) {
          toReturnArray.push(leftHalf[leftIter]);
          leftIter++;
        }

        console.log("to Return", toReturnArray);

        return toReturnArray;
      }
    }
  }

  console.log("to Return", toReturnArray);

  return toReturnArray;
}

//take in an array - split in  half into two arrays and call merge
export default function mergeSort(toSortArray: number[]): number[] {
  if (toSortArray.length === 1) {
    return toSortArray;
  }

  let midIndex = Math.floor(toSortArray.length / 2);
  const leftHalf = toSortArray.slice(0, midIndex);
  const rightHalf = toSortArray.slice(midIndex);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

console.log(initialArray);
const res = mergeSort(initialArray);
console.log(res);
//console.log(merge([38], [27]));

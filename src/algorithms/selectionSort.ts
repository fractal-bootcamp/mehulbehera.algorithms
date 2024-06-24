export function selectionSortStep(
  toSortArray: number[],
  numSorted: number
): number[] {
  const arrayToReturn = [...toSortArray];

  if (numSorted > arrayToReturn.length - 2) {
    return toSortArray;
  }

  let minIndex = -1;
  let minValue = Infinity;
  for (let i = numSorted; i < arrayToReturn.length; i++) {
    //find the smallest value
    if (arrayToReturn[i] < minValue) {
      minIndex = i;
      minValue = arrayToReturn[i];
    }
  }

  //switch it with numSorted
  const tempValue = arrayToReturn[numSorted];
  arrayToReturn[numSorted] = minValue;
  arrayToReturn[minIndex] = tempValue;

  return arrayToReturn;
}

export default function selectionSort(toSortArray: number[]): number[] {
  let numSorted = 0;
  while (numSorted < toSortArray.length) {
    toSortArray = selectionSortStep(toSortArray, numSorted);
    numSorted++;
  }

  return toSortArray;
}

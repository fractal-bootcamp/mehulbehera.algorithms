const initialArray = [8, 7, 6, 1, 0, 9, 2];

export function quickSortStep(
  toSortArray: number[],
  lowerEnd: number,
  upperEnd: number
) {
  const pivotValue = toSortArray[upperEnd];
  let iterIndex = lowerEnd - 1;
  console.log("before: ", toSortArray);
  for (let i = lowerEnd; i < upperEnd; i++) {
    if (toSortArray[i] < pivotValue) {
      iterIndex++;

      const ele1 = toSortArray[i];
      const ele2 = toSortArray[iterIndex];
      toSortArray[iterIndex] = ele1;
      toSortArray[i] = ele2;
    }
  }
  console.log("after: ", toSortArray);

  const ele1 = toSortArray[iterIndex + 1];
  const ele2 = toSortArray[upperEnd];
  toSortArray[upperEnd] = ele1;
  toSortArray[iterIndex + 1] = ele2;

  return iterIndex + 1;
}

export default function quickSort(
  toSortArray: number[],
  lowerEnd: number,
  upperEnd: number
): number[] {
  if (lowerEnd < upperEnd) {
    let pivot = quickSortStep(toSortArray, lowerEnd, upperEnd);

    quickSort(toSortArray, lowerEnd, pivot - 1);
    quickSort(toSortArray, pivot + 1, upperEnd);
  }

  return toSortArray;
}

console.log(quickSort(initialArray, 0, initialArray.length - 1));

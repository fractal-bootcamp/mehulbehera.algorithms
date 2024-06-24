const initialArray = [32, 1, 10, 5, 2];

//could be more efficient

export function insertionSortStep(
  toSortArray: number[],
  index: number
): number[] {
  if (index === 0) {
    return toSortArray;
  }

  let iter = index;

  console.log("array before: ", toSortArray);

  while (toSortArray[iter] < toSortArray[iter - 1] && iter > 0) {
    //swap the two spots
    const ele1 = toSortArray[iter];
    const ele2 = toSortArray[iter - 1];
    toSortArray[iter] = ele2;
    toSortArray[iter - 1] = ele1;

    //iterate down
    iter--;
  }
  console.log("array after: ", toSortArray);

  return toSortArray;
}

export default function insertionSort(toSortArray: number[]): number[] {
  for (let i = 0; i < toSortArray.length; i++) {
    toSortArray = insertionSortStep(toSortArray, i);
  }

  return toSortArray;
}

insertionSort(initialArray);

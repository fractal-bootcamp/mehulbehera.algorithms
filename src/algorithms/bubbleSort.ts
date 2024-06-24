function bubbleSort(toSortArray: number[]): number[] {
  let swapped = false;
  let array = toSortArray;

  do {
    const res = bubbleSortStep(array);
    array = res.toSortArray;
    swapped = res.swapped;
  } while (swapped == true);

  return array;
}

//takes in an array and performs one step of bubble sort
export function bubbleSortStep(toSortArray: number[]) {
  let swapped = false;
  const arrayToReturn = [...toSortArray];
  for (let i = 0; i < arrayToReturn.length - 1; i++) {
    const ele1 = toSortArray[i];
    const ele2 = toSortArray[i + 1];
    if (ele2 < ele1) {
      //if the next element is smaller just swap the elements
      toSortArray[i] = ele2;
      toSortArray[i + 1] = ele1;

      //indicate that there was a swap
      swapped = true;
    }
  }

  return { toSortArray, swapped };
}

export default bubbleSort;

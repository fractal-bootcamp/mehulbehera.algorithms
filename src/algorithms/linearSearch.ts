export default function linearSearch(toSearchArray: number[], key: number) {
  for (let i = 0; i < toSearchArray.length; i++) {
    if (key === toSearchArray[i]) {
      return i;
    }
  }
  return -1;
}

function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;

    if (avg === targetAvg) return true;
    else if (avg < targetAvg) left++;
    else right--;
  }

  return false;
}

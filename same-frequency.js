function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const frequencyCounter = {};

  for (let digit of str1) {
    frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
  }

  for (let digit of str2) {
    if (!frequencyCounter[digit]) return false;
    frequencyCounter[digit]--;
  }

  return true;
}

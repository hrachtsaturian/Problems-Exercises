function constructNote(message, letters) {
  const countFrequency = (str) => {
    const freq = {};
    for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  };

  const messageFreq = countFrequency(message);
  const lettersFreq = countFrequency(letters);

  for (const char in messageFreq) {
    if (!lettersFreq[char] || messageFreq[char] > lettersFreq[char]) {
      return false;
    }
  }

  return true;
}

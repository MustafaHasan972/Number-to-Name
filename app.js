//Function that tells the name of a number
const sayNumberInEnglish = (n) => {
  let groups = [];
  let remainingNumbers = n;
  while (remainingNumbers > 0) {
    let group = remainingNumbers % 1000; // This will get us the last three digits of remainingNumbers
    groups.unshift(group); // This will add the group to the beginning of array groups
    remainingDigits = Math.floor(remainingNumbers / 1000); // This will remove the last three digits from remainingNumbers
  }
};

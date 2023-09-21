//Function that tells the name of a number
const sayNumberInEnglish = (n) => {
  let groups = [];
  let remainingNumbers = n;
  while (remainingNumbers > 0) {
    let group = remainingNumbers % 1000; //This will get us the last three digits of remainingNumbers
    groups.unshift(group);
  }
};

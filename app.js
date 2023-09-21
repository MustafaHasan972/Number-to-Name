//Function that tells the name of a number
const sayNumberInEnglish = (n) => {
  let groups = [];
  let remainingNumbers = n;
  while (remainingNumbers > 0) {
    let group = remainingNumbers % 1000; // This will get us the last three digits of remainingNumbers
    groups.unshift(group); // This will add the group to the beginning of array groups
    remainingDigits = Math.floor(remainingNumbers / 1000); // This will remove the last three digits from remainingNumbers
  }
  const spelledGroup = (group) => {
    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    let spellGroup = ""; // This will store the spelled-out representation of the group

    const hundredsDigit = Math.floor(group / 100);
    const tensDigit = Math.floor((group % 100) / 10);
    const onesDigit = group % 10;

    if (hundredsDigit > 0) {
      spelledGroup += ones[hundredsDigit] + " hundred ";
    }

    if (tensDigit === 1) {
      spelledGroup += tens[tensDigit] + " ";
    } else {
      spellGroup += tens[tensDigit] + " ";
      spellGroup += ones[onesDigit] + " ";
    }

    return spelledGroup.trim();
  };
};

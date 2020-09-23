module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const hundreds = Math.floor(number / 100);

  let tens = Math.floor((number - hundreds * 100) / 10);
  let ones = number - hundreds * 100 - tens * 10;

  if (tens === 1) {
    tens = 0;
    ones = number - hundreds * 100;
  }

  const onesText = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensText = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];


  const hundredsText = hundreds ? onesText[hundreds] + ' hundred ' : '';
  return (hundredsText + tensText[tens] + onesText[ones]).trim()
};



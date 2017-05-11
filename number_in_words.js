function numberToWords(number) {
  // Your code here
  let terbilang = ["", "satu ", "dua ", "tiga ", "empat ", "lima ", "enam ", "tujuh ", "delapan ", "sembilan ", "sepuluh ", "sebelas "];

  if (number < 12) {
    return terbilang[number];
  } else if (number < 20) {
    return terbilang[number % 10] + "belas ";
  } else if (number < 100) {
    return terbilang[Math.floor(number / 10)] + "puluh " + terbilang[number % 10];
  } else if (number < 200) {
    return "seratus " + numberToWords(number % 100);
  } else if (number < 1000) {
    return terbilang[Math.floor(number / 100)] + "ratus " + numberToWords(number % 100);
  } else if (number < 2000) {
    return "seribu " + numberToWords(number % 1000);
  } else if (number < 1000000) {
    return numberToWords(Math.floor(number / 1000)) + "ribu " + numberToWords(number % 1000);
  } else if (number < 1000000000) {
    return numberToWords(Math.floor(number / 1000000)) + "juta " + numberToWords(number % 1000000);
  } else if (number < 1000000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + "miliar " + numberToWords(number % 1000000000);
  } else if (number < 1000000000000000) {
    return numberToWords(Math.floor(number / 1000000000000)) + "triliun " + numberToWords(number % 1000000000000);
  }
}

// Driver code
console.log(numberToWords(1000000000));

module.exports = {
  numberToWords: numberToWords
}

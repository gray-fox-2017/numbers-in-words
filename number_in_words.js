function numberToWords(number) {
  // Your code here
  angka = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  result = "";
  if (number < 12) {
	  result += " " + angka[number];
  } else if (number < 20) {
	  result += numberToWords(number - 10) + " Belas";
  } else if (number < 100) {
	  result += numberToWords(Math.floor(number / 10)) + " Puluh" + numberToWords(number % 10);
  } else if (number < 200) {
	  result += " Seratus" + numberToWords(number - 100);
  } else if (number < 1000) {
	  result += numberToWords(Math.floor(number / 100)) + " Ratus" + numberToWords(number % 100);
  } else if (number < 2000) {
	  result += " Seribu" + numberToWords(number - 1000);
  } else if (number < 1000000) {
	  result += numberToWords(Math.floor(number / 1000)) + " Ribu" + numberToWords(number % 1000);
  } else if (number < 1000000000) {
	  result += numberToWords(Math.floor(number / 1000000)) + " Juta" + numberToWords(number % 1000000);
  } else if (number < 1000000000000) {
	  result += numberToWords(Math.floor(number / 1000000000)) + " Milyar" + numberToWords(number % 1000000000);
  } else if (number < 1000000000000000) {
	  result += numberToWords(Math.floor(number / 1000000000000)) + " Trilyun" + numberToWords(number % 1000000000000);
  }
  return result;
}

// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(10));
console.log(numberToWords(11));
console.log(numberToWords(17));
console.log(numberToWords(1729));
console.log(numberToWords(2570));
console.log(numberToWords(12345678954321));

module.exports = {
  numberToWords: numberToWords
}

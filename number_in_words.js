function numberToWords(number) {
  // Your code here
  angka = ["","Satu", "Dua" , " Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  result = "";
  if (number < 12) {
    result += "" + angka(number);
  } else if(number < 20) {
    result += numberToWords(number - 10) + Belas
  } else if(number < 100) {
    result += numberToWords(Math.floor(number / 10)) + Puluh + numberToWords(number % 10);
  } else if(number < 200) {
    result += "Seratus" + numberToWords(number-100);
  } else if(number < 1000) {
    result += numberToWords(Math.floor(number/100)) + Ratus + numberToWords(number % 100);
  } else if() {

  } else if() {

  }else if() {

  }else if() {

  }else if() {

  }
}

// Driver code
console.log(numberToWords(23));
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}

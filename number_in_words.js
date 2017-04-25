function numberToWords(number) {
  // Your code here
  const word = ["","Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  let result = "";
  if (number === 0 ){
    return result;
  } else if (number < 12){
    result = result + word[number] + numberToWords(number - number);
    number = number - number;
  } else if (number > 11 && number < 20){
    result = word[(number-10)] + " Belas " + numberToWords(number - number);
  } else if (number > 20 && number < 100){
    result = word[Math.floor(number/10)] + " Puluh " + numberToWords(number - (Math.floor(number/10)*10));
  } else if (number >= 100 && number < 200){
    result = "Seratus" + numberToWords(number - 100);
  } else if (number >= 200 && number < 1000){
    result = word[Math.floor(number/100)] + " Ratus " + numberToWords(number - (Math.floor(number/100)*100));
  } else if (number >= 1000 && number < 1000000){
    result = numberToWords(Math.floor(number/1000)) + " Ribu " + numberToWords(number - (Math.floor(number/1000)*1000))
  } else if (number >= 1000000 && number < 1000000000){
    result = numberToWords(Math.floor(number/1000000)) + " Juta " + numberToWords(number - (Math.floor(number/1000000)*1000000))
  } else if (number >= 1000000000 && number < 1000000000000){
    result = numberToWords(Math.floor(number/1000000000)) + " Milyar " + numberToWords(number - (Math.floor(number/1000000000)*1000000000))
  } else if (number >= 1000000000000 && number < 1000000000000000){
    result = numberToWords(Math.floor(number/1000000000000)) + " Trilyun " + numberToWords(number - (Math.floor(number/1000000000000)*1000000000000))
  }
  // }
  return result;
}

// Driver code
console.log(numberToWords(723882279659487));

module.exports = {
  numberToWords: numberToWords
}

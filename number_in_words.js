function numberToWords(number) {

  let angka = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

    if(number < angka.length) {
      return `${angka[number]}`;
    }
    if (number < 20) {
      return `${numberToWords(number - 10)} belas`;
    }
    if (number < 100) {
      return `${numberToWords((number - (number % 10))/10)} puluh ${numberToWords(number % 10)}`;
    }
    if (number < 200) {
      return `seratus ${numberToWords(number - 100)}`;
    }
    if (number < 1000) {
      return `${numberToWords((number - (number % 100))/100)} ratus ${numberToWords(number % 100)}`;
    }
    if (number < 2000) {
      return `seribu ${numberToWords(number - 1000)}`;
    }
    if (number < 1000000) {
      return `${numberToWords((number - (number % 1000))/1000)} ribu ${numberToWords(number % 1000)}`;
    }
    if (number < 1000000000) {
      return `${numberToWords((number - (number % 1000000))/100000)} juta ${numberToWords(number % 1000000)}`;
    }
    if (number < 1000000000000) {
      return `${numberToWords((number - (number % 1000000000))/1000000000)} milyar ${numberToWords(number % 1000000000)}`;
    }
    if (number < 1000000000000000) {
      return `${numberToWords((number - (number % 1000000000000))/1000000000000)} triliun ${numberToWords(number % 1000000000000)}`;
    }


}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}

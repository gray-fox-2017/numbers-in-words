function numberToWords(number) {
  // Your code here
  var bilangan = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  var hasil = [];
  var penyebut = ['belas', 'puluh', 'ratus', 'ribu', 'puluh', 'ratus', 'juta', 'puluh', 'ratus', 'milyar', 'puluh', 'ratus', 'triliun', 'puluh', 'ratus']
  var count = 1;

function penyebutAngka(num) {
  if (num/10 < 1.2) {
    count++
    hasil.push(bilangan[num]);
  } else if (num/10 >= 1.2 && num/10 < 2) {
    count++
    hasil.push(bilangan[num%10]);
    hasil.push('belas');

  } else if (num/10 >= 2) {
    count++;
    return penyebutAngka(num/10);
  }

  var angStr = num.toString().split('')
  return angStr;
}


  if (number<=11) {
    return bilangan[number];
  } else {
    return penyebutAngka(number);
  }


}

// Driver code
console.log(numberToWords(124586812));


module.exports = {
  numberToWords: numberToWords
}

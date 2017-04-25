function numberToWords(number) {
  // Your code here
  var bilangan = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  var hasil = [];


function penyebutAngka(num) {
  if (2 > num/10 >= 1) {
    hasil.push(bilangan[num%10]);
    hasil.push('belas');
  } else if (num/10 >= 2 && num/10 < 10 ) {
    hasil.push(bilangan[Math.floor(num/10)]);
    hasil.push('puluh');
    hasil.push(bilangan[num%10]);
  } else if (num/10 >= 10 && num/10 < 100) {
    hasil.push(bilangan[Math.floor(num/100)])
    hasil.push('ratus');
    return penyebutAngka(num%100)
  }
  return hasil.join(' ')
}


  if (number<=11) {
    return bilangan[number];
  } else {
    return penyebutAngka(number);
  }


}

// Driver code
console.log(numberToWords(717));

module.exports = {
  numberToWords: numberToWords
}

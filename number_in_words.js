function numberToWords(number, str=[]) {
  let numArr=number.toString().split('');
  let denominator=Math.pow(10,numArr.length-1);
  let angka;
  switch(Math.floor(number/denominator)) {
    case 1:
      angka='satu';
      break;
    case 2:
      angka='dua';
      break;
    case 3:
      angka='tiga';
      break;
    case 4:
      angka='empat';
      break;
    case 5:
      angka='lima';
      break;
    case 6:
      angka='enam';
      break;
    case 7:
      angka='tujuh';
      break;
    case 8:
      angka='delapan';
      break;
    case 9:
      angka='sembilan';
      break;
  }
  switch(numArr.length) {
    case 2:
      angka+=' puluh';
      break;
    case 3:
      angka+=' ratus';
      break;
    case 4:
      angka+=' ribu';
      break;
    case 5:
      angka+=' puluh';
      break;
    case 6:
      angka+=' ratus';
      break;
    case 7:
      angka+=' juta';
      break;
    case 8:
      angka+=' puluh';
      break;
    case 9:
      angka+=' ratus';
      break;
    case 10:
      angka+=' milyar';
      break;
  }
  str.push(angka);
  if(number<10) {
    return str.join(' ');
  } else {
    return numberToWords(number%denominator, str);
  }
}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}

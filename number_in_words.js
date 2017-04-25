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
    case 5:
    case 8:
    case 11:
      if(number>denominator && number<2*denominator) {
        angka=(number%denominator).toString()[0]+' belas';
        number=number%denominator;
        break;
      } else {
        angka+=' puluh';
        break;
      }
    case 3:
    case 6:
    case 9:
    case 12:
      if(angka=='satu') {
        angka='seratus';
        break;
      } else {
        angka+=' ratus';
        break;
      }
    case 4:
      if(angka=='satu' && str.length==0) {
        angka='seribu';
        break;
      } else {
        angka+=' ribu';
        break;
      }
    case 7:
      angka+=' juta';
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
console.log(numberToWords(121000));

module.exports = {
  numberToWords: numberToWords
}

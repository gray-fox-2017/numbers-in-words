'use strict'

var satuan = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
var orde = ['', 'ribu', 'juta', 'milyar', 'triliun'];

function numberToWords(number) {
  let bagian = [];
  while (number > 0) {
    bagian.push(number % 1000);
    number = Math.floor(number / 1000);
  }

  let ucapan = [];
  for(let i = 0; i < bagian.length; i++) {
    if(bagian[i] / 100 >= 1) {
      ucapan[i] = ' ' + (satuan[Math.floor(bagian[i] / 100)-1] + ' ratus');
      if(Math.floor(bagian[i] / 100) == 1) {
        ucapan.pop();
        ucapan[i] = ('seratus');
      }
      bagian[i] = bagian[i] % 100;
    } else {
      ucapan[i] = '';
    }
    if(bagian[i] >= 20) {
      ucapan[i] += ' ' + (satuan[Math.floor(bagian[i] / 10)-1] + ' puluh');
      bagian[i] = bagian[i] % 10;
    } else {
      ucapan[i] += '';
    }
    if(bagian[i] < 20 && bagian[i] > 0) {
      ucapan[i] += ' ' + (satuan[bagian[i] - 1]);
    } else {
      ucapan[i] += '';
    }
    if(ucapan[i] !== '') ucapan[i] += ' ' + (orde[i]);
  }
  ucapan.reverse();
  if(ucapan[0] == ' satu ribu') ucapan[0] = 'seribu';
  return ucapan.join('');
}

// for(let i = 0; i < 10000; i++) {
//   console.log(numberToWords(i));
// }
console.log(numberToWords(1217));

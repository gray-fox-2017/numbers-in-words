'use strict'

var satuan = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
var orde = ['', ' ribu', ' juta', ' milyar', ' triliun'];

function numberToWords(number, gabung = []) {
  let bagian = number % 1000;

  let ucapan = [];
  if(bagian / 100 >= 1) {
    ucapan.push(satuan[Math.floor(bagian / 100)-1] + ' ratus ');
    if(Math.floor(bagian / 100) == 1) {
      ucapan.pop();
      ucapan.push('seratus ');
    }
  }
  bagian = bagian % 100;

  if(bagian >= 20) {
    ucapan.push(satuan[Math.floor(bagian / 10)-1] + ' puluh ');
    bagian = bagian % 10;
  }

  if(bagian < 20 && bagian > 0) {
    ucapan.push(satuan[bagian - 1]);
  }

  gabung.push(ucapan);

  if(number < 999) {
    for(let i = 0; i < gabung.length; i++) {
      if(gabung[i].join('') !== '') gabung[i].push(orde[i]);
      gabung[i] = gabung[i].join('');
    }
    if(gabung[1] == 'satu ribu') gabung[1] = 'seribu';
    return gabung.reverse().join(' ');
  } else {
    number = Math.floor(number / 1000);
    return numberToWords(number, gabung);
  }
}

// for(let i = 0; i < 10000; i++) {
//   console.log(numberToWords(i));
// }
console.log(numberToWords(3167832123));

module.exports = {
  numberToWords: numberToWords
}

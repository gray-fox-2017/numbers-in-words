function numberToWords(number) {
  // Your code here

  function angkaKeKata(input) {
    var hasil = [];
    var angkaAwal = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
    var unik = ['seratus', 'seribu'];
    var perSepuluh = ['belas', 'puluh', 'ratus', 'ribu', 'puluh', 'ratus', 'juta', 'puluh', 'ratus', 'milyar', 'puluh', 'ratus','trilyun']
    var count = 0;
    var batas = Math.floor(Math.log10(input));

    function selidikAngka(ang) {
      var bat = Math.pow(10,batas);


      if (ang > bat) {
        count++;
        return selidikAngka(ang-bat);
      } else if (bat < ang) {
        hasil.push(angkaAwal[count]);

        if (batas>12) {
          hasil.push(perSepuluh[batas-12]);
        } else {
          hasil.push(perSepuluh[batas]);
          }
        batas--;
        count = 0
        return selidikAngka(ang);
      } else if (ang == bat){
        count++
        hasil.push(angkaAwal[count]);
        hasil.push(perSepuluh[batas]);
        if (batas>3) {
          if (batas%3 === 1) {
            batas--;
            hasil.push(perSepuluh[batas])
          } else if (batas%3 === 2) {
            batas--;
            hasil.push(perSepuluh[batas-1]);
          }
        }
        return hasil
      }
    }

    if (input <= 11) {
      return angkaAwal[input];
    } else {
      return selidikAngka(input);
    }

  }

  var hampir = angkaKeKata(number);

  for (let i=0; i<hampir.length;i++) {
    if (hampir[i] === 'satu') {
      if (hampir[i+1] === 'ratus') {
        hampir.splice(i,2, 'seratus');
      } else if (hampir[i+1] === 'ribu') {
        hampir.splice(i,2, 'seribu')
      } else if (hampir[i+1] === 'puluh' && hampir[i+2] === 'satu') {
        hampir.splice(i,3 , 'sebelas')
      } else if (hampir[i+1] === 'puluh' && hampir[i+2] !== 'satu') {
        hampir.splice(i,2);
      }
    }
  }

  return hampir.join(' ')

}

// Driver code
console.log(numberToWords(124586812));
console.log(numberToWords(500));
console.log(numberToWords(5000));
console.log(numberToWords(50000));
console.log(numberToWords(500000));
console.log(numberToWords(5000023));
console.log(numberToWords(50000000));
console.log(numberToWords(500000000));
console.log(numberToWords(5000000000));
console.log(numberToWords(50000000000));
console.log(numberToWords(500000000000));
console.log(numberToWords(5000000000000));
console.log(numberToWords(55555555555515));
console.log(numberToWords(15));


module.exports = {
  numberToWords: numberToWords
}

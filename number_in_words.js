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
      } else if (ang < bat) {
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
        return hasil
      }
    }
    
    if (input <= 11) {
      return angkaAwal[input];
    } else {
      return selidikAngka(input);
    }
  
  }
  
  var hampir = angkaKeKata(input);
  
  for (let i=0; i<hampir.length;i++) {
    if (hampir[i] === 'satu') {
      if (hampir[i+1] === 'ratus') {
        hampir.splice(i,2, 'seratus');
      } else if (hampir[i+1] === 'ribu') {
        hampir.splice(i,2, 'seribu')
      } else if (hampir[i+1] === 'puluh') {
        hampir.splice(i,3 , 'sebelas')
      }
    }
  }
  
  return hampir.join(' ')
  
}


}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}

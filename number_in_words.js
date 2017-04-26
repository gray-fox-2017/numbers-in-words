function numberToWords(number) {
  // Your code here
<<<<<<< HEAD
  
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


=======
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


>>>>>>> 9ea62c1c56f55136af6d88d6caa9dec73112eb8d
}

// Driver code
console.log(numberToWords(124586812));


module.exports = {
  numberToWords: numberToWords
}

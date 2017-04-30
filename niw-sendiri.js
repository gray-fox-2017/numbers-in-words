function numberToWords(num) {


  var dasar = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan','sembilan', 'sepuluh', 'sebelas']
  var perSepuluh = ['puluh', 'ratus', 'ribu', 'puluh', 'ratus', 'juta']

  function diDalam(input) {
    if (input <= 0) {
      if (count > 0) {
        hasil.push(dasar[count]);
      }
      hasil.push(perSepuluh[pangkat-1]);
      var count = 0;
      pangkat--;
      return hasil.join(' ');

    } else if (input >= pengurang) {
      count++;
      return diDalam(input-=pengurang);

    } else if (input < pengurang) {
      if (count > 0) {
        hasil.push(dasar[count]);
      }
      hasil.push(perSepuluh[pangkat-1]);
      count = 0;
      pangkat--;
      return diDalam(input);
    }
  }

    if (num === 0) {
    return 'nol';
  } else if (num < 12) {
    return dasar[num];
  } else {
    return diDalam(num);
  }

  var hasil = [];
  var count = 0;
  var pangkat = Math.floor(Math.log10(num));
  var pengurang = Math.pow(10, pangkat);



}

console.log(numberToWords(12))

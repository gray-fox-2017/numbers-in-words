function numberToWords(number) {
  // Your code here
    var digits = number.toString().split('');
    let arrBilangan = ["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh"];
    var angkaBilangan = "";
    //Satu digits
    if(digits.length == 1){
      angkaBilangan = arrBilangan[digits[0]]+" Rupiah";
    }
    //Dua Digits
    else if(digits.length == 2){
      if(digits[1] == 0){
        angkaBilangan = arrBilangan[digit[0]]+" Puluh Rupiah";
      }
      else{
          angkaBilangan = arrBilangan[digits[0]]+" Puluh "+arrBilangan[digits[1]]+ " Rupiah";
      }
    }
    //Tiga Digits
    else if(digits.length == 3){
      if(digits[1] == 0 && digits[2] == 0 && digits[0] == 1){
        angkaBilangan = "Seratus Rupiah";
      }
      else if(digits[1] == 0 && digits[2] == 0){
        angkaBilangan = arrBilangan[digits[0]]+" Ratus Rupiah";
      }
    }
    return angkaBilangan;
}

// Driver code
console.log(numberToWords(200));

module.exports = {
  numberToWords: numberToWords
}

function numberToWords(number) {
  // Your code here
  let arrWords = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan","sembilan"]
  let arrSatuan = ["", "puluh", "ratus"];
  let numStrArr = number.toString().split("");

  if (numStrArr.length == 1) {
    return arrWords[number];
  } else {
    let num = arrWords[parseInt(numStrArr[0])];
    let satuan = arrSatuan[numStrArr.length - 1];
    numStrArr.splice(0, 1);
    let updateNum = parseInt(numStrArr.join(""));
    return num + " " + satuan + " " + numberToWords(updateNum);
  }
}

// Driver code
console.log(numberToWords(999));

module.exports = {
  numberToWords: numberToWords
}

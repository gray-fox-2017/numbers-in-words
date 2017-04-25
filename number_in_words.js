function numberToWords(number) {
  // Your code here
  var numWord = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh ', 'sebelas ']

  if(number < 12){
    return numWord[number];
  }else if(number < 20){
    return numWord[number%10] +'belas '
  }else if(number < 100){
    return numWord[Math.floor(number/10)] +'puluh '+numWord[number%10];
  }else if(number < 200){
    return 'seratus '+ numberToWords(number%100);
  }else if(number < 1000){
    return numWord[Math.floor(number/100)]+'ratus '+ numberToWords(number%100);
  }else if(number < 2000){
    return 'seribu '+ numberToWords(number%1000);
  }else if(number < 1000000){
    return numberToWords(Math.floor(number/1000))+'ribu '+ numberToWords(number%1000);
  }else if(number < 1000000000){
    return numberToWords(Math.floor(number/1000000))+'juta '+ numberToWords(number%1000000);
  }else if(number < 1000000000000){
    return numberToWords(Math.floor(number/1000000000))+'miliar '+ numberToWords(number%1000000000);
  }else if(number < 1000000000000000){
    return numberToWords(Math.floor(number/1000000000000))+'triliun '+ numberToWords(number%1000000000000);
  }
}

// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(190909));

// const repl = require('repl');
// const replServer = repl.start({prompt: '>>'})
// replServer.context.number = numberToWords;

module.exports = {
  numberToWords: numberToWords
}

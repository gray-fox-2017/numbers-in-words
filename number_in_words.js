function numberToWords(number) {
  // Your code here
  let words_array = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];
  if(number<20){
    return words_array[number]
  } else if (number < 100) {
    return `${words_array[String(number)[0]]} puluh ${words_array[String(number)[1]]}`
  } else if (number < 200) {
    return `seratus ${numberToWords(number-100)}`
  } else if (number < 1000) {
    return `${words_array[String(number)[0]]} ratus ${numberToWords(number%100)}`
  } else if (number < 2000) {
    return `seribu ${numberToWords(number-1000)}`
  } else if (number < 10000) {
    return `${words_array[String(number)[0]]} ribu ${numberToWords(number%1000)}`
  } else if (number < 20000) {
    return `${words_array[Math.floor(number/1000)]} ribu ${numberToWords(number%1000)}`
  } else if(number<1000000){
    return `${numberToWords(Math.floor(number/1000))} ribu ${numberToWords(number%1000)}`;
  } else if(number<1000000000){
    return `${numberToWords(Math.floor(number/1000000))} juta ${numberToWords(number%1000000)}`;
  } else if(number<1000000000000){
    return `${numberToWords(Math.floor(number/1000000000))} milyar ${numberToWords(number%1000000000)}`;
  } else if(number<1000000000000000){
    return `${numberToWords(Math.floor(number/1000000000000))} triliyun ${numberToWords(number%1000000000000)}`;
  }
}

// Driver code
// console.log('1',numberToWords(1));
// console.log('18',numberToWords(18));
// console.log('45',numberToWords(45));
// console.log('100',numberToWords(100));
// console.log('102',numberToWords(102));
// console.log('117',numberToWords(117));
// console.log('176',numberToWords(176));
// console.log('200',numberToWords(200));
// console.log('201',numberToWords(201));
// console.log('211',numberToWords(211));
// console.log('266',numberToWords(266));
// console.log('999',numberToWords(999));
// console.log('1000',numberToWords(1000));
// console.log('1100',numberToWords(1100));
// console.log('1201',numberToWords(1201));
// console.log('2999',numberToWords(2999));
// console.log('29199',numberToWords(29199));
// console.log('292399',numberToWords(292399));
console.log(numberToWords(90123));
console.log(numberToWords(18871201));
console.log(numberToWords(22900000));

module.exports = {
  numberToWords: numberToWords
}

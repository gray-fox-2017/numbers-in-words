const arrNum1 = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan','sepuluh','sebelas'];
const arrSat = ['', 'ribu', 'juta', 'milyar', 'triliun'];
const arrDpn = ['', 'puluh', 'ratus'];

const strNumDpn = function strNumDpn(strNum) {
  let num = parseInt(strNum);
  let num1 = parseInt(strNum.charAt(0));
  let tl = strNum.length - 1;

  if (num < 12) return arrNum1[num];
  else if (num < 20) return arrNum1[parseInt(strNum.charAt(1))]+' belas';
  else {
    let tmp = (arrNum1[num1]);

    if (tl !== 0 && tmp.startsWith('satu')) tmp = 'se'+ (arrDpn[tl]);
    else tmp += ' '+arrDpn[tl];

    if (tl > 0)
      return tmp+ ' ' +strNumDpn(strNum.substr(1));
  }
}; //endconst strNumDpn

const addSat = function (str,div) {
    if (str.startsWith('satu') && div === 1) return 'seribu';
    else return (str + ' ' +arrSat[div]).trim();
}; //endconst addSat

function numberToWords(num, str = '') {
  let strNum = num.toString();
  let strLen = strNum.length;
  let arrStr = [];
  let mod = ( strLen > 3 ? (strLen % 3) : 0);
  let div = Math.ceil(strLen/3) - 1;
  let strNumD = (mod === 0 ? 3 : mod);
  let tmp = ' ';

  tmp = strNumDpn(strNum.substr(0,strNumD));

  tmp = addSat(tmp.trim(),div);

  str += (' '+tmp);
  str  = str.trim();

  if (strLen > 3) return numberToWords(parseInt(strNum.slice(strNumD)),str);
  else return str;

} //endfunction numberToWords

// Driver code
console.log(numberToWords(1));
console.log(numberToWords(5)); //lima
console.log(numberToWords(10));
console.log(numberToWords(15)); //lima belas
console.log(numberToWords(21));
console.log(numberToWords(1000));
console.log(numberToWords(21000));
console.log(numberToWords(121));
console.log(numberToWords(25)); //dua puluh lima
console.log(numberToWords(250)); //dua ratus lima puluh
console.log(numberToWords(1000)); //seribu
console.log(numberToWords(1121)); //seribu
console.log(numberToWords(2500)); //dua ribu lima ratus
console.log(numberToWords(25000)); //dua puluh lima ribu
console.log(numberToWords(10000));
console.log(numberToWords(100000));
console.log(numberToWords(1345000000000));
console.log(numberToWords(250000)); //dua ratus lima puluh ribu
console.log(numberToWords(2500000)); //dua juta lima ratus ribu
console.log(numberToWords(25000000)); //dua puluh lima juta lima ratus

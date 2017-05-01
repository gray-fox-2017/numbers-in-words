function numberToarrWords(number) {
  var arrWords = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  var result="";

 if (number.toString().length === 1) {
   result += arrWords[number];
 }

 if (number.toString().length === 2) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "sepuluh "
   } else {
     result += arrWords[angkaPertama];
     result += " puluh ";
   }

   number = number - (angkaPertama*10);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 3) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "seratus "
   } else {
     result += arrWords[angkaPertama];
     result += " ratus ";
   }

   number = number - (angkaPertama*100);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 4) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "seribu "
   } else {
     result += arrWords[angkaPertama];
     result += " ribu ";
   }

   number = number - (angkaPertama*1000);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 5) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "sepuluh ribu "
   } else {
     result += arrWords[angkaPertama];
     result += " puluh ";
   }

   number = number - (angkaPertama*10000);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 6) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "seratus "
   } else {
     result += arrWords[angkaPertama];
     result += " ratus ";
   }

   number = number - (angkaPertama*100000);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 7) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "satu juta "
   } else {
     result += arrWords[angkaPertama];
     result += " juta ";
   }

   number = number - (angkaPertama*1000000);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 8) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "sepuluh juta"
   } else {
     result += arrWords[angkaPertama];
     result += " puluh ";
   }

   number = number - (angkaPertama*10000000);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 9) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "seratus juta "
   } else {
     result += arrWords[angkaPertama];
     result += " ratus ";
   }

   number = number - (angkaPertama*100000000);
   return numberToarrWords(number, result);
 }

 if (number.toString().length === 10) {
   let angkaPertama = number.toString()[0];

     result += arrWords[angkaPertama];
     result += " miliar ";

   number = number - (angkaPertama*1000000000);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 11) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "sepuluh "
   } else {
     result += arrWords[angkaPertama];
     result += " puluh ";
   }

   number = number - (angkaPertama*10000000000);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 12) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "seratus "
   } else {
     result += arrWords[angkaPertama];
     result += " ratus ";
   }

   number = number - (angkaPertama*100000000000);
   return result += numberToarrWords(number);
 }

 if (number.toString().length === 13) {
   let angkaPertama = number.toString()[0];

   if (angkaPertama === "1") {
     result += "satu triliun "
   } else {
     result += arrWords[angkaPertama];
     result += " triliun ";
   }

   number = number - (angkaPertama*1000000000000);
   return result += numberToarrWords(number);
 }

 return result;
}

// Driver code
console.log(numberToarrWords(1000000));

module.exports = {
  numberToarrWords: numberToarrWords
}

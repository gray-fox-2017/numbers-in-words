
function in_words(angka, result = []) {
// Your code here
let tampung = angka.toString();
let strings = tampung.split("");

if (strings[0] == "0") {
  if (strings.length > 1) {
    strings.splice(0,1);
    let tam = strings.join("");
    return in_words(tam, result);
  }
  else {
    return result.join(" ");
  }
}

if (strings[0] == "1") {
  result.push("SE");
  if (strings.length == 1) {
    result.pop();
    result.push("SATU");
    return result.join(" ");
  }
  if (strings[1] == "1" && strings.length == 2) {
    result.pop();
    result.push("SEBELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
  if (strings[1] == "2" && strings.length == 2) {
    result.pop();
    result.push("DUA BELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
  if (strings[1] == "3" && strings.length == 2) {
    result.pop();
    result.push("TIGA BELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
  if (strings[1] == "4" && strings.length == 2) {
    result.pop();
    result.push("EMPAT BELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
  if (strings[1] == "5" && strings.length == 2) {
    result.pop();
    result.push("LIMA BELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
  if (strings[1] == "6" && strings.length == 2) {
    result.pop();
    result.push("ENAM BELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
  if (strings[1] == "7" && strings.length == 2) {
    result.pop();
    result.push("TUJUH BELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
  if (strings[1] == "8" && strings.length == 2) {
    result.pop();
    result.push("DELAPAN BELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
  if (strings[1] == "9" && strings.length == 2) {
    result.pop();
    result.push("SEMBILAN BELAS");
    if (strings.length == 2) {
      return result.join(" ");
    }
  }
}
else if (strings[0] == "2") {
  result.push("DUA");
  if (strings.length == 1) {
    return result.join(" ");
  }
}
else if (strings[0] == "3") {
  result.push("TIGA");
  if (strings.length == 1) {
    return result.join(" ");
  }
}
else if (strings[0] == "4") {
  result.push("EMPAT");
  if (strings.length == 1) {
    return result.join(" ");
  }
}
else if (strings[0] == "5") {
  result.push("LIMA");
  if (strings.length == 1) {
    return result.join(" ");
  }
}
else if (strings[0] == "6") {
  result.push("ENAM");
  if (strings.length == 1) {
    return result.join(" ");
  }
}
else if (strings[0] == "7") {
  result.push("TUJUH");
  if (strings.length == 1) {
    return result.join(" ");
  }
}
else if (strings[0] == "8") {
  result.push("DELAPAN");
  if (strings.length == 1) {
    return result.join(" ");
  }
}
else if (strings[0] == "9") {
  result.push("SEMBILAN");
  if (strings.length == 1) {
    return result.join(" ");
  }
}

if (strings.length == 2 || strings.length == 5 || strings.length == 8 || strings.length == 11 || strings.length == 14) {
  result.push("PULUH");
  if (angka == 10000000) {
    result.push("JUTA");
  }
  if (angka == 10000000000) {
    result.push("MILIAR");
  }
  if (angka == 10000000000000) {
    result.push("TRILIUN");
  }
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}
if (strings.length == 3 || strings.length == 6 || strings.length == 9 || strings.length == 12 || strings.length == 15) {
  result.push("RATUS");
  if (angka == 100000000) {
    result.push("JUTA");
  }
  if (angka == 100000000000) {
    result.push("MILIAR");
  }
  if (angka == 100000000000000) {
    result.push("TRILIUN");
  }
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 4) {
  result.push("RIBU");
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 5) {
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 6) {
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 7) {
  result.push("JUTA");
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 8) {
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 9) {
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 10) {
  result.push("MILIAR");
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 11) {
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 12) {
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 13) {
  result.push("TRILIUN");
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 14) {
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}

if (strings.length == 15) {
  strings.splice(0,1);
  let tam = strings.join("");
  return in_words(tam, result);
}
}

// Driver code

console.log(in_words(4));
console.log(in_words(12));
console.log(in_words(120));
console.log(in_words(3111));

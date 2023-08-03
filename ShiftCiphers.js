function rot13(str) {
  let split = str.split("");

  for (let i = 0; i < split.length; i++) {
    let char = split[i];
    let charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      charCode += 13;
      if (charCode > 90) {
        charCode -= 26;
      }
      split[i] = String.fromCharCode(charCode);
    }
  }
  return split.join("");
}

console.log(rot13("SERR PBQR PNZC"));

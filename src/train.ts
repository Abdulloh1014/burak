console.log("Train ishga tushdi!");

// function getPositive(son: number[]) {
//     return son
//   .filter(raqam => raqam > 0 && Number.isInteger(raqam))
//   .join('');
//  }
// console.log("Javob:", JSON.stringify(getPositive([1, 7.3, 9, -5, 1.3, 9, -23, 9.1, 4, -12])));



function getDigits(son: String) {
    return son
    .split('')           // split('') --> stingni harflarga bo'lyabti
  .filter(r => /\d/.test(r))
  .join('');
 }
console.log("Javob:", JSON.stringify(getDigits("a08b87d")));


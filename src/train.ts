console.log("Train ishga tushdi!");


/* Project Standards:
 - Logging standards
 - Naming standards
    function, method, variable.    =>  CAMEL    =>. goHome
    class => PASCAL                =>. MemberService
    folder => KEBAB
   css => SNAKE                    => button_style

   -= Error handling
*/


// Authentication — bu **foydalanuvchini kimligini tekshirish jarayoni** (masalan, login orqali).
// Sessions authentication — bu foydalanuvchi login qilgach, server **sessiyada ma’lumot saqlab**, keyingi so‘rovlarni **shu sessiya orqali tekshirish** usuli.







// Request API 
/**
 * Traditinal API.      Burakda foydalanamiz
 * Rest API             Burakda foydalanimiz
 * GraphQL API
 
 */

/**
   Tradition FD --> SSR (ADMIN) --> EJS
      Modern FD --> SSR (USER) --> REACT
 */


/**
 *  Cookies:
 * request join
 * self deestroy
 */

/**
 * Validation: 
 * 1) Frontend validation
 * 2) Backent validation
 * 3) Database validation
 */



// ====================================== TASK ===============================================


// function getPositive(son: number[]) {
//     return son
//   .filter(raqam => raqam > 0 && Number.isInteger(raqam))
//   .join('');
//  }
// console.log("Javob:", JSON.stringify(getPositive([1, 7.3, 9, -5, 1.3, 9, -23, 9.1, 4, -12])));



// function getDigits(son: String) {
//     return son
//     .split('')           // split('') --> stingni xar bir belgiga ajratyabti
//   .filter(r => /\d/.test(r))
//   .join('');
//  }
// console.log("Javob:", JSON.stringify(getDigits("a08b87d")));




// function majorityElement(...arr: number[]): number {
//   const count: Record<number, number> = {};
//   let maxNum = arr[0], maxCount = 0;

//   for (const n of arr) {
//     count[n] = (count[n] || 0) + 1;
//     if (count[n] > maxCount) {
//       maxCount = count[n];
//       maxNum = n;
//     }
//   }

//   return maxNum;
// }
// console.log("Javob:", majorityElement(4, 7, 22, 5, 1, 7, 9)); 




// TASK - J !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function findLongestWord(soz: String) {
//     const natija = soz.split(' ').reduce((a, b) => (b.length > a.length ? b : a))
//     return natija;

// }
// console.log("Javob:", findLongestWord("I came from Uzbekistan!")); 


// 


// function findLongestWord(soz: String) {
//  return (soz.match(/[aeiouAEIOU]/g) || []).length;

// }
// console.log("Javob:", findLongestWord("Uzbekistan!")); 



// function reverseSentence(soz: String) {
//     const natija = soz
//     .split(' ')
//     .map(gap => gap.split('').reverse().join(''))
//     .join(' ');
//     return natija;

// }
// console.log("Javob:", reverseSentence("we like coding")); 




// TASK - M !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function getSquareNumbers(son: number[]) {
//     return son.map(r => ({ number: r, square: r ** 2 }));
// }
// console.log("Javob:", JSON.stringify(getSquareNumbers([9, 5, 2, 4, 3, 7])));





// TASK - N !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function palindromCheck(soz: string) {
//   return soz === soz.split('').reverse().join('');
// };
// console.log(palindromCheck("aka"));  
// console.log(palindromCheck("uka"));  




// TASK - O !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function calculateSumOfNumbers(son: any[]): number {
//     return son.reduce((sum, item) => 
//         typeof item === "number" ? sum + item : sum
//     , 0);
// }

// console.log("Javob:",calculateSumOfNumbers([17, "10", {son: 11}, true, 35])); 




// TASK - P !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function objectToArray(son: {a: number, b: number, c: number}) {
//      return Object.entries(son)
// }

// console.log(objectToArray({a: 99, b: 11, c: 55}))





// TASK - Q !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function hasProperty (bir: object, ikki: string) {
//    return  ikki in bir;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));





// TASK - R !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function calculate (son: string) {
//        return son.split(/[^0-9]+/).filter(Boolean).map(Number).reduce((acc, num) => acc + num)
// }

// console.log(calculate("55+45"));

// // reuslt: 100



// TASK - S !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function missingNumber(a: number[]) {
//   return (a.length + 1) * a.length / 2 - a.reduce((s, n) => s + n, 0);
// }
// console.log(missingNumber([3, 0, 1])); 







// TASK - T !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**TASK T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda. */

// function mergeSortedArrays( bir: number[], ikki: number[]): number[] {
//   return [...bir, ...ikki].sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([4, 7, 41, 1, 9], [22, 3, 67, 8, 10]));
// // result: [1, 3, 4, 7, 8, 9, 10, 22, 41, 67]






// TASK - U !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda. */

// function sumOdds(n: number): number {
//   return Math.floor(n / 2);
// }

// console.log(sumOdds(7));   //  3
// console.log(sumOdds(15));  //  7
// console.log(sumOdds(22));  //  11




// TASK - V !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.


// function countChars(soz: string): Record<string, number> {
//   let obj: Record<string, number> = {};
    

//   for (let x of soz) {
//     obj[x] = (obj[x] || 0) + 1;
//   }


//   return obj;

// }

// console.log(countChars("MacBook"))        // result: { M: 1, a: 1, c: 1, B: 1, o: 2, k: 1 }





// TASK - W !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function chunkArray ( raqam: number[], uch: number) {
//   const res: number[][] = [];
//   for (let i = 0; i < raqam.length; i += uch) res.push(raqam.slice(i, i + uch));
//   return res;
// }

// console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3))





// TASK - X !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda


// function countOccurrences(obj: any, key: string): number {
//   let c = 0;
//   for (let k in obj) {
//     if (k === key) c++;
//     if (typeof obj[k] === "object") c += countOccurrences(obj[k], key);
//   }
//   return c;
// }

// console.log("result:",
//   countOccurrences(
//     { model: "Bugatti", steer: { model: "HANKOOK", size: 30 }, maxSpeed: { model: 280} },
//     "model"
//   )
// );       





// TASK - Y !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.
   


function findIntersection(a: number[], b: number[]) {
  const j: number[] = [];
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) j.push(a[i]);
  }
  return j;
}

console.log("result:",findIntersection([1,3,9,5,9,7,4], [1,9,23,9,4,])); 

// result: [ 1, 9, 9, 4 ]



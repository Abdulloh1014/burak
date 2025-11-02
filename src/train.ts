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

function palindromCheck(soz: string) {
  return soz === soz.split('').reverse().join('');
};
console.log(palindromCheck("aka"));  
console.log(palindromCheck("uka"));  

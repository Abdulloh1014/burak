console.log("Train ishga tushdi!");

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


/* Project Standards:
 - Logging standards
 - Naming standards
    function, method, variable => CAMEL    =>. goHome
    class => PASCAL              =>. MemberService
    folder => KEBAB
   css => SNAKE                    => button_style

   -= Error handling
*/

// Eng ko'p ishlatiladigan API lar
/**
 * Traditinal API.      Burakda foydalanamiz
 * Rest API             Burakda foydalanimiz
 * GraphQL API
 * 
 */



/**
   Tradition FD --> SSR (ADMIN) --> EJS
      Modern FD --> SSR (USER) --> REACT

 * 
 */





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
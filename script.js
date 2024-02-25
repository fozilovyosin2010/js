// // class task1
// // task#1
// function perimeter(a) {
//   console.log(a * 4);
// }
// perimeter(4);
// // task#2
// let squareArea = function (a) {
//   console.log(a * a);
// };
// squareArea(7);
// // task#3

// function midNum(a, b) {
//   console.log((a + b) / 2);
// }
// midNum(10, 30);
// // task#4
// let number = (a) => {
//   console.log(a % 2 == 0 ? "3" : "4");
// };
// number(2);
// // task#5

// function calculate(a) {
//   console.log(17 * a * a - 6 * a + 13);
// }
// calculate(10);
// // task#6

// let longest = function (h, m, s) {
//   h *= 3600;
//   m *= 60;
//   console.log(h > m && s ? h / 3600 : m > h && s ? m / 60 : s);
// };
// longest(15, 955, 594000);
// // task7
// function same(a, b, c) {
//   console.log(
//     (a && b === a) || (b && c === b) || (c && a === a) ? true : false
//   );
// }
// same(8, 1, 0);

// task#8
let largestSwap = function (number) {
  let c = "";
  for (let i = number; i >= 1; parseInt((i /= 10))) {
    c += parseInt(i % 10);
  }
  return c < number ? true : false;
};
console.log(largestSwap(53));
// task#9
// let calc = (value) => {
//   let c = 0;
//   for (let i = 0; i <= value; i++) {
//     c += i;
//   }
//   return c;
// };
// console.log(calc(5));
// task#10
// function deference(a, b, c) {
//   console.log(a && b !== c ? c : b && c !== a ? a : a && c !== b ? b : null);
// }
// deference(897, 897, 2);
// task#11

// function evenNum(a, b) {
//   let c = 0;
//   for (let i = a; i >= b; i--) {
//     if (i % 2 === 0) {
//       c += i;
//     }
//   }
//   for (let i = a; i <= b; i++) {
//     if (i % 2 === 0) {
//       c += i;
//     }
//   }

//   return c;
// }
// console.log(evenNum(-14, -18));

// task#12
// let sum = (n, k) => {
//   let c = 0;
//   for (let i = 1; i <= n; i++) {
//     c += Math.pow(i, k);
//   }
//   return c;
// };
// console.log(sum(5, 3));
// console.log(sum(1, 1));
// console.log(sum(4, 3));

// task#13
// let maxNum = function (num) {
//   let c = 0;
//   let max = -1;
//   for (let i = num; i >= 1; parseInt((i /= 10))) {
//     c = parseInt(i % 10);
//     if (c > max) {
//       max = c;
//     }
//   }
//   return max;
// };
// console.log(maxNum(7182));

//  task#14
// function isSymmetrical(num) {
//   let c = "";
//   for (let i = num; i >= 1; parseInt((i /= 10))) {
//     c += parseInt(i % 10);
//   }
//   return c == num ? true : false;
// }
// console.log(isSymmetrical(7227));
//  task#15

let addDigits = (num) => {
  let c = 0;
  for (let i = num; i >= 1; parseInt((i /= 10))) {
    c = parseInt(i % 10) + parseInt((i /= 10));
    if (c > 9) {
      c = parseInt(c % 10) + parseInt(c / 10);
    }
  }
  return c;
};
console.log(addDigits(38));

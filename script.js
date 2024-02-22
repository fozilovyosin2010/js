// class task1
// task#1
function perimeter(a) {
  console.log(a * 4);
}
perimeter(4);
// task#2
let squareArea = function (a) {
  console.log(a * a);
};
squareArea(7);
// task#3

function midNum(a, b) {
  console.log((a + b) / 2);
}
midNum(10, 30);
// task#4
let number = (a) => {
  console.log(a % 2 == 0 ? "3" : "4");
};
number(2);
// task#5

function calculate(a) {
  console.log(17 * a * a - 6 * a + 13);
}
calculate(10);
// task#6

let longest = function (h, m, s) {
  h *= 3600;
  m *= 60;
  console.log(h > m && s ? h / 3600 : m > h && s ? m / 60 : s);
};
longest(15, 955, 594000);
// task7
function same(a, b, c) {
  console.log(
    (a && b === a) || (b && c === b) || (c && a === a) ? true : false
  );
}
same(8, 1, 0);

// task#8

// unsolved

// task#9
let calc = (value) => {
  let c = 0;
  for (let i = 0; i <= value; i++) {
    c += i;
  }
  return c;
};
console.log(calc(5));
// task#10
function deference(a, b, c) {
  console.log(a && b !== c ? c : b && c !== a ? a : a && c !== b ? b : null);
}
deference(897, 897, 2);
// task#11
let resEven = function (num1, num2) {
  console.log(
    num1 && num2 > 0
      ? "negative nums pls"
      : num1 && num2 < 0 && (num1 + num2) % 2 == 0
      ? (num1 + num2) / 2
      : 0
  );
};
resEven(-1, -1);

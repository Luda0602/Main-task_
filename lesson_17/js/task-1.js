//Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості
// додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

"use strict";
class ArrayOperations {
  static countPositive(arr) {
    let count = 0;
    for (const num of arr) {
      if (num > 0) {
        count++;
      }
    }
    return count;
  }
  static countNegative(arr) {
    let count = 0;
    for (const num of arr) {
      if (num < 0) {
        count++;
      }
    }
    return count;
  }
  static countOccurrences(arr, target) {
    let count = 0;
    for (const num of arr) {
      if (num === target) {
        count++;
      }
    }
    return count;
  }
}
document.write(String(ArrayOperations.countPositive([-1, 10, 3])) + "<br>");
document.write(
  String(ArrayOperations.countNegative([-3, -7, -8, 10, 2, 3])) + "<br>",
);
document.write(String(ArrayOperations.countOccurrences([7, 3, 7], 7)));
//# sourceMappingURL=task-1.js.map

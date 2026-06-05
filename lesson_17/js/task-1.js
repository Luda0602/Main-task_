/*Створити клас, що дозволяє виконувати такі операції над масивами: 
знаходження кількості додатних, кількості від’ємних, кількість входжень 
деякого числа (статичні методи)*/
class ArrayOperations {
  static countPositive(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        count++;
      }
    }

    return count;
  }

  static countNegative(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }

    return count;
  }

  static countOccurrences(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
      }
    }

    return count;
  }
}

document.write(ArrayOperations.countPositive([-1, 10, 3]) + "<br>"); // 2
document.write(ArrayOperations.countNegative([-3, -7, -8, 10, 2, 3]) + "<br>"); // 3
document.write(ArrayOperations.countOccurrences([7, 3, 7], 7)); // 2

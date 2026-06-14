//Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було
// створити тільки один екземпляр цього класу.

"use strict";
class Car {
  static companyCar = null;
  driver;
  brand;
  number;
  constructor(driver, brand, number) {
    if (Car.companyCar) {
      return Car.companyCar;
    }
    this.driver = driver;
    this.brand = brand;
    this.number = number;
    Car.companyCar = this;
  }
  toString() {
    return `Водій: ${this.driver}, марка: ${this.brand}, номер: ${this.number}`;
  }
}
const car1 = new Car("Іван", "Toyota", "AA1234BB");
const car2 = new Car("Петро", "BMW", "BC5678CA");
document.write(car1.toString() + "<br>");
document.write(car2.toString() + "<br>");
document.write(String(car1 === car2));
//# sourceMappingURL=task-2.js.map

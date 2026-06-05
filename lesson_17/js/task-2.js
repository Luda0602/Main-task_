/*Створити службове авто (водій, марка, номер). Створити клас таким чином, 
щоб можна було створити тільки один екземпляр цього класу.*/
class Car {
  static companyCar = null;

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

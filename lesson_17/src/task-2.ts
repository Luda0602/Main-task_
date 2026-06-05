class Car {
  private static companyCar: Car | null = null;

  private driver!: string;
  private brand!: string;
  private number!: string;

  constructor(driver: string, brand: string, number: string) {
    if (Car.companyCar) {
      return Car.companyCar;
    }

    this.driver = driver;
    this.brand = brand;
    this.number = number;

    Car.companyCar = this;
  }

  toString(): string {
    return `Водій: ${this.driver}, марка: ${this.brand}, номер: ${this.number}`;
  }
}

const car1 = new Car("Іван", "Toyota", "AA1234BB");
const car2 = new Car("Петро", "BMW", "BC5678CA");

document.write(car1.toString() + "<br>");
document.write(car2.toString() + "<br>");
document.write(String(car1 === car2));

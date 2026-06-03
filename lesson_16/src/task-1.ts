"use strict";

class Backpack {
  #weight: number;
  #items: number;

  constructor(weight: number, items: number) {
    this.#weight = weight;
    this.#items = items;
  }

  addItem(itemWeight: number): string {
    if (this.#weight + itemWeight <= 10) {
      this.#weight += itemWeight;
      this.#items++;

      return `Додано предмет вагою ${itemWeight} кг`;
    } else {
      return "Неможливо додати";
    }
  }

  toString(): string {
    return `Вага: ${this.#weight} кг, предметів: ${this.#items}`;
  }
}

const backpack: Backpack = new Backpack(0, 0);

document.write(backpack.toString() + "<br>");
document.write(backpack.addItem(3) + "<br>");
document.write(backpack.addItem(4) + "<br>");
document.write(backpack.addItem(5) + "<br>");
document.write(backpack.toString() + "<br>");

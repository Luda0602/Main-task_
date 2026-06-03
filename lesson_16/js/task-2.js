"use strict";
class Shop {
  #stock;
  #revenue;

  constructor(stock, revenue) {
    this.#stock = stock;
    this.#revenue = revenue;
  }

  sellProduct(productName, count, price) {
    const product = this.#stock.find((item) => item.name === productName);

    if (!product) {
      return "Такого товару немає";
    }

    if (product.count < count) {
      return "Недостатньо товару на складі";
    }

    product.count -= count;
    this.#revenue += count * price;

    return `Продано ${count} шт. товару ${productName}`;
  }

  toString() {
    const productsInfo = this.#stock
      .map((item) => `${item.name}: ${item.count} шт.`)
      .join(", ");

    return `Товари: ${productsInfo}. Виручка: ${this.#revenue} грн`;
  }
}

const shop = new Shop(
  [
    { name: "Хліб", count: 20 },
    { name: "Молоко", count: 15 },
    { name: "Сир", count: 8 },
  ],
  0,
);

document.write(shop.toString() + "<br>");
document.write(shop.sellProduct("Молоко", 3, 40) + "<br>");
document.write(shop.sellProduct("Сир", 10, 100) + "<br>");
document.write(shop.toString() + "<br>");

"use strict";

type Product = {
  name: string;
  count: number;
};

class Shop {
  #stock: Product[];
  #revenue: number;

  constructor(stock: Product[], revenue: number) {
    this.#stock = stock;
    this.#revenue = revenue;
  }

  sellProduct(productName: string, count: number, price: number): string {
    const product: Product | undefined = this.#stock.find(
      (item: Product) => item.name === productName,
    );

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

  toString(): string {
    const productsInfo: string = this.#stock
      .map((item: Product) => `${item.name}: ${item.count} шт.`)
      .join(", ");

    return `Товари: ${productsInfo}. Виручка: ${this.#revenue} грн`;
  }
}

const shop: Shop = new Shop(
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

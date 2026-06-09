"use strict";
class Backpack {
    #weight;
    #items;
    constructor(weight, items) {
        this.#weight = weight;
        this.#items = items;
    }
    addItem(itemWeight) {
        if (this.#weight + itemWeight <= 10) {
            this.#weight += itemWeight;
            this.#items++;
            return `Додано предмет вагою ${itemWeight} кг`;
        }
        else {
            return "Неможливо додати";
        }
    }
    toString() {
        return `Вага: ${this.#weight} кг, предметів: ${this.#items}`;
    }
}
const backpack = new Backpack(0, 0);
document.write(backpack.toString() + "<br>");
document.write(backpack.addItem(3) + "<br>");
document.write(backpack.addItem(4) + "<br>");
document.write(backpack.addItem(5) + "<br>");
document.write(backpack.toString() + "<br>");
//# sourceMappingURL=task-1.js.map
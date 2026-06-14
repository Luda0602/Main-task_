//Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval)
// програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер
// скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно
// декілька

"use strict";
class Reminder {
  static instance = null;
  message;
  seconds;
  count;
  timerId;
  constructor(message, seconds) {
    if (Reminder.instance) {
      return Reminder.instance;
    }
    this.message = message;
    this.seconds = seconds;
    this.count = 0;
    this.timerId = null;
    Reminder.instance = this;
  }
  start() {
    if (this.timerId !== null) {
      return;
    }
    this.timerId = setInterval(() => {
      this.count++;
      document.write(`${this.count}. ${this.message}<br>`);
    }, this.seconds * 1000);
  }
  stop() {
    if (this.timerId === null) {
      return;
    }
    clearInterval(this.timerId);
    this.timerId = null;
  }
  changeMessage(newMessage) {
    this.message = newMessage;
  }
}
const reminder1 = new Reminder("Зробити перерву", 2);
const reminder2 = new Reminder("Випити води", 1);
console.log(reminder1 === reminder2);
reminder1.start();
setTimeout(() => {
  reminder1.changeMessage("Випити води");
}, 6000);
setTimeout(() => {
  reminder1.stop();
}, 12000);
//# sourceMappingURL=task-3.js.map

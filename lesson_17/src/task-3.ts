class Reminder {
  private static instance: Reminder | null = null;

  private message!: string;
  private seconds!: number;
  private count!: number;
  private timerId!: ReturnType<typeof setInterval> | null;

  constructor(message: string, seconds: number) {
    if (Reminder.instance) {
      return Reminder.instance;
    }

    this.message = message;
    this.seconds = seconds;
    this.count = 0;
    this.timerId = null;

    Reminder.instance = this;
  }

  start(): void {
    if (this.timerId !== null) {
      return;
    }

    this.timerId = setInterval(() => {
      this.count++;
      document.write(`${this.count}. ${this.message}<br>`);
    }, this.seconds * 1000);
  }

  stop(): void {
    if (this.timerId === null) {
      return;
    }

    clearInterval(this.timerId);
    this.timerId = null;
  }

  changeMessage(newMessage: string): void {
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

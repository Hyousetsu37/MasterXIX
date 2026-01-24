console.log(
  "%c ************** DELIVERABLE 05 *********************",
  "background: rgba(91, 11, 182, 0.87); font-size: 20px; color: white;",
);

console.log(
  "%c----- SLOTMACHINE ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);

class SlotMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }

  addCoins(): void {
    this.coins += 1;
  }

  resetCoins(): void {
    this.coins = 0;
  }

  play(): string {
    this.addCoins();
    const firstRoulete = Math.random() > 0.5 ? true : false;
    const secondRoulete = Math.random() > 0.5 ? true : false;
    const thirdRoulete = Math.random() > 0.5 ? true : false;

    console.log(firstRoulete, secondRoulete, thirdRoulete);

    if (firstRoulete && secondRoulete && thirdRoulete) {
      const message = `"Congratulations!!!. You won ${this.coins} coins!!"`;
      this.resetCoins();
      return message;
    } else {
      return "Good luck next time!!";
    }
  }
}

const machine1 = new SlotMachine();
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());

console.log(
  "%c ************** CHALLENGES *********************",
  "background: rgba(37, 189, 6, 0.87); font-size: 20px; color: white;",
);

console.log(
  "%c----- CHALLENGE 1 ---- ",
  "background: rgb(174, 89, 10); font-size: 16px; color: white;",
);
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers) => {
  triggers.forEach(async (t, i) => {
    await delay(i * 150);
    t();
  });
  await showMessage([300, "first"]);
};

run(triggers);
await delay(300);

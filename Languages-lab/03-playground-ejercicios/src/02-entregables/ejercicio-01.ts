console.log(
  "%c ************** DELIVERABLE 01 *********************",
  "background: rgba(91, 11, 182, 0.87); font-size: 20px; color: white;",
);

const numArray: number[] = [1, 2, 3];
const stringArray: string[] = ["A", "B", "C"];
console.log(
  "%c----- HEAD ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);
const head = <T>(arr: T[]): T => {
  const [first, _] = arr;
  return first;
};
console.log(
  `Trying head with ${JSON.stringify(numArray)}, Result: ${head(numArray)}`,
);
console.log(
  `Trying head with ${JSON.stringify(stringArray)}, Result: ${head(stringArray)}`,
);

console.log(
  "%c----- TAIL ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);
const tail = <T>([, ...arr]: T[]): T[] => {
  return arr;
};
console.log(
  `Trying tail with ${JSON.stringify(numArray)}, Result: ${JSON.stringify(tail(numArray))}`,
);
console.log(
  `Trying tail with ${JSON.stringify(stringArray)}, Result: ${JSON.stringify(tail(stringArray))}`,
);

console.log(
  "%c----- INIT ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);

const init = <T>(arr: T[]): T[] => {
  return arr.toSpliced(-1, 1);
};
console.log(
  `Trying init with ${JSON.stringify(numArray)}, Result: ${JSON.stringify(init(numArray))}`,
);
console.log(
  `Trying init with ${JSON.stringify(stringArray)}, Result: ${JSON.stringify(init(stringArray))}`,
);

console.log(
  "%c----- INIT ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);

const last = <T>(arr: T[]): T => {
  return arr.at(-1);
};
console.log(
  `Trying last with ${JSON.stringify(numArray)}, Result: ${last(numArray)}`,
);
console.log(
  `Trying last with ${JSON.stringify(stringArray)}, Result: ${last(stringArray)}`,
);

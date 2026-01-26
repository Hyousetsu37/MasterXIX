import { delay } from "./reto-01.js";

console.log(
  "%c----- CHALLENGE 3 ---- ",
  "background: rgb(174, 89, 10); font-size: 16px; color: white;",
);

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flatten = <T>(arr: T[] | T[][]): T[] => {
  let temp = [];
  let stillArray = false;
  arr.forEach((el) => {
    if (typeof el === "object") {
      temp = [...temp, ...el];
      stillArray = true;
    } else {
      temp = [...temp, el];
    }
  });
  if (stillArray) {
    temp = flatten(temp);
  }
  return temp;
};

console.log(
  `Flattening the sample: ${JSON.stringify(sample)}, result: ${JSON.stringify(flatten(sample))}`,
);

delay(315);

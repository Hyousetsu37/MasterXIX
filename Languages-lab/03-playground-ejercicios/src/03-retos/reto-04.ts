import { delay } from "./reto-01.js";

console.log(
  "%c----- CHALLENGE 4 ---- ",
  "background: rgb(174, 89, 10); font-size: 16px; color: white;",
);

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

console.log(
  "%c----- APARTADO A ---- ",
  "background: rgb(174, 152, 10); font-size: 16px; color: white;",
);

const memoize = <T>(func: () => T): (() => T) => {
  let result: T;
  result = func();
  return () => {
    return result;
  };
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

console.log(
  "%c----- APARTADO B ---- ",
  "background: rgb(174, 152, 10); font-size: 16px; color: white;",
);

const memoizeOne = <T>(func: () => T): (() => T) => {
  const res = func();
  return () => res;
};

/* const memoizeOne = (func) =>
  (
    (res) => () =>
      res ?? (res = func())
  )(null);
 */
const memoizedOne = memoizeOne(expensiveFunction);
console.log(memoizedOne()); // Una única llamada // 3.1415
console.log(memoizedOne()); // 3.1415
console.log(memoizedOne()); // 3.1415

console.log(
  "%c----- APARTADO C ---- ",
  "background: rgb(174, 152, 10); font-size: 16px; color: white;",
);

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++,
  `${text} `.repeat(repetitions).trim()
);

const memoizeArg = <Args extends string[] | number[] | boolean[], T>(
  func: (...Args) => T,
): ((...Args) => T) => {
  const results = new Map<string, T>();
  return (...arg) => {
    const key = JSON.stringify(arg);
    if (results.has(key)) {
      return results.get(key);
    } else {
      const tempRes = func(...arg);
      results.set(key, tempRes);
      return tempRes;
    }
  };
};

const memoizedGreet = memoizeArg(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2

delay(320);

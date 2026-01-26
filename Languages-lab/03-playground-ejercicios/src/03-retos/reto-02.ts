import { delay } from "./reto-01.js";

console.log(
  "%c----- CHALLENGE 2 ---- ",
  "background: rgb(174, 89, 10); font-size: 16px; color: white;",
);

console.log(
  "%c----- APARTADO A ---- ",
  "background: rgb(174, 152, 10); font-size: 16px; color: white;",
);

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = <T extends object>(obj: T, ...keys: string[]) => {
  let currentObbjFragment = structuredClone(obj);
  if (keys.length === 0) {
    return currentObbjFragment;
  } else {
    keys.forEach((key) => {
      if (typeof currentObbjFragment[key] !== "object") {
        currentObbjFragment = currentObbjFragment[key];
      } else {
        currentObbjFragment = structuredClone(currentObbjFragment[key]);
      }
    });
  }
  return currentObbjFragment;
};
console.log(
  `deepGet(myObject, "x") | Should get underfined | Result: ${JSON.stringify(deepGet(myObject, "x"))}`,
); // undefined
console.log(
  `deepGet(myObject, "a")  | Should get 1 | Result:  ${JSON.stringify(deepGet(myObject, "a"))}`,
); // 1
console.log(
  ` deepGet(myObject, "b") | Should get { c: null, d: {....}} | Result: ${JSON.stringify(deepGet(myObject, "b"))}`,
); // { c: null, d: {....}}
console.log(
  ` deepGet(myObject, "b", "c") | Should get null | Result:  ${JSON.stringify(deepGet(myObject, "b", "c"))}`,
); // null
console.log(
  ` deepGet(myObject, "b", "d", "f", "g")  | Should get bingo | Result:  ${JSON.stringify(deepGet(myObject, "b", "d", "f", "g"))}`,
); // bingo
console.log(
  ` deepGet(myObject) | Should get myObject | Result:  ${JSON.stringify(deepGet(myObject))}`,
); // {a: 1, b: {...}}

console.log(
  "%c----- APARTADO B ---- ",
  "background: rgb(174, 152, 10); font-size: 16px; color: white;",
);

const newObj = {};

console.log("aaaa");

/* const deepSetTest = (valueToSave, obj, ...arg) => {
  if (arg.length === 0) {
    return obj;
  }
  const entries = new Map([[arg.at(-1), valueToSave]]);
  arg.pop();
  const keys = arg.toReversed();
  const lastObj = Object.fromEntries(entries);

  if (arg.length === 0) {
    console.log(obj);
    console.log(structuredClone(lastObj));
    obj = structuredClone(lastObj);
    console.log(obj);
    console.log(newObj);
  } else {
    keys.forEach((key) => {
      const temp =
        obj[key] === undefined ? lastObj : { ...obj[key], ...lastObj };
      obj[key] = temp;
    });
  }
}; */

const deepSet = (valueToSave, obj, ...arg) => {
  if (arg.length === 0) {
    return;
  } else if (arg.length === 1) {
    obj[arg[0]] = valueToSave;
  } else {
    let temp = obj;
    arg.forEach((key, index) => {
      if (index === arg.length - 1) {
        temp[key] = valueToSave;
      } else {
        temp[key] = temp[key] === undefined ? {} : temp[key];
        temp = temp[key];
      }
    });
  }
};

deepSet(1, newObj, "a", "b");
console.log(JSON.stringify(newObj)); // {a: { b: 1}}
deepSet(2, newObj, "a", "c");
console.log(JSON.stringify(newObj)); // {a: { b: 1, c: 2}}
deepSet(3, newObj, "a");
console.log(JSON.stringify(newObj)); // {a: 3}
deepSet(4, newObj);
console.log(JSON.stringify(newObj)); // Do nothing // {a: 3}

delay(310);

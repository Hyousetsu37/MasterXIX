console.log(
  "%c ************** DELIVERABLE 03 *********************",
  "background: rgba(91, 11, 182, 0.87); font-size: 20px; color: white;",
);

interface PersonA {
  name: string;
  surname: string;
  country: string;
}

interface PersonB {
  name: string;
  age: number;
  married: boolean;
}

const a: PersonA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: PersonB = { name: "Luisa", age: 31, married: true };

console.log(
  "%c----- CLONE ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);

function clone<T extends object>(source: T): T {
  return structuredClone(source);
}

const clone1 = clone(a);

clone1.name = "New Name";

console.log(`Original: ${JSON.stringify(a)}`);
console.log(
  `Cloned, and changed Name to test references: ${JSON.stringify(clone1)}`,
);

console.log(
  "%c----- MERGE ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);

function merge<Source extends object, Target extends object>(
  source: Source,
  target: Target,
) {
  return { ...clone(target), ...clone(source) };
}

console.log(merge(a, b));

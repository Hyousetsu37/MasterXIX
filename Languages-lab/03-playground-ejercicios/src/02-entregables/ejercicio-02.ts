console.log(
  "%c ************** DELIVERABLE 02 *********************",
  "background: rgba(91, 11, 182, 0.87); font-size: 20px; color: white;",
);

const numArray: number[] = [1, 2, 3];
const stringArray: string[] = ["A", "B", "C"];
const boolArray: boolean[] = [true, false, false];

console.log(
  "%c----- CONCAT ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);

const concat = <T, Y>(arr1: T[], arr2: Y[]): (T | Y)[] => {
  return [...arr1, ...arr2];
};
console.log(
  `Trying concat with ${JSON.stringify(numArray)} and ${JSON.stringify(stringArray)} , Result: ${JSON.stringify(concat(numArray, stringArray))}`,
);
console.log(
  `Trying concat with ${JSON.stringify(stringArray)} and ${JSON.stringify(numArray)} , Result: ${JSON.stringify(concat(stringArray, numArray))}`,
);

const newConcat = <T>(...arr: T[][]): T[] => {
  return arr.reduce<T[]>((acc: T[], el: T[]) => {
    return [...acc, ...el];
  }, []);
};

console.log(
  `Trying newConcat with ${JSON.stringify(numArray)} and ${JSON.stringify(stringArray)} and ${JSON.stringify(boolArray)} , Result: ${JSON.stringify(newConcat<string | number | boolean>(numArray, stringArray, boolArray))}`,
);
console.log(
  `Trying newConcat with ${JSON.stringify(stringArray)} and ${JSON.stringify(numArray)} and ${JSON.stringify(boolArray)}  , Result: ${JSON.stringify(newConcat<string | number | boolean>(stringArray, numArray, boolArray))}`,
);

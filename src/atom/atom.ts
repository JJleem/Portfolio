import { atom } from "recoil";

export const toggleState = atom({
  key: "toggle",
  default: false,
});

export const locationState = atom({
  key: "location",
  default: false,
});

export const filterState = atom({
  key: "filter",
  default: false,
});
const initialRandomNumber: number = Math.floor(Math.random() * 14);

const excludedNumbers = [initialRandomNumber];
let initialNewRandomNumber: number;
do {
  initialNewRandomNumber = Math.floor(Math.random() * 14);
} while (excludedNumbers.includes(initialNewRandomNumber));
excludedNumbers.push(initialNewRandomNumber);

export const numberState = atom({
  key: "number",
  default: initialRandomNumber,
});
export const newNumberState = atom({
  key: "newnumber",
  default: initialNewRandomNumber,
});

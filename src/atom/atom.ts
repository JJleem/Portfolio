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

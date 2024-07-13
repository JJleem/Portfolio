import { atom } from "recoil";

export const toggleState = atom({
  key: "toggle",
  default: false,
});

export const locationState = atom({
  key: "location",
  default: false,
});

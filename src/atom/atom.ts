import { atom } from "recoil";

export const toggleState = atom({
  key: "toggle",
  default: false,
});

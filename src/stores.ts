import { writable } from "svelte/store";
import { getStringOfNRandDigits, loadKey } from "./lib/utils";
import { DEFAULT_LENGTH } from "./lib/constants";
import type { Key } from "./lib/types";

export const code = writable(getStringOfNRandDigits(DEFAULT_LENGTH));
const writableKey = () => {
  const { subscribe, set } = writable(loadKey());

  return {
    subscribe,
    save: (key: Key) => {
      set(key);
      //save to localStorage
      localStorage.setItem("key", JSON.stringify(key));
    },
  };
};
export const key = writableKey();

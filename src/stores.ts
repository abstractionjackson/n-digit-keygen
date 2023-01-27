import { writable } from "svelte/store";
import {
  createKey,
  getStringOfNRandDigits,
  loadKey,
  loadKeyRing,
} from "./lib/utils";
import { DEFAULT_LENGTH } from "./lib/constants";
import type { Key } from "./lib/types";

const writeableCode = () => {
  const { subscribe, set, update } = writable({
    n: DEFAULT_LENGTH,
    value: getStringOfNRandDigits(DEFAULT_LENGTH),
  });

  const setByLength = (n: number) => {
    set({
      n,
      value: getStringOfNRandDigits(n),
    });
  };

  const generate = () => {
    update((code) => {
      return {
        ...code,
        value: getStringOfNRandDigits(code.n),
      };
    });
  };

  return {
    subscribe,
    setByLength,
    generate,
  };
};
export const code = writeableCode();

const writableKeyRing = () => {
  const { subscribe, update } = writable(loadKeyRing());

  return {
    subscribe,
    addKey: (code: string) => {
      const key = createKey(code);
      const newKeyRing = [key];
      update((keyRing) => {
        newKeyRing.push(...keyRing);
        return newKeyRing;
      });
      //save to localStorage
      localStorage.setItem("keyRing", JSON.stringify(newKeyRing));
    },
    deleteKey: (id: string) => {
      const newKeyRing = [];
      update((keyRing) => {
        newKeyRing.push(...keyRing.filter((key) => key.id !== id));
        return newKeyRing;
      });
      //save to localStorage
      localStorage.setItem("keyRing", JSON.stringify(newKeyRing));
    },
  };
};
export const keyRing = writableKeyRing();
//TODO: remove below
const writableKey = () => {
  const { subscribe, set } = writable(loadKey());

  return {
    subscribe,
    save: (key: Key) => {
      set(key);
      //save to localStorage
      localStorage.setItem("key", JSON.stringify(key));
    },
    delete: () => {
      set(null);
      //delete from localStorage
      localStorage.removeItem("key");
    },
  };
};
export const key = writableKey();

import { writable } from "svelte/store";
import {
  getLockList,
  getBearerList,
  createLock,
  createKey,
  createBearer,
  getStringOfNRandDigits,
  loadKeyRing,
} from "./lib/utils";
import { DEFAULT_LENGTH } from "./lib/constants";
import type { Key } from "./lib/types";

// Code
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

// KeyRing
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
    updateKeyLock: (id: string, lock_id: string) => {
      const newKeyRing = [];
      update((keyRing) => {
        newKeyRing.push(
          ...keyRing.map((key) => {
            if (key.id === id) {
              // if the key is for the first time being provided a lock, then it is being activated -->
              const status = key.status === "silent" ? "inactive" : key.status;
              return {
                ...key,
                status,
                lock_id,
              };
            }
            return key;
          })
        );
        return newKeyRing;
      });
      //save to localStorage
      localStorage.setItem("keyRing", JSON.stringify(newKeyRing));
    },
    updateKeyBearer: (id: string, bearer_id: string) => {
      const newKeyRing = [];
      update((keyRing) => {
        newKeyRing.push(
          ...keyRing.map((key) => {
            if (key.id === id) {
              if (!key.lock_id) {
                throw new Error("No lock is assigned to the key");
              }
              const status = key.status === "inactive" ? "active" : key.status;
              return {
                ...key,
                bearer_id: [...key.bearer_id, bearer_id],
                primary_bearer_id: bearer_id,
                status,
              };
            }
            return key;
          })
        );
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
// LockList
const writableLockList = () => {
  const { subscribe, update } = writable(getLockList());

  return {
    subscribe,
    addLock: (name: string) => {
      const lock = createLock(name);
      const newLockList = [lock];
      update((lockList) => {
        newLockList.push(...lockList);
        return newLockList;
      });
      //save to localStorage
      localStorage.setItem("lockList", JSON.stringify(newLockList));
    },
    deleteLock: (id: string) => {
      const newLockList = [];
      update((lockList) => {
        newLockList.push(...lockList.filter((lock) => lock.id !== id));
        return newLockList;
      });
      //save to localStorage
      localStorage.setItem("lockList", JSON.stringify(newLockList));
    },
  };
};
export const lockList = writableLockList();
// BearerList
const writableBearerList = () => {
  const { subscribe, update } = writable(getBearerList());

  return {
    subscribe,
    addBearer: (name: string) => {
      const bearer = createBearer(name);
      const newBearerList = [bearer];
      update((bearerList) => {
        newBearerList.push(...bearerList);
        return newBearerList;
      });
      localStorage.setItem("bearerList", JSON.stringify(newBearerList));
    },
    deleteBearer: (id: string) => {
      const newBearerList = [];
      update((bearerList) => {
        newBearerList.push(...bearerList.filter((bearer) => bearer.id !== id));
        return newBearerList;
      });
    },
  };
};

export const bearerList = writableBearerList();

// UI
const writableUI = () => {
  const { subscribe, set } = writable({
    warning: "",
  });

  return {
    subscribe,
    setWarning: (warning: string) => {
      set({
        warning,
      });
    },
    resetWarning: () => {
      set({
        warning: "",
      });
    },
  };
};
export const ui = writableUI();

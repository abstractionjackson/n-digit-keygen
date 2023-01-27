import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";
import {
  DEFAULT_STATUS,
  DEFAULT_KEY_RING,
  DEFAULT_LOCK_LIST,
  DEFAULT_BEARER_LIST,
} from "./constants";
import type { Key, LockList } from "./types";

export const getStringOfNRandDigits = (n: number) => {
  if (n <= 0) {
    throw new Error("n must be positive");
  }
  let result = "";
  for (let i = 0; i < n; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
};
// Key
export const createKey = (code: string): Key => {
  return {
    id: uuidv4(),
    code,
    created_at: DateTime.now().toISO(),
    status: DEFAULT_STATUS,
    bearer_id: [],
  };
};
// KeyRing
export const loadKeyRing = () => {
  const keyRing = localStorage.getItem("keyRing");
  if (!keyRing) {
    return DEFAULT_KEY_RING;
  }
  return JSON.parse(keyRing);
};
// Lock
export const createLock = (name: string): Lock => {
  return {
    id: uuidv4(),
    name,
  };
};
// LockList
export const getLockList = () => {
  const lockList = localStorage.getItem("lockList");
  if (!lockList) {
    return DEFAULT_LOCK_LIST;
  }
  return JSON.parse(lockList);
};
export const setLockList = (lockList: Lock[]) => {
  localStorage.setItem("lockList", JSON.stringify(lockList));
};
// Bearer
export const createBearer = (name: string): Bearer => {
  return {
    id: uuidv4(),
    name,
  };
};
// BearerList
export const getBearerList = () => {
  const bearerList = localStorage.getItem("bearerList");
  if (!bearerList) {
    return DEFAULT_BEARER_LIST;
  }
  return JSON.parse(bearerList);
};

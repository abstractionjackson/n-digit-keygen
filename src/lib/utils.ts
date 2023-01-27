import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";
import { DEFAULT_STATUS, DEFAULT_KEY_RING } from "./constants";
import type { Key } from "./types";

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
export const createKey = (code: string): Key => {
  return {
    id: uuidv4(),
    code,
    created_at: DateTime.now().toISO(),
    status: DEFAULT_STATUS,
  };
};
export const loadKeyRing = () => {
  const keyRing = localStorage.getItem("keyRing");
  if (!keyRing) {
    return DEFAULT_KEY_RING;
  }
  return JSON.parse(keyRing);
};
export const loadKey = () => {
  const key = localStorage.getItem("key");
  if (!key) {
    return null;
  }
  return JSON.parse(key);
};

import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";
import { DEFAULT_STATUS } from "./constants";

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
    created_at: DateTime.local(),
    status: DEFAULT_STATUS,
  };
};
export const loadKey = () => {
  const key = localStorage.getItem("key");
  if (!key) {
    throw new Error("Key not found");
  }
  return JSON.parse(key);
};

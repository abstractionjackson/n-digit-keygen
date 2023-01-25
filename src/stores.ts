import { writable } from "svelte/store";
import { getStringOfNRandDigits } from "./lib/utils";

export const code = writable(getStringOfNRandDigits(6));

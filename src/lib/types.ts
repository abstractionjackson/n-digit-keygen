import type { DateTime } from "luxon";

export type Lock = {
  id: string;
  name: string;
};

export type Code = {
  n: number;
  value: string;
};

export type KeyStatus =
  | "silent"
  | "inactive"
  | "active"
  | "used"
  | "deactivated";

export type Key = {
  id: string;
  code: string;
  created_at: string;
  updated_at?: string;
  status: KeyStatus;
  lock_id?: string;
  bearer_id?: string;
};

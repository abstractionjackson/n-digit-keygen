import type { DateTime } from 'luxon';

export type Key {
  id: string;
  code: string;
  created_at: DateTime;
  updated_at?: DateTime;
  status: 'active' | 'inactive';
}

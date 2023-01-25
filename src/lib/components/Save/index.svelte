<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { DateTime } from "luxon";

  import { code as keycode } from "../../../stores";
  import type { Key } from "../../types";

  let key: Key;

  const handleSave = () => {
    key = {
      id: uuidv4(),
      code: $keycode,
      created_at: DateTime.local(),
    };
    //serialize and save to local storage
    const currentKey = JSON.stringify(key);
    localStorage.setItem("key", currentKey);
  };
</script>

<div>
  <button on:click={handleSave}>Save</button>
</div>

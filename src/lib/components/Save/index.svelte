<script lang="ts">
  import { createKey } from "../../utils";
  import { code, key } from "../../../stores";
  import type { Key } from "../../types";

  let currentKey: Key;

  const handleSave = () => {
    currentKey = createKey($code); //serialize and save to local storage
    key.save(currentKey);
  };
</script>

<div class="mx-auto w-fit">
  <button
    on:click={handleSave}
    class="border border-black bg-neutral-200 py-3 px-6 text-xl font-bold tracking-wide ring-black hover:bg-neutral-300"
    >Save</button
  >
</div>

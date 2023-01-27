<script lang="ts">
  import { lockList, keyRing } from "$app/stores";
  import { DateTime } from "luxon";

  export let keyId: string;
  export let lockId: string | undefined;

  const handleChange = (event: Event) => {
    const lockId = (event.target as HTMLSelectElement).value;
    if (lockId === "new-lock") {
      return lockList.addLock(
        `PLACEHOLDER_${DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)}`
      );
    }
    keyRing.updateKeyLock(keyId, lockId);
  };
</script>

<select id="lock-select" on:change={handleChange} class="bg-neutral-200">
  {#if !lockId}
    <option value="" selected disabled> Select a lock </option>
  {/if}
  {#each $lockList as lock}
    <option value={lock.id} selected={lock.id === lockId}>
      {lock.name}
    </option>
  {/each}
  <option value="new-lock">Add New Lock</option>
</select>

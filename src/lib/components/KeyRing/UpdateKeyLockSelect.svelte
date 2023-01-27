<script lang="ts">
  import { lockList, keyRing } from "$app/stores";

  export let keyId: string;
  export let selected: string | undefined;

  const handleChange = (event: Event) => {
    const lockId = (event.target as HTMLSelectElement).value;
    if (lockId === "new-lock") {
      return lockList.addLock(
        `PLACEHOLDER_${Math.floor(Math.random() * 10).toString()}`
      );
    }
    keyRing.updateKeyLock(keyId, lockId);
  };
</script>

<select id="lock-select" on:change={handleChange} class="bg-neutral-200">
  {#if !selected}
    <option value="" selected disabled hidden> Select a lock </option>
  {/if}
  {#each $lockList as lock}
    {#if lock.id === selected}
      <option value={lock.id} selected>{lock.name}</option>
    {:else}
      <option value={lock.id}>{lock.name}</option>
    {/if}
  {/each}
  <option value="new-lock">Add New Lock</option>
</select>

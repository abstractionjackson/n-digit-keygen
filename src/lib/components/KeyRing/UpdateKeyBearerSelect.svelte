<script lang="ts">
  import { DateTime } from "luxon";
  import { ui } from "$app/stores";
  import { bearerList, keyRing } from "$app/stores";

  export let keyId: string;
  export let primaryBearerId: string | undefined;
  export let rowIndex: number;

  let defaultOption;
  let selected;

  const handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const bearerId = target.value;

    //tmp handle add
    if (bearerId === "new-bearer") {
      return bearerList.addBearer(
        `DEMO_BEARER_${DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)}`
      );
    }
    //handle update
    try {
      keyRing.updateKeyBearer(keyId, bearerId);
    } catch (error) {
      if (error instanceof Error) {
        ui.setWarning(error.message);
        selected = defaultOption.value;
        //focus the lockSelect
        const row = document.querySelector(`#key-ring-row-${rowIndex}`);
        //get the lock
        const lock = row.querySelector(`#lock-select-${rowIndex}`);
        lock.focus();
      } else {
        console.error(error);
      }
    }
  };
</script>

<select bind:value={selected} on:change={handleChange} class="bg-neutral-200">
  {#if !primaryBearerId}
    <option bind:this={defaultOption} disabled selected>Select a Bearer</option>
  {/if}
  {#each $bearerList as bearer}
    <option value={bearer.id} selected={bearer.id === primaryBearerId}>
      {bearer.name}
    </option>
  {/each}
  <option value="new-bearer">Add a Bearer</option>
</select>

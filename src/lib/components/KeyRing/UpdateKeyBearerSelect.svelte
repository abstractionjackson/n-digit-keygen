<script lang="ts">
  import { DateTime } from "luxon";
  import { ui } from "$app/stores";
  import { bearerList, keyRing } from "$app/stores";

  export let keyId: string;
  export let primaryBearerId: string | undefined;

  const handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const bearerId = target.value;
    console.log("bearerId", bearerId);

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
      } else {
        console.error(error);
      }
    }
  };
</script>

<select on:change={handleChange} class="bg-neutral-200">
  {#if !primaryBearerId}
    <option value="" disabled selected>Select a Bearer</option>
  {/if}
  {#each $bearerList as bearer}
    <option value={bearer.id} selected={bearer.id === primaryBearerId}>
      {bearer.name}
    </option>
  {/each}
  <option value="new-bearer">Add a Bearer</option>
</select>

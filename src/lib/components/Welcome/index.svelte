<script lang="ts">
  import { code as keycode } from "../../../stores";
  import { getStringOfNRandDigits } from "../../utils";

  let selected: number = 6;

  const handleChange = (e: Event) => {
    //@ts-ignore
    const n = e.target.value;
    const code = getStringOfNRandDigits(n);
    keycode.set(code);
  };
</script>

<div
  id="welcome"
  class="flex min-h-[50vh] w-full flex-col justify-end bg-gradient-to-t from-neutral-300 to-neutral-400 py-8 text-center text-black text-opacity-90"
>
  <h1 class="text-4xl font-bold">
    <select
      bind:value={selected}
      on:change={handleChange}
      class="inline w-min bg-transparent"
    >
      {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as i}
        {#if i === selected}
          <option value={i} selected>{i}</option>
        {:else}
          <option value={i}>{i}</option>
        {/if}
      {/each}
    </select> Digit Keygen
  </h1>
</div>

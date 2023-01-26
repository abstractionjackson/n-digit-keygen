<script lang="ts">
  import { code as keycode } from "../../../stores";
  import { getStringOfNRandDigits } from "../../utils";
  import chevronDown from "../../../assets/chevron_down.svg";

  let n: number = 6;
  $: selectWidth = n.toString().length === 1 ? "1.25em" : "1.75em";

  const handleChange = () => {
    const code = getStringOfNRandDigits(n);
    keycode.set(code);
  };
</script>

<div
  id="welcome"
  class="flex min-h-[25vh] w-full flex-col justify-end py-8 text-center text-black text-opacity-90"
>
  <h1 class="text-4xl font-bold">
    <div
      class="arrow"
      style="width: {selectWidth}; background-image: url({chevronDown});"
    >
      <select
        bind:value={n}
        on:change={handleChange}
        class=" appearance-none bg-transparent text-red-600 underline"
        style="width: {selectWidth}"
      >
        {#each [4, 5, 6, 7, 8, 9, 10] as i}
          {#if i === n}
            <option value={i} selected>{i}</option>
          {:else}
            <option value={i}>{i}</option>
          {/if}
        {/each}
      </select>
    </div>
    Digit KeyGen
  </h1>
</div>

<style>
  .arrow {
    background-repeat: no-repeat;
    display: inline;
    background-position: bottom 3px right -3px;
    background-size: 24px;
  }
</style>

<script lang="ts">
  import { code, keyRing } from "$app/stores";

  const handleSave = () => {
    keyRing.addKey($code.value);
  };
</script>

<button
  on:click={handleSave}
  class="mx-4 border border-black bg-neutral-200 py-3 px-6 text-xl font-bold tracking-wide ring-black hover:bg-neutral-300"
  >Save</button
>

<script lang="ts">
  import { code } from "$app/stores";
  import arrowPath from "./arrow-path.svg";
</script>

<button
  on:click={code.generate}
  class="mx-4 border border-black bg-neutral-200 py-3 px-6 text-xl font-bold tracking-wide ring-black hover:bg-neutral-300"
  ><img src={arrowPath} alt="Re-Generate" height="30px" width="30px" /></button
>

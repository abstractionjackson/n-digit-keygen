<script lang="ts">
  import type { KeyStatus as Status } from "$lib/types";

  export let status: Status;
</script>

<div id="status" class="mx-auto w-min">
  <!-- a different color dot for each status -->
  {#if status === "silent"}
    <svg
      class="h-4 w-4 text-neutral-100"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="10" />
    </svg>
  {:else if status === "inactive"}
    <svg
      class="h-4 w-4 text-yellow-200"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="10" />
    </svg>
  {:else if status === "active"}
    <svg class="h-4 w-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" />
    </svg>
  {:else if status === "used"}
    <svg
      class="h-4 w-4 text-orange-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="10" />
    </svg>
  {:else if status === "deactivated"}
    <svg
      class="h-4 w-4 text-neutral-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="10" />
    </svg>
  {/if}
</div>

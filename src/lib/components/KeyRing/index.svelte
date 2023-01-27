<script lang="ts">
  import { DateTime } from "luxon";
  import { fly } from "svelte/transition";
  import { keyRing, ui } from "$app/stores";
  import Status from "./Status.svelte";
  import DeleteButton from "./DeleteButton.svelte";
  import UpdateKeyLockSelect from "./UpdateKeyLockSelect.svelte";
  import UpdateKeyBearerSelect from "./UpdateKeyBearerSelect.svelte";
</script>

<div class="mx-auto w-full max-w-xl">
  <h2 class="my-4 text-center text-2xl font-bold">Key Ring</h2>
  <!-- a table of all the keys -->
  <table class="mx-auto bg-neutral-200">
    <thead>
      <tr>
        <th>Status</th>
        <th>Created</th>
        <th>Code</th>
        <th>Lock</th>
        <th>Bearer</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {#each $keyRing as key}
        <tr>
          <td>
            <Status status={key.status} />
          </td>
          <td>{DateTime.fromISO(key.created_at).toLocaleString()}</td>
          <td>{key.code}</td>
          <td>
            <UpdateKeyLockSelect keyId={key.id} lockId={key.lock_id} />
          </td>
          <td>
            <UpdateKeyBearerSelect
              keyId={key.id}
              primaryBearerId={key.primary_bearer_id}
            />
          </td>
          <td>
            <DeleteButton id={key.id} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  {#if $ui.warning}
    <div
      transition:fly
      class="my-4 flex items-center bg-yellow-400 p-2 text-neutral-800"
    >
      <p class="ml-8">{$ui.warning}</p>
      <button
        on:click={ui.resetWarning}
        class="ml-auto border border-black bg-neutral-200 p-1 px-3"
        >Dismiss</button
      >
    </div>
  {/if}
</div>

<!-- styles -->
<style>
  table {
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid black;
    padding: 0.5rem;
  }
</style>

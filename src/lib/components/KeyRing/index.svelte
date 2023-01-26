<script lang="ts">
  import { DateTime } from "luxon";
  import { key } from "$app/stores";
  import Status from "./Status.svelte";
  import DeleteButton from "./DeleteButton.svelte";
</script>

<div class="mx-auto my-4 w-full max-w-xl">
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
      <tr>
        <td>
          <Status status={$key.status} />
        </td>
        <td>{DateTime.fromISO($key.created_at).toLocaleString()}</td>
        <td>{$key.code}</td>
        <td>{$key.lock ?? "None"}</td>
        <td>{$key.bearer ?? "None"}</td>
        <td>
          <DeleteButton />
        </td>
      </tr>
    </tbody>
  </table>
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

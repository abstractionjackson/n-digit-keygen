<script lang="ts">
  import { DateTime } from "luxon";
  import { key } from "../../../stores";
</script>

<div class="mx-auto my-4 w-full max-w-xl">
  <h2 class="my-4 text-center text-2xl font-bold">Key Ring</h2>
  <!-- a table of all the keys -->
  <table class="mx-auto bg-neutral-200">
    <thead>
      <tr>
        <th>Created</th>
        <th>Code</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{DateTime.fromISO($key.created_at).toLocaleString()}</td>
        <td>{$key.code}</td>
        <td>
          {#if $key.status === "active"}
            <!-- a blue dot -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                clip-rule="evenodd"
              />
            </svg>
          {:else}
            <!-- a gray dot -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                clip-rule="evenodd"
              />
            </svg>
          {/if}
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

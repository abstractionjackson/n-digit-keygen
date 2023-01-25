<script lang="ts">
  import Welcome from "./lib/components/Welcome/index.svelte";
  import Random from "./lib/components/Random/index.svelte";
  import Table from "./lib/components/Table/index.svelte";
</script>

<svelte:head>
  <title>Random Six-Digit Keycode Generator</title>
</svelte:head>

<main class="min-h-screen bg-neutral-300">
  <header>
    <Welcome />
  </header>
  <section>
    <Random />
  </section>
  <section>
    <Table />
  </section>
</main>

<script lang="ts">
  import Welcome from "./lib/components/Welcome/index.svelte";
  import Random from "./lib/components/Random/index.svelte";
  import Table from "./lib/components/Table/index.svelte";

  import favicon from "./assets/favicon.png";
</script>

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

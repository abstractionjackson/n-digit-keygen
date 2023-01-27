<script lang="ts">
  import Welcome from "$lib/components/Welcome/index.svelte";
  import Random from "$lib/components/Random/index.svelte";
  import KeyRing from "$lib/components/KeyRing/index.svelte";
  import Save from "$lib/components/Save/index.svelte";
  import Generator from "$lib/components/Generator/index.svelte";
</script>

<main
  class="min-h-screen bg-gradient-to-b from-neutral-300 to-neutral-400 px-4 pb-12"
>
  <header>
    <Welcome />
  </header>
  <section>
    <Random />
  </section>
  <section class="flex justify-center">
    <Save />
    <Generator />
  </section>
  <section>
    <KeyRing />
  </section>
</main>

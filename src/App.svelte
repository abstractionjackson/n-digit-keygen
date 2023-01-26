<script lang="ts">
  import Welcome from "./lib/components/Welcome/index.svelte";
  import Random from "./lib/components/Random/index.svelte";
  import KeyRing from "./lib/components/KeyRing/index.svelte";
  import Save from "./lib/components/Save/index.svelte";

  import favicon from "./assets/favicon.png";
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
  <section>
    <Save />
  </section>
  <hr class="my-12 mx-auto h-[.25rem] w-[25vw] border-none bg-neutral-400" />
  <section>
    <KeyRing />
  </section>
</main>

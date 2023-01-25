<script lang="ts">
  import { generateKeycode } from "../utils";
  let keycode: string = generateKeycode();
</script>

<section>
    <header class="">
      Six-digit keycode
    </header>
    <textarea bind:value={keycode}/>
    <button id="clipboard-copy-keycsode">copy</button>
  <button id="generator" class="">
    Generate
  </button>
</section>


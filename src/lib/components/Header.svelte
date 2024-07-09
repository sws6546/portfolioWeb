<script lang="ts">
  import Button from "./Button.svelte";
</script>

<header class="p-4 rounded-b-2xl shadow-xl backdrop-blur-sm flex flex-row justify-between items-center pl-6 pr-6">
  <h1 class="text-3xl">Portfolio</h1>

  <div>
    <a href="/"><Button text="Home" /></a>
    <a href="/about"><Button text="About" /></a>
    <a href="/projects"><Button text="Projects" /></a>
    <a href="/blog"><Button text="Blog" /></a>
    <a href="/contact"><Button text="Contact" /></a>
    <a href="/cv"><Button text="cv" /></a>
  </div>
</header>
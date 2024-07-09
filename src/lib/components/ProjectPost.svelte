<script lang="ts">
  export let title: string = "Lorem Ipsum";
  export let url: string = "/blog/LoremIpsum";
</script>

<a href="http://{url}" class="w-[50%] p-1">
  <div class="p-4 rounded-xl bg-gradient-to-r from-blue-700/[.2] to-purple-700/[.2] backdrop-blur-sm transition hover:opacity-80">
    <h1 class="text-3xl text-center">{title}</h1>
    <p>{url}</p>
  </div>
</a>

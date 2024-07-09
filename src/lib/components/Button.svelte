<script lang="ts">
  type ButtonType = "button" | "submit" | "reset";


  export let text: string;
  export let type: ButtonType = "button";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function dispatchClick() {
    dispatch("click");
  }
</script>

<button
  on:click={dispatchClick}
  type="{type}"
  class="bg-gradient-to-br from-gray-500 to-slate-400 p-2 pl-4 pr-4 rounded-xl opacity-60 transition
  hover:opacity-100 backdrop-blur-sm hover:shadow-xl"
>
  {text}
</button>

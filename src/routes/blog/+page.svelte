<script lang="ts">

  type blogPostType = {
    id: string;
    title: string;
    url: string;
    releaseDate: string;
  };

  import BlogPost from "$lib/components/BlogPost.svelte";
  export let data: { blogPosts: blogPostType[] };
</script>

<div class="w-full flex flex-col items-center">
  <div
    class="mt-8 backdrop-blur-sm w-full md:w-1/2 rounded-xl bg-gradient-to-r from-blue-700/[.2] to-purple-700/[.2] p-4 flex flex-col gap-4"
  >
    <h1 class="text-4xl text-center">Blog</h1>
  </div>
  <div class="mt-2 w-full md:w-1/2 p-4 flex flex-wrap">
    {#each data.blogPosts as blogPost}
      <BlogPost
        title={blogPost.title}
        url={blogPost.id}
        releaseDate={blogPost.releaseDate}
      />
    {/each}
  </div>
</div>

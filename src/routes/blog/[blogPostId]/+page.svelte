<script lang="ts">
  type blogPostType = {
    id: string;
    title: string;
    createdAt: Date;
    content: string;
  };

  export let data: { blogPost: blogPostType };
</script>

<div class="w-full flex flex-col items-center mt-8">
  <article
    class="p-4 rounded-xl bg-gradient-to-r from-blue-700/[.2] to-purple-700/[.2] backdrop-blur-sm w-full md:w-1/2 flex flex-col gap-4"
  >
    <h1 class="text-3xl text-center">{data.blogPost.title}</h1>
    <div class="flex flex-row justify-between text-sm text-slate-300">
      <p>Szymon Przeździęk</p>
      <p>
        {data.blogPost.createdAt.getDate()}
        {data.blogPost.createdAt.getMonth() + 1}
        {data.blogPost.createdAt.getFullYear()}
      </p>
    </div>
    <p class="text-lg text-justify">{data.blogPost.content}</p>
  </article>
</div>

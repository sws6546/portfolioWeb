import prisma from "$lib/prisma";

export async function load() {

  const blogPosts = await prisma.blogPost.findMany(
    {
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    }
  );
  return {
    blogPosts: blogPosts
  };
}
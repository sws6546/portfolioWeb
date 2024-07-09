import prisma from "$lib/prisma";
import { error } from "@sveltejs/kit"

export async function load({ params }) {
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      id: params.blogPostId
    }
  })

  if(blogPost === null) {
    throw error (404, "Blog post not found")
  }

  return {
    blogPost
  }
}
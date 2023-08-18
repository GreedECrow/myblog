import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import kv from "@vercel/kv";

type BlogPostParams = {
  params: {
    slug: string;
  };
};


export function generateStaticParams() {
  const posts = getPosts();

  
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });


}

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
            <p>0</p>
    <span>⭐{data.stargazers_count}</span>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }}className="prose dark:prose-invert"></div>

      <p>{post.content}</p>
    </main>
  );
}
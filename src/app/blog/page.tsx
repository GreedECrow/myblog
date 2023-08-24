import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h2>My Posts</h2>
      <p>For your viewing pleasure, please enjoy this pretty list of random things that I watch/play/listen to far too much.</p>
      <ul>
        {posts.map((post:any) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
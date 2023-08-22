import { allPosts as POSTS } from "contentlayer/generated";

const CATEGORIES = [
  { name: "Games", catslug: "games" },
  { name: "Music", catslug: "music" },
  { name: "Film", catslug: "film" },
];

export function getPosts() {
  return POSTS;
}

export function getPostBySlug(slug: string) {
  return POSTS.find((post:any) => post.slug === slug);
}

export function getCategories() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post:any) => post.category === catslug);
}

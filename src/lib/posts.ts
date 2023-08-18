import {allpost as POSTS} from "contentlayer/generated";

const CATEGORIES = [
    { name: "Games", catslug: "games" },
    { name: "Music", catslug: "music" },
    { name: "Film", catslug: "film" },
  ];
  
  // const POSTS = [
  //   {
  //     img: "",
  //     title: "Witcher 3",
  //     slug: "post-one",
  //     content: "This game is amazing",
  //     category: "games",
  //   },
  //   {
  //       img: "",
  //       title: "Horizon Series",
  //       slug: "post-two",
  //       content: "It's like Witcher 3 but with machines instead of monsters.",
  //       category: "games",
  //     },
  //     {
  //       img: "",
  //       title: "Final Fantasy Series",
  //       slug: "post-three",
  //       content: "The best games.",
  //       category: "games",
  //     },
  //   {
  //     img: "",
  //     title: "Professor Elemental",
  //     slug: "post-four",
  //     content: "Chap hop at it's finest.",
  //     category: "music",
  //   },
  //   {
  //       img: "",
  //       title: "System of a Down",
  //       slug: "post-five",
  //       content: "Never made even one bad song and did the best Legend of Zelda cover.",
  //       category: "music",
  //     },
  //     {
  //       img: "",
  //       title: "Final Fantasy's whole BGM library",
  //       slug: "post-six",
  //       content: "This series has some of the best music of any game series ever.",
  //       category: "music", "games",
  //     },
  //   {
  //     img: "",
  //     title: "Werewolves Within",
  //     slug: "post-seven",
  //     content: "Surprised at how much I like this film.",
  //     category: "film",
  //   },
  //   {
  //       img: "",
  //       title: "Ninja Scroll",
  //       slug: "post-eight",
  //       content: "It's a classic.",
  //       category: "film",
  //     },
  //     {
  //       img: "",
  //       title: "Werewolf By Night",
  //       slug: "post-nine",
  //       content: "Marvel needs to make more films like this.",
  //       category: "film",
  //     },
  // ];
  
 
  export function getPosts() {
    return POSTS;
  }
  
 
  export function getPostBySlug(slug: string) {
    return POSTS.find((post) => post.slug === slug);
  }
  
  export function getCategories() {
    return CATEGORIES;
  }
  
  // export function getPostsByCategory(catslug: string) {
  //   return POSTS.filter((post) => post.category === catslug);
  // }
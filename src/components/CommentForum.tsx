"use client";
import { WEBSITE_URL } from "config";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function CommentForm({ slug }: { slug: string }) {
 
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const username = event.target.username.value || "annonymous";
 
    const comment = event.target.comment.value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    const options = { body: formData, method: "POST" };
    const res = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, options);
    console.log(res);

    event.target.username.value = "";
    event.target.comment.value = "";

    startTransition(() => {
      router.refresh();
      console.log("relocation the page data");
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Name</label>
      <br />
      <input name="username" className="text-black border-2 border-grey-400" />
      <br />
      <br />
      <label htmlFor="comment">Comment</label>
      <br />
      <textarea name="comment" cols={30} rows={10} className="text-black border-2 border-grey-400" required />
      <br />
      <br />
      <button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send Comment"}
      </button>
    </form>
  );
}
"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { WEBSITE_URL } from "../../config";

export default function CommentForm({
  slug,
  username,
}: {
  slug: string;
  username: string;
}) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //@ts-ignore
    const comment = event.target.comment.value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    const options = { body: formData, method: "POST" };
    const res = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, options);
    console.log(res);

    //@ts-ignore
    event.target.comment.value = "";

    startTransition(() => {
      router.refresh();
      console.log("relocation the page data");
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <p>
        Commenting as <strong>{username}</strong>
      </p>

      <br />
      <br />
      <label htmlFor="comment">Comment</label>
      <br />
      <textarea
        name="comment"
        cols={30}
        rows={10}
        className="text-black border-2 border-grey-400"
        required
      />
      <br />
      <br />
      <button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send Comment"}
      </button>
    </form>
  );
}

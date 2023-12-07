import Link from "next/link";

import Heading from "@/components/Heading";
import { getPosts } from "@/services/fetchPosts";

export const metadata = {
  title: "Posts",
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <>
      <Heading text="Posts list:" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;

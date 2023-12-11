import Link from "next/link";
import React from "react";
import { Metadata } from "next";

import Heading from "../../components/Heading";
import { getPosts } from "../../services/fetchPosts";

export const metadata: Metadata = {
  title: "Posts",
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <>
      <Heading text="Posts list:" tag="h1" />
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

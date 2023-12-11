import React, { FC } from "react";
import { Metadata } from "next";

import PostInfo from "../../../components/PostInfo";
import { getPost, getPosts } from "../../../services/fetchPosts";

type PostProps = {
  params: {
    id: string;
  };
};

export const generateStaticParams = async () => {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
};

export const metadata: Metadata = {
  title: "Post",
};

const Post: FC<PostProps> = async ({ params: { id } }) => {
  const post = await getPost(id);

  return <PostInfo post={post} />;
};

export default Post;

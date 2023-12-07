import PostInfo from "@/components/PostInfo";
import { getPost, getPosts } from "@/services/fetchPosts";

export const generateStaticParams = async () => {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
};

export const metadata = {
  title: "Post",
};

const Post = async ({ params: { id } }) => {
  const post = await getPost(id);

  return <PostInfo post={post} />;
};

export default Post;

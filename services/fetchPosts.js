export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error("Unable to fetch posts.");

  return res.json();
};

export const getPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error("Unable to fetch post.");

  return res.json();
};

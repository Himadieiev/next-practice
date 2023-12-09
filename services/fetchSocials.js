export const getSocials = async () => {
  const res = await fetch("http://localhost:3000/api/socials");

  if (!res.ok) throw new Error("Unable to fetch socials.");

  return res.json();
};

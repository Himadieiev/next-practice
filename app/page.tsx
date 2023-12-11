import React from "react";
import { Metadata } from "next";

import Heading from "../components/Heading";
import css from "../styles/Home.module.scss";
import { getSocials } from "../services/fetchSocials";
import Socials from "../components/Socials";

export const metadata: Metadata = {
  title: "Home",
};

const Home = async () => {
  const socials = await getSocials();

  return (
    <div className={css.wrapper}>
      <Heading text="New project" tag={undefined} />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;

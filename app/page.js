import Heading from "@/components/Heading";
import css from "../styles/Home.module.scss";
import { getSocials } from "@/services/fetchSocials";
import Socials from "@/components/Socials";

export const metadata = {
  title: "Home",
};

const Home = async () => {
  const socials = await getSocials();

  return (
    <div className={css.wrapper}>
      <Heading text="New project" />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;

import Heading from "@/components/Heading";
import css from "../styles/Home.module.scss";

export const metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <div className={css.wrapper}>
      <Heading text="New project" />
    </div>
  );
};

export default Home;

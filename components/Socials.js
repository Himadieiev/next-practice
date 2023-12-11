import Head from "next/head";
import css from "../styles/Socials.module.scss";

const Socials = ({ socials }) => {
  if (!socials) {
    return null;
  }

  return (
    <>
      <ul className={css.socials}>
        {socials &&
          socials.map(({ id, icon, path }) => (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={`fa-brands fa-${icon}`} />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Socials;

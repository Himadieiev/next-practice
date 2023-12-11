"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React from "react";

import Heading from "../components/Heading";
import css from "../styles/NotFound.module.scss";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className={css.wrapper}>
      <div>
        <Heading text="404" tag="h1" />
        <Heading tag="h2" text="Something is going wrong..." />
      </div>
    </div>
  );
};

export default NotFound;

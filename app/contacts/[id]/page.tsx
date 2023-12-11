import React from "react";
import { Metadata } from "next";

import ContactInfo from "../../../components/ContactInfo";

const getContact = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = async ({ params: { id } }) => {
  const contact = await getContact(id);

  return <ContactInfo contact={contact} />;
};

export default Contact;

import ContactInfo from "@/components/ContactInfo";

export const metadata = {
  title: "Contact",
};

const Contact = ({ contact }) => {
  return <ContactInfo contact={contact} />;
};

export default Contact;

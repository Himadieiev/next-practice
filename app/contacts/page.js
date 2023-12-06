const { default: Heading } = require("@/components/Heading");

const getContacts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

export const metadata = {
  title: "Contacts",
};

const Contacts = async () => {
  const contacts = await getContacts();

  return (
    <>
      <Heading text="Contacts list:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <strong>{name}</strong> {email}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;

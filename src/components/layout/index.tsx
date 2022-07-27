import { contacts } from "../../data";
import { Contact } from "../contact";
import { ContactList } from "../contact-list";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <main className={styles.container}>
      <aside className={styles.aside}>
        <ContactList
          contacts={contacts}
          renderItem={(contact) => (
            <Contact key={contact.id} contact={contact} />
          )}
        />
      </aside>
      <section>Chat</section>
    </main>
  );
};

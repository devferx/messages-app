import { contacts } from "../../data";
import { AsideHeader } from "../aside-header";
import { Contact } from "../contact";
import { ContactList } from "../contact-list";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <main className={styles.container}>
      <aside>
        <AsideHeader />

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

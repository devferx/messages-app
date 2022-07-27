import { contacts } from "../../data";
import { AsideHeader } from "../aside-header";
import { Contact } from "../contact";
import { ContactList } from "../contact-list";
import { ContactSearch } from "../contact-search";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <main className={styles.container}>
      <aside>
        <AsideHeader />
        <ContactSearch />
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

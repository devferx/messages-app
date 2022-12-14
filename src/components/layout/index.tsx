import { useEffect, useState } from "react";

import { getContacts } from "../../api";
import { Contact as ContactI } from "../../interfaces";
import { AsideHeader } from "../aside-header";
import { Chat } from "../chat";
import { Contact } from "../contact";
import { ContactList } from "../contact-list";
import { ContactSearch } from "../contact-search";
import styles from "./layout.module.css";

export const Layout = () => {
  const [contacts, setContacts] = useState<ContactI[]>([]);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

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
      <section>
        <Chat />
      </section>
    </main>
  );
};

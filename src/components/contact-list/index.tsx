import type { ReactNode } from "react";

import { Contact } from "../../interfaces";
import styles from "./contact-list.module.css";

interface ContactListProps {
  contacts: Contact[];
  renderItem: (contact: Contact) => ReactNode;
}

export const ContactList = ({ contacts, renderItem }: ContactListProps) => {
  return (
    <ul className={styles.container}>
      {contacts.map((contact) => renderItem(contact))}
    </ul>
  );
};

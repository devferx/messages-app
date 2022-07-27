import { Contact as ContactI } from "../../interfaces";
import styles from "./contact.module.css";

interface ContactProps {
  contact: ContactI;
}

export const Contact = ({ contact }: ContactProps) => {
  return (
    <li aria-label="contact" className={styles.container}>
      <img
        className={styles.avatar}
        src={contact.image}
        width="48px"
        alt={`${contact.name} avatar`}
      />
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <p className={styles.contactName}>{contact.name}</p>
          <span className={styles.messageDate}>{contact.lastMessageDate}</span>
        </div>
        <div className={styles.contentMessage}>
          <span className={styles.sendIcon} aria-label="send"></span>
          <div className={styles.message}>
            <p className={styles.messageContent}>{contact.lastMessage}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

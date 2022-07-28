import searchIcon from "../../assets/search.svg";
import styles from "./chat-header.module.css";

export const ChatHeader = () => {
  return (
    <header className={styles.container}>
      <div className={styles.contact}>
        <img
          className={styles.contactAvatar}
          src="https://i.pravatar.cc/301"
          alt="Avatar"
          width="48"
        />

        <div className={styles.contactInfo}>
          <p className={styles.contactName}>Josefa</p>
          <p className={styles.contactStatus}>En linea</p>
        </div>
      </div>

      <button className={styles.searchButton}>
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </header>
  );
};

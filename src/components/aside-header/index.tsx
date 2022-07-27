import styles from "./aside-header.module.css";

export const AsideHeader = () => {
  return (
    <header className={styles.container}>
      <img
        className={styles.avatar}
        src="https://i.pravatar.cc/300"
        alt="Avatar"
        width="48px"
      />
    </header>
  );
};

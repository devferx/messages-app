import { useState } from "react";

import styles from "./contact-search.module.css";

export const ContactSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Buscar o iniciar un nuevo chat"
        value={searchInput}
        onChange={(ev) => setSearchInput(ev.target.value)}
      />
    </div>
  );
};

import micIcon from "../../assets/mic.svg";
import fileIcon from "../../assets/paperclip.svg";
import emojiIcon from "../../assets/smile.svg";
import styles from "./chat-input.module.css";

export const ChatInput = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <img src={emojiIcon} alt="Emoji icon" />
      </button>
      <button className={styles.btn}>
        <img src={fileIcon} alt="File icon" />
      </button>
      <form className={styles.formControl}>
        <input type="text" placeholder="Escribe un mensaje" />
      </form>
      <button className={styles.btn}>
        <img src={micIcon} alt="Mic icon" />
      </button>
    </div>
  );
};

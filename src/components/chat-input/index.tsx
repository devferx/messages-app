import { FormEvent, useState } from "react";
import { useContext } from "react";

import micIcon from "../../assets/mic.svg";
import fileIcon from "../../assets/paperclip.svg";
import emojiIcon from "../../assets/smile.svg";
import { MessagesContext } from "../../context/messages-context";
import styles from "./chat-input.module.css";

export const ChatInput = () => {
  const [text, setText] = useState("");
  const { sendMessage } = useContext(MessagesContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage("2", text);
    setText("");
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <img src={emojiIcon} alt="Emoji icon" />
      </button>
      <button className={styles.btn}>
        <img src={fileIcon} alt="File icon" />
      </button>
      <form className={styles.formControl} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un mensaje"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <button className={styles.btn}>
        <img src={micIcon} alt="Mic icon" />
      </button>
    </div>
  );
};

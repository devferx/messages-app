import sendIcon from "../../assets/send.png";
import viewedIcon from "../../assets/viewed.png";
import { getHourMinutes } from "../../utils/date";
import styles from "./message.module.css";

interface MessageI {
  id: string;
  to: string;
  from: string;
  date: Date;
  data: string;
  viewed: boolean;
}

interface MessageProps {
  message: MessageI;
}

export const Message = ({ message }: MessageProps) => {
  const isUserMessage = message.from === "1";

  return (
    <div
      className={styles.container}
      style={{ justifyContent: isUserMessage ? "flex-end" : "flex-start" }}
    >
      <div
        className={`${styles.message} ${
          isUserMessage ? styles.userMessage : styles.contactMessage
        }`}
      >
        <p className={styles.messageText}>{message.data}</p>
        <div className={styles.messageInfo}>
          <p className={styles.date}>{getHourMinutes(message.date)}</p>
          {isUserMessage && (
            <img
              src={message.viewed ? viewedIcon : sendIcon}
              alt={message.viewed ? "Viewed" : "Sended"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

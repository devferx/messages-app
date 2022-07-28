import { Message } from "../message";
import styles from "./chat-messages.module.css";

export const ChatMessages = () => {
  return (
    <div className={styles.container}>
      <Message
        message={{
          id: "ui12",
          from: "2",
          to: "1",
          date: new Date(),
          data: "Buenos días disculpe yá está tu cuenta abierta pero para mañana de 9 A 12 podrás recibir al técnico",
          viewed: true,
        }}
      />
      <Message
        message={{
          id: "ui12",
          from: "1",
          to: "2",
          date: new Date(),
          data: "Claro. Sin problemas",
          viewed: true,
        }}
      />
    </div>
  );
};

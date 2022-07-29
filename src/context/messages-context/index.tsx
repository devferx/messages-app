import type { ReactNode } from "react";
import { createContext, useState } from "react";

import { Message } from "../../interfaces";

interface MessagesContextProps {
  messages: Message[];
  sendMessage: (to: string, text: string) => void;
}

export const MessagesContext = createContext({} as MessagesContextProps);

interface MessagesProviderProps {
  children: ReactNode;
}

export const MessagesProvider = ({ children }: MessagesProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (to: string, text: string) => {
    const newMessage = {
      id: `ui${Math.random()}`,
      from: "1",
      to,
      date: new Date(),
      data: text,
      viewed: false,
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        sendMessage,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

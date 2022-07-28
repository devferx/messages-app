import { ChatHeader } from "../chat-header";
import { ChatInput } from "../chat-input";
import { ChatMessages } from "../chat-messages";

export const Chat = () => {
  return (
    <>
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </>
  );
};

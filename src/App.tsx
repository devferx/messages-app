import { Layout } from "./components/layout";
import { MessagesProvider } from "./context/messages-context";

export const App = () => {
  return (
    <MessagesProvider>
      <Layout />
    </MessagesProvider>
  );
};

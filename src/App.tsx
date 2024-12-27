import ChatWindow from "./components/ChatWindow";
import ContactList from "./components/ContactList";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <div className="flex h-screen bg-gray-100">
        <div className="w-1/3 max-w-sm">
          <ContactList />
        </div>
        <div className="flex-1">
          <ChatWindow />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;

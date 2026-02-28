import { chatStyles } from "../styles/chat.styles.js";
import { useChat } from "../hooks/useChat.js";
import Sidebar from "../components/chat/Sidebar";
import ChatWindow from "../components/chat/ChatWindow.jsx";
import GlobalStyle from "../components/auth/GlobalStyle.jsx";

// ChatPage is the conductor for the chat screen.
// Calls useChat() for all state, then passes it down to components.

const ChatPage = () => {
  const {
    users,
    selectedUser,
    setSelectedUser,
    messages,
    text,
    setText,
    loadingUsers,
    loadingMessages,
    sendMessage,
    handleKeyDown,
    bottomRef,
  } = useChat();

  return (
    <>
      <GlobalStyle />
      <div style={chatStyles.root}>
        {/* Left — user list */}
        <Sidebar
          users={users}
          selectedUser={selectedUser}
          onSelectUser={setSelectedUser}
          loadingUsers={loadingUsers}
        />

        {/* Right — chat window */}
        <ChatWindow
          selectedUser={selectedUser}
          messages={messages}
          loadingMessages={loadingMessages}
          text={text}
          setText={setText}
          onSend={sendMessage}
          onKeyDown={handleKeyDown}
          bottomRef={bottomRef}
        />
      </div>
    </>
  );
};

export default ChatPage;

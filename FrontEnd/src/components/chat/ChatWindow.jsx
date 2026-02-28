import { chatStyles } from "../../styles/chat.styles.js";
import ChatHeader from "./ChatHeader.jsx";
import MessageBubble from "./MessageBubble.jsx";
import MessageInput from "./MessageInput.jsx";

// ChatWindow is the right panel.
// Shows either an empty state (no user selected) or the full conversation.

const ChatWindow = ({
  selectedUser,
  messages,
  loadingMessages,
  text,
  setText,
  onSend,
  onKeyDown,
  bottomRef,
}) => {
  // ── No user selected — show empty state ──
  if (!selectedUser) {
    return (
      <div style={{ ...chatStyles.chatArea, ...chatStyles.emptyState }}>
        <div style={chatStyles.emptyIcon}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="#00C2FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={chatStyles.emptyTitle}>Your messages</div>
        <div style={chatStyles.emptySubtitle}>
          Select a person from the sidebar to start chatting
        </div>
      </div>
    );
  }

  return (
    <div style={chatStyles.chatArea}>
      {/* ── Top bar ── */}
      <ChatHeader user={selectedUser} />

      {/* ── Messages ── */}
      <div style={chatStyles.messagesArea}>
        {loadingMessages ? (
          <div style={chatStyles.loadingWrap}>Loading messages...</div>
        ) : messages.length === 0 ? (
          <div style={chatStyles.loadingWrap}>
            No messages yet. Say hello! 👋
          </div>
        ) : (
          messages.map((msg) => <MessageBubble key={msg._id} message={msg} />)
        )}
        {/* Invisible div at the bottom — used for auto-scroll */}
        <div ref={bottomRef} />
      </div>

      {/* ── Input ── */}
      <MessageInput
        text={text}
        onChange={setText}
        onSend={onSend}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default ChatWindow;

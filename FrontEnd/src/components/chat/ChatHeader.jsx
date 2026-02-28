import { chatStyles } from "../../styles/chat.styles.js";

// Shows the selected user's name and avatar at the top of the chat window.
// If no user is selected, renders nothing.

const ChatHeader = ({ user }) => {
  if (!user) return null;

  const initials = user.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div style={chatStyles.chatHeader}>
      {/* Avatar */}
      {user.profilePic ? (
        <img
          src={user.profilePic}
          alt={user.fullName}
          style={chatStyles.avatar}
        />
      ) : (
        <div style={chatStyles.avatar}>{initials}</div>
      )}

      {/* Name + online status */}
      <div>
        <div style={chatStyles.chatHeaderName}>{user.fullName}</div>
        <div style={chatStyles.chatHeaderStatus}>● Online</div>
      </div>
    </div>
  );
};

export default ChatHeader;

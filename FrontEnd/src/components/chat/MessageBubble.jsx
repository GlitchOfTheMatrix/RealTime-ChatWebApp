import { chatStyles } from "../../styles/chat.styles.js";
import { useAuthStore } from "../../store/useAuthStore.js";

// Renders one message bubble.
// Checks if the message was sent by the logged-in user to decide
// which side to render it on (right = mine, left = theirs).

const MessageBubble = ({ message }) => {
  const { authUser } = useAuthStore();

  // Compare sender ID to logged-in user ID
  const isOwn = message.senderId === authUser?._id;

  // Format the timestamp
  const time = message.createdAt
    ? new Date(message.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  const rowStyle = {
    ...chatStyles.bubbleRow,
    ...(isOwn ? chatStyles.bubbleRowOwn : {}),
    justifyContent: isOwn ? "flex-end" : "flex-start",
  };

  const bubbleStyle = {
    ...chatStyles.bubble,
    ...(isOwn ? chatStyles.bubbleOwn : chatStyles.bubbleOther),
  };

  return (
    <div style={rowStyle}>
      <div>
        <div style={bubbleStyle}>
          {/* Image message */}
          {message.image && (
            <img
              src={message.image}
              alt="attachment"
              style={chatStyles.bubbleImage}
            />
          )}
          {/* Text message */}
          {message.text && <span>{message.text}</span>}
        </div>
        {/* Timestamp */}
        {time && <div style={chatStyles.bubbleTime}>{time}</div>}
      </div>
    </div>
  );
};

export default MessageBubble;

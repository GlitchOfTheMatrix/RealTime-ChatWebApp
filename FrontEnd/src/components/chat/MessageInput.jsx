import { chatStyles } from "../../styles/chat.styles.js";
import { ACCENT } from "../../styles/colors.js";

// The message input bar at the bottom of the chat window.
// Receives text value, change handler, send handler, and keydown handler via props.

const MessageInput = ({ text, onChange, onSend, onKeyDown }) => {
  return (
    <div style={chatStyles.inputArea}>
      {/* Text input */}
      <textarea
        style={chatStyles.textInput}
        rows={1}
        placeholder="Type a message..."
        value={text}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />

      {/* Send button */}
      <button
        className="send-btn"
        style={chatStyles.sendBtn}
        onClick={onSend}
        disabled={!text.trim()}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MessageInput;

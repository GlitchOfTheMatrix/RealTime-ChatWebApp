import { useState } from "react";
import { chatStyles } from "../../styles/chat.styles.js";

// Renders one user row in the sidebar.
// Gets the user object and whether it's currently selected via props.

const UserListItem = ({ user, isSelected, onClick }) => {
  const [hovered, setHovered] = useState(false);

  // Get initials from full name for avatar fallback
  const initials = user.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const rowStyle = {
    ...chatStyles.userItem,
    ...(isSelected ? chatStyles.userItemActive : {}),
    ...(hovered && !isSelected ? chatStyles.userItemHover : {}),
  };

  return (
    <div
      style={rowStyle}
      onClick={() => onClick(user)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar — shows profile pic if available, otherwise initials */}
      {user.profilePic ? (
        <img
          src={user.profilePic}
          alt={user.fullName}
          style={chatStyles.avatar}
        />
      ) : (
        <div style={chatStyles.avatar}>{initials}</div>
      )}

      {/* Name + status */}
      <div style={chatStyles.userInfo}>
        <div style={chatStyles.userName}>{user.fullName}</div>
        <div style={chatStyles.userStatus}>Click to chat</div>
      </div>
    </div>
  );
};

export default UserListItem;

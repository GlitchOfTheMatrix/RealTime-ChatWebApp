import { chatStyles } from "../../styles/chat.styles.js";
import { useAuthStore } from "../../store/useAuthStore.js";
import UserListItem from "./UserListItem.jsx";

// Sidebar shows the brand, the list of users, and a logout button.
// It receives users and selection state via props from ChatPage.

const Sidebar = ({ users, selectedUser, onSelectUser, loadingUsers }) => {
  const { logout, authUser } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    // The router in App.jsx will automatically redirect to /login
    // because authUser becomes null after logout
  };

  return (
    <div style={chatStyles.sidebar}>
      {/* ── Header ── */}
      <div style={chatStyles.sidebarHeader}>
        <div style={chatStyles.sidebarBrand}>
          <div style={chatStyles.brandIconSmall}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={chatStyles.sidebarTitle}>Nexus</span>
        </div>

        <button style={chatStyles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* ── User list ── */}
      <div style={chatStyles.userList}>
        {loadingUsers ? (
          <div style={chatStyles.loadingWrap}>Loading users...</div>
        ) : users.length === 0 ? (
          <div style={chatStyles.loadingWrap}>No users found</div>
        ) : (
          users.map((user) => (
            <UserListItem
              key={user._id}
              user={user}
              isSelected={selectedUser?._id === user._id}
              onClick={onSelectUser}
            />
          ))
        )}
      </div>

      {/* ── Logged in as (bottom of sidebar) ── */}
      <div
        style={{
          padding: "16px 20px",
          borderTop: "1px solid #1e1e2e",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{ ...chatStyles.avatar, width: 32, height: 32, fontSize: 12 }}
        >
          {authUser?.profilePic ? (
            <img
              src={authUser.profilePic}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ) : (
            authUser?.fullName
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
              .slice(0, 2)
          )}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>
            {authUser?.fullName}
          </div>
          <div style={{ fontSize: 11, color: "#555" }}>Online</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { colors, ACCENT, ACCENT2 } from "./colors.js";

export const chatStyles = {
  // ─── Page root ────────────────────────────────────────────
  root: {
    height: "100vh",
    width: "100vw",
    background: colors.bgBase,
    display: "flex",
    fontFamily: "'DM Sans', sans-serif",
    overflow: "hidden",
    position: "relative",
  },

  // ─── Sidebar ──────────────────────────────────────────────
  sidebar: {
    width: 300,
    height: "100vh",
    background: colors.bgCard,
    borderRight: `1px solid ${colors.border}`,
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
  },
  sidebarHeader: {
    padding: "24px 20px 16px",
    borderBottom: `1px solid ${colors.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.textPrimary,
    letterSpacing: "-0.4px",
  },
  sidebarBrand: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  brandIconSmall: {
    width: 28,
    height: 28,
    borderRadius: 8,
    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    background: "transparent",
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    padding: "6px 10px",
    color: colors.textMuted,
    fontSize: 12,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    transition: "all 0.2s ease",
  },
  userList: {
    flex: 1,
    overflowY: "auto",
    padding: "8px 0",
  },

  // ─── User list item ───────────────────────────────────────
  userItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 20px",
    cursor: "pointer",
    transition: "background 0.15s ease",
    position: "relative",
  },
  userItemActive: {
    background: `${ACCENT}12`,
    borderRight: `2px solid ${ACCENT}`,
  },
  userItemHover: {
    background: "#ffffff08",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
    background: `linear-gradient(135deg, ${ACCENT}44, ${ACCENT2}44)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 700,
    color: colors.textPrimary,
    border: `1px solid ${colors.border}`,
  },
  userInfo: {
    flex: 1,
    overflow: "hidden",
  },
  userName: {
    fontSize: 14,
    fontWeight: 600,
    color: colors.textPrimary,
    marginBottom: 2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  userStatus: {
    fontSize: 12,
    color: colors.textMuted,
  },

  // ─── Main chat area ───────────────────────────────────────
  chatArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },

  // ─── Chat header ──────────────────────────────────────────
  chatHeader: {
    padding: "16px 24px",
    borderBottom: `1px solid ${colors.border}`,
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: colors.bgCard,
    flexShrink: 0,
  },
  chatHeaderName: {
    fontSize: 15,
    fontWeight: 700,
    color: colors.textPrimary,
    letterSpacing: "-0.3px",
  },
  chatHeaderStatus: {
    fontSize: 12,
    color: ACCENT,
  },

  // ─── Messages area ────────────────────────────────────────
  messagesArea: {
    flex: 1,
    overflowY: "auto",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  // ─── Empty state ──────────────────────────────────────────
  emptyState: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    color: colors.textMuted,
  },
  emptyIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    background: `${ACCENT}12`,
    border: `1px solid ${ACCENT}22`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: colors.textPrimary,
  },
  emptySubtitle: {
    fontSize: 13,
    color: colors.textMuted,
  },

  // ─── Message bubbles ──────────────────────────────────────
  bubbleRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: 8,
  },
  bubbleRowOwn: {
    flexDirection: "row-reverse",
  },
  bubble: {
    maxWidth: "65%",
    padding: "10px 14px",
    borderRadius: 16,
    fontSize: 14,
    lineHeight: 1.5,
    color: colors.textPrimary,
  },
  bubbleOther: {
    background: "#1e1e2e",
    borderBottomLeftRadius: 4,
  },
  bubbleOwn: {
    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
    borderBottomRightRadius: 4,
  },
  bubbleTime: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 4,
    textAlign: "right",
  },
  bubbleImage: {
    maxWidth: "100%",
    borderRadius: 12,
    marginBottom: 4,
    display: "block",
  },

  // ─── Message input ────────────────────────────────────────
  inputArea: {
    padding: "16px 24px",
    borderTop: `1px solid ${colors.border}`,
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: colors.bgCard,
    flexShrink: 0,
  },
  textInput: {
    flex: 1,
    background: colors.bgInput,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    padding: "12px 16px",
    fontSize: 14,
    color: colors.textPrimary,
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    resize: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "none",
    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    transition: "opacity 0.2s ease, transform 0.1s ease",
    boxShadow: `0 4px 16px ${ACCENT}33`,
  },

  // ─── Loading spinner ──────────────────────────────────────
  loadingWrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.textMuted,
    fontSize: 14,
  },
};

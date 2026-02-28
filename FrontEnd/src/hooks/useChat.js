import { useState, useEffect, useRef } from "react";
import { messageAPI } from "../lib/api.js";

// This hook owns all chat state:
// - the list of users in the sidebar
// - the currently selected user to chat with
// - the messages in the current conversation
// - sending messages

export const useChat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);

  // This ref points to the bottom of the messages list.
  // We use it to auto-scroll down when new messages arrive.
  const bottomRef = useRef(null);

  // ─── Load users on mount ───────────────────────────────────
  // useEffect with empty [] runs once when the component mounts.
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await messageAPI.getUsers();
        setUsers(data.filteredUsers);
      } catch (err) {
        console.error("Failed to load users:", err.message);
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  // ─── Load messages when selected user changes ──────────────
  // useEffect with [selectedUser] runs every time selectedUser changes.
  useEffect(() => {
    if (!selectedUser) return;

    const fetchMessages = async () => {
      setLoadingMessages(true);
      try {
        const data = await messageAPI.getMessages(selectedUser._id);
        setMessages(data);
      } catch (err) {
        console.error("Failed to load messages:", err.message);
      } finally {
        setLoadingMessages(false);
      }
    };
    fetchMessages();
  }, [selectedUser]);

  // ─── Auto-scroll to bottom when messages update ───────────
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ─── Send a message ───────────────────────────────────────
  const sendMessage = async () => {
    if (!text.trim() || !selectedUser) return;

    const tempText = text;
    setText(""); // clear input immediately for snappy UX

    try {
      const newMessage = await messageAPI.sendMessage(
        selectedUser._id,
        tempText,
        null,
      );
      // Append the new message to the list — no need to refetch everything
      setMessages((prev) => [...prev, newMessage]);
    } catch (err) {
      console.error("Failed to send message:", err.message);
      setText(tempText); // restore text if send failed
    }
  };

  // ─── Send on Enter key ────────────────────────────────────
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return {
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
  };
};

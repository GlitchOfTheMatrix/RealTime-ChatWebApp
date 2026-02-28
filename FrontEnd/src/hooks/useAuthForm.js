import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../lib/api";
import { useAuthStore } from "../store/useAuthStore";

// This hook owns ALL the state and logic for the auth page.
// Components just call this hook and get back what they need.
// They don't know HOW login works — they just call handleSubmit.

export const useAuthForm = () => {
  const [tab, setTab] = useState("login"); // "login" | "signup"
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // ─── Handle any input change ────────────────────────────────
  // Uses the input's `name` attribute to know which field to update.
  // e.target.name = "email", e.target.value = "user@example.com"
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(""); // clear error as user types
  };

  // ─── Switch between login and signup tabs ───────────────────
  const switchTab = (newTab) => {
    setTab(newTab);
    setError("");
    setSuccess("");
    setForm({ fullName: "", email: "", password: "" });
  };

  // ─── Validate form before submitting ────────────────────────
  const validate = () => {
    if (!form.email || !form.password) {
      setError("Please fill in all required fields.");
      return false;
    }
    if (tab === "signup" && !form.fullName) {
      setError("Please enter your full name.");
      return false;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const { setAuthUser } = useAuthStore();
  const navigate = useNavigate();

  // ─── Submit handler ─────────────────────────────────────────
  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!validate()) return;

    setLoading(true);
    try {
      let data;
      if (tab === "login") {
        data = await authAPI.login(form.email, form.password);
      } else {
        data = await authAPI.signup(form.fullName, form.email, form.password);
      }
      // Save user to global store, then navigate to chat
      setAuthUser(data);
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Return everything the components need
  return {
    tab,
    form,
    error,
    success,
    loading,
    handleChange,
    handleSubmit,
    switchTab,
  };
};

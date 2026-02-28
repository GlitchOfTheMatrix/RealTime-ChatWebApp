import { create } from "zustand";
import { authAPI } from "../lib/api.js";

// Zustand creates a global store — a variable the ENTIRE app can read and write.
// Any component can call useAuthStore() and get the current user.
// When the store updates, every component using it re-renders automatically.

export const useAuthStore = create((set) => ({
  // ─── State ────────────────────────────────────────────────
  authUser: null, // the logged-in user object (or null if not logged in)
  isCheckingAuth: true, // true while we're verifying the JWT on app load

  // ─── Actions ──────────────────────────────────────────────

  // Called once on app load — checks if the JWT cookie is still valid
  checkAuth: async () => {
    try {
      const data = await authAPI.checkAuth();
      set({ authUser: data });
    } catch {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  // Called after successful login or signup
  setAuthUser: (user) => set({ authUser: user }),

  // Called on logout
  logout: async () => {
    await authAPI.logout();
    set({ authUser: null });
  },
}));

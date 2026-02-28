import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";

// ProtectedRoute — only lets logged-in users through.
// If not logged in, redirects to /login.
const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuthStore();
  if (!authUser) return <Navigate to="/login" replace />;
  return children;
};

// PublicRoute — only lets logged-OUT users through.
// If already logged in, redirects to /chat.
const PublicRoute = ({ children }) => {
  const { authUser } = useAuthStore();
  if (authUser) return <Navigate to="/chat" replace />;
  return children;
};

const App = () => {
  const { checkAuth, isCheckingAuth } = useAuthStore();

  // On app load, silently check if the JWT cookie is still valid.
  // This keeps the user logged in even after refreshing the page.
  useEffect(() => {
    checkAuth();
  }, []);

  // While checking auth, show nothing (avoids flash of wrong page)
  if (isCheckingAuth) {
    return (
      <div
        style={{
          height: "100vh",
          background: "#0a0a0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#555",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* /login — only accessible when logged out */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />

        {/* /chat — only accessible when logged in */}
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />

        {/* / — redirect to /chat (will bounce to /login if not authenticated) */}
        <Route path="*" element={<Navigate to="/chat" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

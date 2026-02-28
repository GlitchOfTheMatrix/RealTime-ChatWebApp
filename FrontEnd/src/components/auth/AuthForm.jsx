import { authStyles } from "../../styles/auth.styles.js";

// AuthForm receives everything it needs via props.
// It knows nothing about state or API calls — that's the hook's job.
// This component is purely about rendering the form UI.

const AuthForm = ({
  tab,
  form,
  error,
  success,
  loading,
  onChange,
  onSubmit,
  onSwitchTab,
}) => {
  return (
    <div style={authStyles.card} className="form-card">
      {/* ── Tabs ── */}
      <div style={authStyles.tabRow}>
        {["login", "signup"].map((t) => (
          <button
            key={t}
            onClick={() => onSwitchTab(t)}
            style={{
              ...authStyles.tabBase,
              ...(tab === t ? authStyles.tabActive : authStyles.tabInactive),
            }}
          >
            {t === "login" ? "Sign In" : "Create Account"}
          </button>
        ))}
      </div>

      {/* ── Title ── */}
      <div style={authStyles.formTitle}>
        {tab === "login" ? "Welcome back" : "Join Nexus"}
      </div>
      <div style={authStyles.formSubtitle}>
        {tab === "login"
          ? "Sign in to continue your conversations"
          : "Create your account in seconds"}
      </div>

      {/* ── Feedback ── */}
      {error && <div style={authStyles.errorBox}>{error}</div>}
      {success && <div style={authStyles.successBox}>{success}</div>}

      {/* ── Full Name (signup only) ── */}
      {tab === "signup" && (
        <div style={authStyles.fieldGroup}>
          <label style={authStyles.label}>Full Name</label>
          <input
            style={authStyles.input}
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={form.fullName}
            onChange={onChange}
          />
        </div>
      )}

      {/* ── Email ── */}
      <div style={authStyles.fieldGroup}>
        <label style={authStyles.label}>Email</label>
        <input
          style={authStyles.input}
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={onChange}
        />
      </div>

      {/* ── Password ── */}
      <div style={authStyles.fieldGroup}>
        <label style={authStyles.label}>Password</label>
        <input
          style={authStyles.input}
          type="password"
          name="password"
          placeholder="Min. 8 characters"
          value={form.password}
          onChange={onChange}
        />
      </div>

      {/* ── Submit ── */}
      <button
        className="submit-btn"
        style={authStyles.submitBtn}
        onClick={onSubmit}
        disabled={loading}
      >
        {loading
          ? "Please wait..."
          : tab === "login"
            ? "Sign In →"
            : "Create Account →"}
      </button>

      {/* ── Switch tab ── */}
      <div style={authStyles.dividerRow}>
        <div style={authStyles.dividerLine} />
        <span style={authStyles.dividerText}>
          {tab === "login" ? "New here?" : "Already have an account?"}
        </span>
        <div style={authStyles.dividerLine} />
      </div>

      <button
        style={authStyles.switchTabBtn}
        onClick={() => onSwitchTab(tab === "login" ? "signup" : "login")}
      >
        {tab === "login" ? "Create an account" : "Sign in instead"}
      </button>
    </div>
  );
};

export default AuthForm;

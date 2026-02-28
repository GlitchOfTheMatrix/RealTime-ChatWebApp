import { useAuthForm } from "../hooks/useAuthForm.js";
import { authStyles } from "../styles/auth.styles.js";
import BrandPanel from "../components/auth/BrandPanel.jsx";
import AuthForm from "../components/auth/AuthForm.jsx";
import GlobalStyle from "../components/auth/GlobalStyle.jsx";

// AuthPage is the conductor — it pulls the hook and passes
// data down to components. It doesn't do logic itself,
// it just connects the hook to the UI.

const AuthPage = () => {
  const {
    tab,
    form,
    error,
    success,
    loading,
    handleChange,
    handleSubmit,
    switchTab,
  } = useAuthForm();

  return (
    <>
      <GlobalStyle />
      <div style={authStyles.root}>
        {/* Ambient glow blobs — purely decorative */}
        <div style={authStyles.blob1} className="blob1" />
        <div style={authStyles.blob2} className="blob2" />

        {/* Left — branding */}
        <BrandPanel />

        {/* Center — vertical divider line */}
        <div style={authStyles.dividerVertical} />

        {/* Right — form card */}
        <div style={authStyles.right}>
          <AuthForm
            tab={tab}
            form={form}
            error={error}
            success={success}
            loading={loading}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onSwitchTab={switchTab}
          />
        </div>
      </div>
    </>
  );
};

export default AuthPage;

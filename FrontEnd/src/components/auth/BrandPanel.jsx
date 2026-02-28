import { authStyles } from "../../styles/auth.styles.js";

// Static content — the left panel just displays brand info.
// No state, no logic. Pure UI.

const features = [
  "End-to-end encrypted messages",
  "Send images & media instantly",
  "Real-time delivery & read receipts",
  "Works on all your devices",
];

const BrandPanel = () => {
  return (
    <div style={authStyles.left}>
      {/* Logo + App name */}
      <div style={authStyles.brandRow}>
        <div style={authStyles.brandIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span style={authStyles.brandName}>Nexus</span>
      </div>

      {/* Headline */}
      <h1 style={authStyles.headline}>
        Chat without
        <br />
        <span style={authStyles.headlineAccent}>limits.</span>
      </h1>

      {/* Subtext */}
      <p style={authStyles.subtext}>
        A real-time messaging experience built for clarity, speed, and people
        who value their conversations.
      </p>

      {/* Feature list */}
      <div style={authStyles.featureList}>
        {features.map((feature) => (
          <div key={feature} style={authStyles.featureItem}>
            <div style={authStyles.featureDot} />
            <span style={authStyles.featureText}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPanel;

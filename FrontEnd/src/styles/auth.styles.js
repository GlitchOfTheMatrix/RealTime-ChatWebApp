import { colors, ACCENT, ACCENT2 } from "./colors.js";

export const authStyles = {
  // ─── Layout ───────────────────────────────────────────────
  root: {
    minHeight: "100vh",
    background: colors.bgBase,
    display: "flex",
    fontFamily: "'DM Sans', sans-serif",
    overflow: "hidden",
    position: "relative",
  },

  // ─── Ambient background blobs ─────────────────────────────
  blob1: {
    position: "fixed",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 70%)`,
    top: -200,
    left: -200,
    pointerEvents: "none",
    zIndex: 0,
  },
  blob2: {
    position: "fixed",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${ACCENT2}14 0%, transparent 70%)`,
    bottom: -150,
    right: -150,
    pointerEvents: "none",
    zIndex: 0,
  },

  // ─── Vertical divider between panels ──────────────────────
  dividerVertical: {
    width: 1,
    background:
      "linear-gradient(to bottom, transparent, #1e1e2e 20%, #1e1e2e 80%, transparent)",
    alignSelf: "stretch",
    zIndex: 1,
  },

  // ─── Left brand panel ─────────────────────────────────────
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px 80px",
    position: "relative",
    zIndex: 1,
  },
  brandRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 64,
  },
  brandIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: colors.accentGradient,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  brandName: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.textPrimary,
    letterSpacing: "-0.3px",
  },
  headline: {
    fontSize: 52,
    fontWeight: 800,
    color: colors.textPrimary,
    lineHeight: 1.1,
    letterSpacing: "-2px",
    marginBottom: 20,
  },
  headlineAccent: {
    background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtext: {
    fontSize: 16,
    color: colors.textMuted,
    lineHeight: 1.6,
    maxWidth: 380,
    marginBottom: 48,
  },
  featureList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  featureDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: colors.accentGradient,
    flexShrink: 0,
  },
  featureText: {
    fontSize: 14,
    color: "#888",
  },

  // ─── Right form panel ─────────────────────────────────────
  right: {
    width: 480,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    position: "relative",
    zIndex: 1,
  },
  card: {
    width: "100%",
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: 24,
    padding: "40px",
    boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
  },

  // ─── Tabs ──────────────────────────────────────────────────
  tabRow: {
    display: "flex",
    background: colors.bgTab,
    borderRadius: 12,
    padding: 4,
    marginBottom: 32,
    gap: 4,
  },
  tabBase: {
    flex: 1,
    padding: "10px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    transition: "all 0.2s ease",
    fontFamily: "'DM Sans', sans-serif",
  },
  tabActive: {
    background: `linear-gradient(135deg, ${ACCENT}22, ${ACCENT2}22)`,
    color: colors.textPrimary,
    border: `1px solid ${ACCENT}44`,
  },
  tabInactive: {
    background: "transparent",
    color: colors.textDim,
    border: "1px solid transparent",
  },

  // ─── Form titles ───────────────────────────────────────────
  formTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: colors.textPrimary,
    marginBottom: 6,
    letterSpacing: "-0.5px",
  },
  formSubtitle: {
    fontSize: 13,
    color: colors.textDim,
    marginBottom: 28,
  },

  // ─── Form fields ───────────────────────────────────────────
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: colors.textDim,
    marginBottom: 8,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    background: colors.bgInput,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    padding: "12px 16px",
    fontSize: 14,
    color: colors.textPrimary,
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: "border-box",
  },

  // ─── Submit button ─────────────────────────────────────────
  submitBtn: {
    width: "100%",
    padding: "14px",
    borderRadius: 12,
    border: "none",
    background: colors.accentGradient,
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 8,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "-0.3px",
    transition: "opacity 0.2s ease, transform 0.1s ease",
    boxShadow: `0 8px 32px ${ACCENT}33`,
  },

  // ─── Divider ───────────────────────────────────────────────
  dividerRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "20px 0",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    background: colors.border,
  },
  dividerText: {
    fontSize: 12,
    color: colors.textFaint,
  },

  // ─── Feedback boxes ────────────────────────────────────────
  errorBox: {
    background: colors.errorBg,
    border: `1px solid ${colors.errorBorder}`,
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 13,
    color: colors.error,
    marginBottom: 16,
  },
  successBox: {
    background: colors.successBg,
    border: `1px solid ${colors.successBorder}`,
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 13,
    color: ACCENT,
    marginBottom: 16,
  },

  // ─── Switch tab button (bottom of card) ───────────────────
  switchTabBtn: {
    background: "transparent",
    border: `1px solid ${colors.border}`,
    borderRadius: 10,
    padding: "11px",
    width: "100%",
    color: colors.textDim,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "color 0.2s ease",
  },
};

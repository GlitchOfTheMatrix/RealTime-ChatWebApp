import { ACCENT } from "../../styles/colors.js";

// GlobalStyle injects CSS that can't be done with inline styles:
// - Google Font import
// - Keyframe animations
// - Pseudo-class styles (:focus, :hover, :active)
// These need real CSS — inline styles can't do them.

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #0a0a0f;
    }

    /* Input focus ring */
    input:focus {
      border-color: ${ACCENT}88 !important;
      box-shadow: 0 0 0 3px ${ACCENT}18 !important;
    }

    /* Submit button hover/active */
    .submit-btn:hover {
      opacity: 0.88;
      transform: translateY(-1px);
    }
    .submit-btn:active {
      transform: translateY(0px);
    }

    /* Form card entrance animation */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .form-card {
      animation: fadeUp 0.4s ease forwards;
    }

    /* Blob floating animation */
    @keyframes blobFloat {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-20px); }
    }
    .blob1 { animation: blobFloat 8s ease-in-out infinite; }
    .blob2 { animation: blobFloat 10s ease-in-out infinite reverse; }
  `}</style>
);

export default GlobalStyle;

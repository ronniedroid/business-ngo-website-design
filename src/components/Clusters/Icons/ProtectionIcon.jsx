import { h } from "preact";

function ProtectionIcon({ width = 14, height = 14 }) {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#f1f3f5" data-name="Layer 2">
        <path d="M45 5a3.018 3.018 0 0 0-3 3v16l-4.806 4.844a.973.973 0 0 1-1.604.173 1.25 1.25 0 0 1 0-1.747l4.056-4.127a2.148 2.148 0 0 0 0-3 2.06 2.06 0 0 0-2.948 0L28.83 28.15A6.396 6.396 0 0 0 27.017 33H27v15h9v-9.655a6.227 6.227 0 0 0 1.665-1.207l9.47-9.616A3.027 3.027 0 0 0 48 25.4V8a3.018 3.018 0 0 0-3-3zM19.17 28.149l-7.868-8.006a2.06 2.06 0 0 0-2.948 0 2.148 2.148 0 0 0 0 3l4.056 4.127a1.25 1.25 0 0 1 0 1.747 1.2 1.2 0 0 1-1.717 0L6 24V8a3.018 3.018 0 0 0-3-3 3.018 3.018 0 0 0-3 3v17.4a3.027 3.027 0 0 0 .866 2.122l9.47 9.616A6.227 6.227 0 0 0 12 38.345V48h9V33h-.017a6.396 6.396 0 0 0-1.813-4.851z" />
        <circle cx="24" cy="9" r="9" />
      </g>
    </svg>
  );
}

export default ProtectionIcon;

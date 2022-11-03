import { h } from "preact";

function WASHIcon({ width = 14, height = 14 }) {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#f1f3f5" data-name="Layer 2">
        <path
          d="M42.32 31.166C43.564 32.86 48 39.117 48 41.976a6 6 0 1 1-12 0c0-2.859 4.436-9.116 5.68-10.81a.392.392 0 0 1 .64 0zM2 1h3a2 2 0 0 1 2 2v5h12V3h-4.5a1.5 1.5 0 0 1 0-3h14a1.5 1.5 0 0 1 0 3H24v5h10.147A11.866 11.866 0 0 1 46 19.853V22h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H37a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-2.147A3.857 3.857 0 0 0 34.147 16H7v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"
          fill="#f1f3f5"
        />
      </g>
    </svg>
  );
}

export default WASHIcon;

import { h } from "preact";

function GeneralIcon({ width = 14, height = 14, fill = "#f1f3f5" }) {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill} data-name="Layer 2">
        <path
          d="M2.012 22h7.976A2.012 2.012 0 0 1 12 24.012v17.976A2.012 2.012 0 0 1 9.988 44H2.012A2.012 2.012 0 0 1 0 41.988V24.012A2.012 2.012 0 0 1 2.012 22zM20.115 11h7.873A2.012 2.012 0 0 1 30 13.012v28.976A2.012 2.012 0 0 1 27.988 44h-7.873a2.012 2.012 0 0 1-2.011-2.012V13.012A2.012 2.012 0 0 1 20.115 11zM38.012 0h7.976A2.012 2.012 0 0 1 48 2.012v39.976A2.012 2.012 0 0 1 45.988 44h-7.976A2.012 2.012 0 0 1 36 41.988V2.012A2.012 2.012 0 0 1 38.012 0z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GeneralIcon;

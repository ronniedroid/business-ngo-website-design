import { h } from "preact";

function ClusterIcon(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      version="1.1"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 8a7.995 7.995 0 0 0-15.979-.418l-18.004 6.157a8.003 8.003 0 1 0-2.473 12.425L24.43 37.427a7.999 7.999 0 1 0 12.3-3.868l4.448-17.655A7.995 7.995 0 0 0 48 8zM28.352 32.886L15.53 21.68a7.96 7.96 0 0 0 .45-2.27l17.997-6.156a8.03 8.03 0 0 0 1.369 1.244l-4.43 17.584a7.94 7.94 0 0 0-2.564.804z"
        fill="#f1f3f5"
        data-name="Layer 2"
      />
    </svg>
  );
}

export default ClusterIcon;

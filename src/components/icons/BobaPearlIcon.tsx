import type { SVGProps } from "react";

const BobaPearlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    aria-hidden="true"
    {...props}
  >
    <circle cx={50} cy={50} r={50} fill="currentColor" />
    <circle cx={40} cy={40} r={10} fill="#fff" opacity={0.7} />
  </svg>
);

export default BobaPearlIcon;

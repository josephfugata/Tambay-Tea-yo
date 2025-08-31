import * as React from 'react';
import type { SVGProps } from 'react';

const MilkTeaCupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 300"
    width="200"
    height="300"
    {...props}
  >
    {/* Lid */}
    <path d="M50 0 H150 A10 10 0 0 1 150 20 H50 A10 10 0 0 1 50 0 Z" fill="#E6E6FA" />
    <rect x="90" y="5" width="20" height="10" fill="#FFF5EE" />

    {/* Cup */}
    <path
      d="M60 20 L40 290 H160 L140 20 Z"
      stroke="#E6E6FA"
      strokeWidth="4"
      fill="url(#grad)"
    />
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFF5EE', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: '#E6E6FA', stopOpacity: 0.9 }} />
      </linearGradient>
    </defs>
  </svg>
);

export default MilkTeaCupIcon;

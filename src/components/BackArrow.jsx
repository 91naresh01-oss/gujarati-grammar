import React from 'react';

const BackArrow = ({ size = 20, color = 'currentColor' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: 'block' }}
    >
        <path d="M19 12H5" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
);

export default BackArrow;

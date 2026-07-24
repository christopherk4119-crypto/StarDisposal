const STAR_POINTS =
  "100,8 121.16,70.88 187.5,71.57 134.24,111.12 154.08,174.43 100,136 45.92,174.43 65.76,111.12 12.5,71.57 78.84,70.88";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Star Disposal Services logo"
    >
      <rect x="0" y="0" width="200" height="200" rx="18" fill="#FFD700" />
      <polygon
        points={STAR_POINTS}
        fill="#1E2A5E"
        stroke="#1E2A5E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text
        x="100"
        y="103"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="34"
        fill="#D32F2F"
        stroke="#FFFFFF"
        strokeWidth="3"
        paintOrder="stroke"
        letterSpacing="2"
      >
        STAR
      </text>
      <rect x="24" y="150" width="152" height="24" rx="4" fill="#FFD700" />
      <text
        x="100"
        y="167"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        fontSize="13"
        fill="#1E2A5E"
        letterSpacing="0.5"
      >
        DISPOSAL SERVICES
      </text>
    </svg>
  );
}

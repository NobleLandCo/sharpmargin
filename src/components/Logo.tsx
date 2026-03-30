export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SharpMargin"
    >
      <text
        x="0"
        y="100"
        fontFamily="Inter,sans-serif"
        fontSize="96"
        fontWeight="900"
        fill="white"
        letterSpacing="-3"
      >
        SHARP
      </text>
      <text
        x="0"
        y="175"
        fontFamily="Inter,sans-serif"
        fontSize="96"
        fontWeight="200"
        fill="white"
        opacity="0.25"
        letterSpacing="-3"
      >
        MARGIN
      </text>
      <polyline
        points="0,138 80,118 160,128 250,98 340,65 395,45"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="395" cy="45" r="6" fill="#C9A84C" />
    </svg>
  );
}

export default function SettingsIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06
               a2 2 0 11-2.83 2.83l-.06-.06
               a1.65 1.65 0 00-1.82-.33
               1.65 1.65 0 00-1 1.51V21
               a2 2 0 11-4 0v-.09
               a1.65 1.65 0 00-1-1.51
               1.65 1.65 0 00-1.82.33l-.06.06
               a2 2 0 11-2.83-2.83l.06-.06
               a1.65 1.65 0 00.33-1.82
               1.65 1.65 0 00-1.51-1H3
               a2 2 0 110-4h.09
               a1.65 1.65 0 001.51-1
               1.65 1.65 0 00-.33-1.82l-.06-.06
               a2 2 0 112.83-2.83l.06.06
               a1.65 1.65 0 001.82.33h.02
               a1.65 1.65 0 001-1.51V3
               a2 2 0 114 0v.09
               a1.65 1.65 0 001 1.51h.02
               a1.65 1.65 0 001.82-.33l.06-.06
               a2 2 0 112.83 2.83l-.06.06
               a1.65 1.65 0 00-.33 1.82v.02
               a1.65 1.65 0 001.51 1H21
               a2 2 0 110 4h-.09
               a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}
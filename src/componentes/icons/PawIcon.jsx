export default function PawIcon({ className = "", width = 24, height = 24, color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Ícone de pata"
    >
      <path d="M12 10c-1.333-2-2.667-3-4-3s-2.667 1-4 3 2.667 6 4 6 2.667-4 4-6Z" />
      <circle cx="8.5" cy="4.5" r="2.5" />
      <circle cx="15.5" cy="4.5" r="2.5" />
      <circle cx="19" cy="9" r="2" />
      <circle cx="5" cy="9" r="2" />
    </svg>
  );
}

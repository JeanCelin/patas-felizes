import { Share2 } from "lucide-react";

export default function ShareIcon({ size = 16, color = "currentColor" }) {
  return (
    <Share2
      size={size}
      color={color}
      strokeWidth={2}
      style={{
        backgroundColor: "transparent",
        fill: "none",
        flexShrink: "0",
        marginTop: "2px",
      }}
    />
  );
}

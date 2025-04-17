import { Heart } from "lucide-react";

export default function HeartIcon({ size = 16, color = "currentColor" }) {
  return (
    <Heart
      size={size}
      color={color}
      strokeWidth={2}
      style={{
        backgroundColor: "transparent",
        fill: "none",
      }}
    />
  );
}

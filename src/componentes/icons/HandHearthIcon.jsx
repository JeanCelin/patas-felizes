import { HandHeart } from "lucide-react";

export default function HandHeartIcon ({ size = 16, color = "currentColor" }) {
  return (
    <HandHeart
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
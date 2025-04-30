import { Gift } from "lucide-react";

export default function GiftIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Gift
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
import { Clock } from "lucide-react";

export default function ClockIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Clock
      size={size}
      color={color}
      strokeWidth={2}
      style={{
        backgroundColor: "transparent",
        fill: "none",
        flexShrink: "0",
        marginTop: "2px"
      }}
    />
  );
}
import { Award } from "lucide-react";

export default function AwardIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Award
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
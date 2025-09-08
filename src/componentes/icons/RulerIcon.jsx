import { Ruler } from "lucide-react";

export default function RulerIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Ruler
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
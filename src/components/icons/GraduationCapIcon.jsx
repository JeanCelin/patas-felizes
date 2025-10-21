import { GraduationCap } from "lucide-react";

export default function GraduationCapIcon ({ size = 16, color = "currentColor" }) {
  return (
    <GraduationCap
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
import { Briefcase } from "lucide-react";

export default function BriefcaseIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Briefcase
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
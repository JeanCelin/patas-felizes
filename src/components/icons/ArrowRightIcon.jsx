import { ArrowRight } from "lucide-react";

export default function ArrowRightIcon ({ size = 16, color = "currentColor" }) {
  return (
    <ArrowRight
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
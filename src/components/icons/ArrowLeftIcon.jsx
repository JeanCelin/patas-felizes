import { ArrowLeft } from "lucide-react";

export default function ArrowLeftIcon ({ size = 16, color = "currentColor" }) {
  return (
    <ArrowLeft
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
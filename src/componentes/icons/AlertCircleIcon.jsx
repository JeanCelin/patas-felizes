import { AlertCircle } from "lucide-react";

export default function AlertCircleIcon ({ size = 16, color = "currentColor" }) {
  return (
    <AlertCircle
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
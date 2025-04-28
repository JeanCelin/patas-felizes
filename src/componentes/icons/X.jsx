import { X } from "lucide-react";

export default function CloseIcon ({ size = 16, color = "currentColor" }) {
  return (
    <X
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
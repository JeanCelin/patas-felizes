import { DollarSign } from "lucide-react";

export default function DollarSignIcon ({ size = 16, color = "currentColor" }) {
  return (
    <DollarSign
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
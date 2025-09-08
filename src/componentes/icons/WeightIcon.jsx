import { Weight } from "lucide-react";

export default function WeightIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Weight
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
import { CircleCheckBig } from "lucide-react";

export default function CircleCheckBigIcon ({ size = 16, color = "currentColor" }) {
  return (
    <CircleCheckBig
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
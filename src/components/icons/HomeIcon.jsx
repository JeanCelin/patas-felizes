import { Home } from "lucide-react";

export default function HomeIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Home
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
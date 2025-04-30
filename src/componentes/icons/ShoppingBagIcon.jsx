import { ShoppingBag } from "lucide-react";

export default function ShoppingBagIcon ({ size = 16, color = "currentColor" }) {
  return (
    <ShoppingBag
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
// componentes/icons/IconePata.jsx
import { MessageSquare } from "lucide-react";

export default function MessageSquareIcon ({ size = 16, color = "currentColor" }) {
  return (
    <MessageSquare
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

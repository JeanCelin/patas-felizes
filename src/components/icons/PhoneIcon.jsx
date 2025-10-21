// componentes/icons/IconePata.jsx
import { Phone } from "lucide-react";

export default function PhoneIcon({ size = 16, color = "currentColor" }) {
  return (
    <Phone
      size={size}
      color={color}
      strokeWidth={2}
      style={{
        backgroundColor: "transparent",
        fill: "none",
        flexShrink: "0",
        marginTop: "2px",
      }}
    />
  );
}

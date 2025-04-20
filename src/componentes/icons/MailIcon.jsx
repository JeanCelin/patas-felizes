// componentes/icons/IconePata.jsx
import { Mail } from "lucide-react";

export default function MailIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Mail
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

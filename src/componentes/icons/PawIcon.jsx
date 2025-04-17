// componentes/icons/IconePata.jsx
import { PawPrint } from "lucide-react";

export default function PawIcon({ size = 16, color = "currentColor" }) {
  return (
    <PawPrint
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

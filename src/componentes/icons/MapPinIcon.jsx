// componentes/icons/IconePata.jsx
import { MapPin } from "lucide-react";

export default function MapPinIcon ({ size = 16, color = "currentColor" }) {
  return (
    <MapPin
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

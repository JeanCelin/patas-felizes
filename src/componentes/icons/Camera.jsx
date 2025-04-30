import { Camera } from "lucide-react";

export default function CameraIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Camera
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
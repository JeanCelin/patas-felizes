import { Users } from "lucide-react";

export default function UsersIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Users
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
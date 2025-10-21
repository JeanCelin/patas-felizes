import { Calendar } from "lucide-react";

export default function CalendarIcon ({ size = 16, color = "currentColor" }) {
  return (
    <Calendar
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
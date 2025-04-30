import { FileText } from "lucide-react";

export default function FileTextIcon ({ size = 16, color = "currentColor" }) {
  return (
    <FileText
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
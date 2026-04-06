import { CreditCard } from "lucide-react";
import { PSE_URL } from "@/lib/constants";

export function PSEButton() {
  return (
    <a
      href={PSE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-fundafast-blue-dark shadow-sm transition-all hover:shadow-md hover:scale-105"
    >
      <CreditCard className="h-4 w-4" />
      Pagar con PSE
    </a>
  );
}

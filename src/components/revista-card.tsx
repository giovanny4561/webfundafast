import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface RevistaCardProps {
  edition: string;
  date: string;
  cover: string;
  pdf: string;
}

export function RevistaCard({ edition, date, cover, pdf }: RevistaCardProps) {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-[3/4] bg-gray-100">
        <Image
          src={cover}
          alt={`Portada Edicion ${edition}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="font-bold text-fundafast-text">Edicion N° {edition}</h3>
          <p className="text-sm text-fundafast-text-secondary">{date}</p>
        </div>
        <ExternalLink className="h-4 w-4 text-fundafast-blue opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </a>
  );
}

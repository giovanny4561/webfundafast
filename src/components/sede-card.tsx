import { MapPin, Phone } from "lucide-react";

interface SedeCardProps {
  city: string;
  address: string;
  phones: readonly string[];
}

export function SedeCard({ city, address, phones }: SedeCardProps) {
  return (
    <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
      <h4 className="mb-3 text-lg font-bold text-white">{city}</h4>
      <div className="flex items-start gap-2 text-blue-100">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
        <p className="text-sm">{address}</p>
      </div>
      {phones.map((phone) => (
        <div key={phone} className="mt-2 flex items-center gap-2 text-blue-100">
          <Phone className="h-4 w-4 shrink-0" />
          <a href={`tel:+57${phone}`} className="text-sm hover:text-white transition-colors">
            +57 {phone}
          </a>
        </div>
      ))}
    </div>
  );
}

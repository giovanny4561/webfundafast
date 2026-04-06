import Link from "next/link";
import { Zap, Handshake, Shield, Building, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Handshake,
  Shield,
  Building,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export function ServiceCard({ icon, title, description, href, cta }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Zap;

  return (
    <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-5 inline-flex rounded-xl bg-fundafast-blue/10 p-3">
        <Icon className="h-7 w-7 text-fundafast-blue" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-fundafast-text">{title}</h3>
      <p className="mb-6 text-fundafast-text-secondary leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-semibold text-fundafast-blue hover:text-fundafast-blue-light transition-colors"
      >
        {cta}
        <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
      </Link>
    </div>
  );
}

import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-ff-red text-white hover:bg-ff-red-hover focus:ring-ff-red shadow-lg hover:shadow-xl",
    secondary:
      "bg-ff-blue text-white hover:bg-ff-blue-light focus:ring-ff-blue",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-ff-blue-dark",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const className = `${base} ${variants[variant]} ${sizes[size]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

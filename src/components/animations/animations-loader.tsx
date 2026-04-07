"use client";

import dynamic from "next/dynamic";

// Dynamically import the animation engine client-side only.
// This is inside a "use client" file so ssr:false is valid here.
const AnimationsClient = dynamic(
  () =>
    import("@/components/animations/animations-client").then(
      (m) => m.AnimationsClient
    ),
  { ssr: false }
);

export function AnimationsLoader() {
  return <AnimationsClient />;
}

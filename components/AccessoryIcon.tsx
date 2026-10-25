import type { AccessoryGroup } from "@/lib/accessories";

/* Biểu tượng nét đơn giản cho từng nhóm phụ kiện */
export default function AccessoryIcon({ icon, size = 40 }: { icon: AccessoryGroup["icon"]; size?: number }) {
  const p = { width: size, height: size, viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (icon) {
    case "rod":
      return (
        <svg {...p}>
          <path d="M8 18h32" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="42" cy="18" r="3" />
          <path d="M12 18v4M36 18v4" />
          <path d="M14 22c0 8 2 14 3 18M22 22c0 8 1 14 1 18M30 22c0 8-1 14-2 18" opacity=".55" />
        </svg>
      );
    case "ring":
      return (
        <svg {...p}>
          <circle cx="24" cy="24" r="13" />
          <circle cx="24" cy="24" r="7" />
        </svg>
      );
    case "bracket":
      return (
        <svg {...p}>
          <rect x="8" y="10" width="8" height="18" rx="2" />
          <path d="M16 19h16" />
          <circle cx="36" cy="19" r="5" />
          <path d="M12 14v2M12 22v2" />
        </svg>
      );
    case "tieback":
      return (
        <svg {...p}>
          <path d="M18 8c-4 10-4 22 0 32M30 8c4 10 4 22 0 32" opacity=".55" />
          <path d="M14 26c4 4 16 4 20 0" />
          <path d="M34 26c2 3 3 6 2 10M36 36l-2 3M36 36l2 3" />
        </svg>
      );
    case "hook":
      return (
        <svg {...p}>
          <path d="M24 8v14a6 6 0 1 1-6 6" />
          <path d="M8 38h32" />
          <path d="M12 34v8M20 34v8M28 34v8M36 34v8" opacity=".55" />
        </svg>
      );
  }
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE, telHref } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/bang-gia", label: "Bảng giá" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-head">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Đức Mạnh – Vải & phụ kiện rèm cửa – Trang chủ">
          <span className="main">ĐỨC MẠNH</span>
          <span className="sub">VẢI &amp; PHỤ KIỆN RÈM CỬA</span>
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen((o) => !o)}>
          Menu
        </button>
        <nav className={`nav${open ? " open" : ""}`} id="nav">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={(l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <a className="btn btn-primary" href={telHref(SITE.phone)}>
            Gọi đặt vải
          </a>
        </nav>
      </div>
    </header>
  );
}

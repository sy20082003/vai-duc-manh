import Link from "next/link";
import { SITE, telHref } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <b>{SITE.legalName}</b>
          <span>{SITE.address}</span>
        </div>
        <div>
          <b>Trang</b>
          <Link href="/san-pham">Sản phẩm</Link>
          <Link href="/bang-gia">Bảng giá</Link>
          <Link href="/tin-tuc">Tin tức</Link>
          <Link href="/gioi-thieu">Giới thiệu</Link>
          <Link href="/lien-he">Liên hệ</Link>
        </div>
        <div>
          <b>Liên hệ</b>
          {SITE.phones.map((p) => (
            <a key={p.num} href={telHref(p.num)}>
              {p.num} – {p.label}
            </a>
          ))}
          {SITE.email && <a href={`mailto:${SITE.email}`}>{SITE.email}</a>}
          <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { FacebookIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { SITE, mapHref, telHref, zaloHref } from "@/lib/data";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `Liên hệ Đức Mạnh: ${SITE.address}. Điện thoại, Zalo: ${SITE.phones.map((p) => p.num).join(", ")}.`,
  alternates: { canonical: "/lien-he" },
};

export default function ContactPage() {
  return (
    <>
      <PageHead crumb="Liên hệ" title="Liên hệ" lead="Gọi điện hoặc nhắn Zalo để được báo giá nhanh nhất." />
      <section className="block">
        <div className="wrap">
          <div className="channels">
            {SITE.phones.map((p) => (
              <a key={p.num} className="channel" href={telHref(p.num)}>
                <span className="ic">
                  <PhoneIcon />
                </span>
                <span>
                  <small>{p.label}</small>
                  <b>{p.num}</b>
                </span>
              </a>
            ))}
            <a className="channel" href={zaloHref(SITE.zalo)} target="_blank" rel="noopener noreferrer">
              <span className="ic" aria-hidden="true">
                Zalo
              </span>
              <span>
                <small>Nhắn Zalo</small>
                <b>{SITE.zalo}</b>
              </span>
            </a>
            <a className="channel" href={SITE.facebook} target="_blank" rel="noopener noreferrer">
              <span className="ic">
                <FacebookIcon />
              </span>
              <span>
                <small>Facebook</small>
                <b>Trang Facebook công ty</b>
              </span>
            </a>
            {SITE.email && (
              <a className="channel" href={`mailto:${SITE.email}`}>
                <span className="ic">
                  <MailIcon />
                </span>
                <span>
                  <small>Email</small>
                  <b>{SITE.email}</b>
                </span>
              </a>
            )}
            <a className="channel" href={mapHref} target="_blank" rel="noopener noreferrer">
              <span className="ic">
                <PinIcon />
              </span>
              <span>
                <small>Chỉ đường</small>
                <b>{SITE.address}</b>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

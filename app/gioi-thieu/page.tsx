import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import { SITE, telHref } from "@/lib/data";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: SITE.about,
  alternates: { canonical: "/gioi-thieu" },
};

export default function AboutPage() {
  return (
    <>
      <PageHead crumb="Giới thiệu" title={`Về ${SITE.shortName}`} />
      <section className="block">
        <div className="wrap about-grid">
          <div>
            <p className="lead" style={{ color: "var(--ink)" }}>
              {SITE.about}
            </p>
            <p style={{ color: "var(--muted)" }}>
              Vải được chia theo từng quyển mẫu với giá cố định, giúp đại lý chọn mẫu cùng khách hàng và báo giá ngay tại chỗ. Khi cần đặt hàng, đại
              lý chỉ cần báo mã vải và số lượng.
            </p>
            <figure className="about-photo">
              <Image
                src="/images/cua-hang-duc-manh.jpg"
                alt="Trụ sở Công ty Đức Mạnh tại 714 – 716 Phạm Văn Bạch, Gò Vấp"
                fill
                sizes="(max-width: 860px) 100vw, 600px"
              />
            </figure>
          </div>
          <dl className="info">
            <dt>Tên công ty</dt>
            <dd>{SITE.legalName}</dd>
            <dt>Mã số thuế</dt>
            <dd>{SITE.taxId}</dd>
            <dt>Địa chỉ</dt>
            <dd>{SITE.address}</dd>
            <dt>Giờ làm việc</dt>
            <dd>{SITE.hours}</dd>
            <dt>Điện thoại</dt>
            <dd>
              {SITE.phones.map((p) => (
                <a key={p.num} href={telHref(p.num)} style={{ display: "block", textDecoration: "none" }}>
                  {p.num} ({p.label})
                </a>
              ))}
            </dd>
          </dl>
        </div>
      </section>
      <section className="block" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <h2>Quy trình đặt vải</h2>
          <div className="steps">
            <div className="step">
              <h3>Chọn mã trong quyển mẫu</h3>
              <p>Chọn mẫu cùng khách hàng, giá đã cố định theo quyển.</p>
            </div>
            <div className="step">
              <h3>Báo mã và số lượng</h3>
              <p>Gọi điện hoặc nhắn Zalo mã vải, số mét cần lấy và địa chỉ nhận hàng.</p>
            </div>
            <div className="step">
              <h3>Cắt vải và giao hàng</h3>
              <p>Cắt đúng số mét, giao nội thành và gửi xe đi các tỉnh.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

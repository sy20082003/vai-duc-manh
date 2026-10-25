import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import AskButton from "@/components/AskButton";
import { BOOKS, SITE, cp, hasPrice, telHref, vnd } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bảng giá",
  description: "Bảng giá vải rèm cửa Đức Mạnh theo quyển mẫu, khổ 2m8 và 3m2. Mua nguyên cây được giảm thêm.",
  alternates: { canonical: "/bang-gia" },
};

export default function PricePage() {
  const anyRoll = BOOKS.find((b) => b.rollDiscount);
  return (
    <>
      <PageHead crumb="Bảng giá" title="Bảng báo giá" lead="Giá lẻ tính theo mét, áp dụng chung cho tất cả mã vải trong cùng một quyển." />
      <section className="wrap" style={{ padding: "2rem 0 4rem" }}>
        {anyRoll && (
          <div className="promo">
            <b>Ưu đãi nguyên cây:</b> mua nguyên cây được giảm thêm {vnd(anyRoll.rollDiscount!)}/m so với giá lẻ.
          </div>
        )}
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Quyển mẫu</th>
                <th>Mã vải</th>
                <th className="num">Khổ 2m8</th>
                <th className="num">Khổ 3m2</th>
                <th>Nguyên cây</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {BOOKS.map((b) => (
                <tr key={b.id}>
                  <td className="bk">Quyển {b.id}</td>
                  <td>{cp(b.id)}xx</td>
                  {!hasPrice(b) ? (
                    <td className="pr num" colSpan={2}>
                      <span className="muted">Liên hệ</span>
                    </td>
                  ) : b.range ? (
                    <td className="pr num" colSpan={2} style={{ textAlign: "center" }}>
                      {vnd(b.range[0])} – {vnd(b.range[1])}
                    </td>
                  ) : (
                    <>
                      <td className="pr num">{b.w280 != null ? vnd(b.w280) : <span className="muted">–</span>}</td>
                      <td className="pr num">{b.w320 != null ? vnd(b.w320) : <span className="muted">–</span>}</td>
                    </>
                  )}
                  <td>{b.rollDiscount ? <span className="roll-tag">Giảm {vnd(b.rollDiscount)}/m</span> : <span className="muted">–</span>}</td>
                  <td>
                    <Link className="link" href={`/san-pham?quyen=${b.id}`}>
                      Xem mẫu
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note">
          Giá tính theo mét, chưa gồm VAT và phí vận chuyển. Cập nhật ngày {SITE.priceUpdated}. Giá có thể thay đổi theo thời điểm, vui lòng liên
          hệ để xác nhận trước khi đặt.
        </p>
        <div className="ctas" style={{ marginTop: "1.5rem" }}>
          <AskButton className="btn btn-primary">Hỏi giá qua Zalo</AskButton>
          <a className="btn btn-ghost" href={telHref(SITE.phone)}>
            Gọi hỏi giá
          </a>
        </div>
      </section>
    </>
  );
}

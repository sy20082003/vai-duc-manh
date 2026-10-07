import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import AskButton from "@/components/AskButton";
import { BOOKS, SITE, cp, hasPrice, priceText, telHref } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bảng giá",
  description: "Bảng báo giá vải rèm cửa Đức Mạnh theo quyển mẫu. Giá áp dụng chung cho mọi mã trong quyển.",
  alternates: { canonical: "/bang-gia" },
};

export default function PricePage() {
  return (
    <>
      <PageHead crumb="Bảng giá" title="Bảng báo giá" lead="Giá áp dụng chung cho tất cả mã vải trong cùng một quyển, tính theo mét." />
      <section className="wrap" style={{ padding: "2rem 0 4rem" }}>
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Quyển mẫu</th>
                <th>Mã vải</th>
                <th>Khổ vải</th>
                <th>Giá (đ/m)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {BOOKS.map((b) => (
                <tr key={b.id}>
                  <td className="bk">Quyển {b.id}</td>
                  <td>{cp(b.id)}xx</td>
                  <td>{b.width}</td>
                  <td className="pr">{hasPrice(b) ? priceText(b) : <span className="muted">Liên hệ</span>}</td>
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
          Giá chưa gồm VAT và phí vận chuyển. Cập nhật ngày {SITE.priceUpdated}. Giá có thể thay đổi theo thời điểm, vui lòng liên hệ để xác nhận
          trước khi đặt.
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

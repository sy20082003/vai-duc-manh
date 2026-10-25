import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, SITE } from "@/lib/data";
import Lookup from "@/components/Lookup";
import ProductGrid from "@/components/ProductGrid";
import AskButton from "@/components/AskButton";
import AccessoryIcon from "@/components/AccessoryIcon";
import { ACCESSORIES } from "@/lib/accessories";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <h1>Hơn 20 Năm Đồng Hành Cùng Các Đại Lý Rèm Cửa Toàn Quốc</h1>
            <p className="sub">Nguồn hàng ổn định – Giá cả cạnh tranh – Cung ứng nhanh chóng trên toàn quốc.</p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/san-pham">
                Xem sản phẩm
              </Link>
              <Link className="btn btn-ghost" href="/bang-gia">
                Xem bảng giá
              </Link>
            </div>
            <Lookup />
          </div>
          <figure className="hero-photo">
            <div className="frame">
              <Image
                src="/images/cua-hang-duc-manh.jpg"
                alt="Mặt tiền cửa hàng Công ty Đức Mạnh với bảng hiệu chuyên cung cấp vải may màn, rèm cửa"
                fill
                priority
                sizes="(max-width: 860px) 380px, 420px"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="block" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>Sản phẩm</h2>
              <p className="lead">Một số mẫu vải rèm đang có tại kho.</p>
            </div>
            <Link className="btn btn-ghost btn-sm" href="/san-pham">
              Xem tất cả
            </Link>
          </div>
          <ProductGrid products={PRODUCTS.slice(0, SITE.homeCount)} empty="Đang cập nhật hình ảnh sản phẩm." />
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>Phụ kiện rèm cửa</h2>
              <p className="lead">Lấy vải và phụ kiện cùng một nơi để hoàn thiện bộ rèm.</p>
            </div>
            <Link className="btn btn-ghost btn-sm" href="/phu-kien">
              Xem phụ kiện
            </Link>
          </div>
          <div className="acc-strip">
            {ACCESSORIES.map((g) => (
              <Link key={g.id} className="acc-tile" href={`/phu-kien#${g.id}`}>
                <span>
                  <AccessoryIcon icon={g.icon} size={40} />
                </span>
                {g.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head">
            <h2>Vì sao đại lý chọn Đức Mạnh</h2>
          </div>
          <div className="why">
            <div>
              <h3>Nguồn hàng ổn định</h3>
              <p>Đại lý đặt lại đúng mã cũ cho khách mà không lo đổi mẫu.</p>
            </div>
            <div>
              <h3>Giá cả cạnh tranh</h3>
              <p>Giá rõ ràng ngay từ đầu, đại lý dễ báo giá lại cho khách hàng.</p>
            </div>
            <div>
              <h3>Cung ứng nhanh toàn quốc</h3>
              <p>Nhận mã qua điện thoại hoặc Zalo, cắt vải và gửi hàng đi các tỉnh.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div>
            <h2>Cần báo giá số lượng lớn?</h2>
            <p>Nhắn Zalo mã vải và số lượng, chúng tôi báo giá trong ngày.</p>
          </div>
          <AskButton className="btn">Chat Zalo báo giá</AskButton>
        </div>
      </section>
    </>
  );
}

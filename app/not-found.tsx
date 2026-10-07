import Link from "next/link";

export default function NotFound() {
  return (
    <section className="block">
      <div className="wrap" style={{ textAlign: "center" }}>
        <h1>Không tìm thấy trang</h1>
        <p className="lead" style={{ marginInline: "auto" }}>
          Trang bạn tìm không tồn tại hoặc đã được chuyển.
        </p>
        <div className="ctas" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
          <Link className="btn btn-primary" href="/">
            Về trang chủ
          </Link>
          <Link className="btn btn-ghost" href="/san-pham">
            Xem sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}

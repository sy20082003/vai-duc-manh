import type { Metadata } from "next";
import { Suspense } from "react";
import PageHead from "@/components/PageHead";
import ProductBrowser from "@/components/ProductBrowser";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Mẫu vải rèm cửa Đức Mạnh theo mã, khổ 2m8 – 3m2. Tra mã, xem ảnh và hỏi giá qua Zalo.",
  alternates: { canonical: "/san-pham" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHead crumb="Sản phẩm" title="Sản phẩm" lead="Bấm vào ảnh để xem lớn. Mã vải có dạng ĐM-4356, hai số đầu là số quyển mẫu." />
      <section className="wrap" style={{ paddingBottom: "4rem" }}>
        <Suspense fallback={null}>
          <ProductBrowser />
        </Suspense>
      </section>
    </>
  );
}

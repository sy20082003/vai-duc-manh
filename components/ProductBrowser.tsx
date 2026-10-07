"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BOOKS, PRODUCTS, bookOf, cp } from "@/lib/data";
import ProductGrid from "./ProductGrid";
import AskButton from "./AskButton";

/** Trang Sản phẩm: lọc theo quyển (?quyen=43) và làm nổi bật mã (?ma=4356) */
export default function ProductBrowser() {
  const params = useSearchParams();
  const ma = params.get("ma");
  const quyen = params.get("quyen");
  const [book, setBook] = useState("all");
  const [q, setQ] = useState("");

  useEffect(() => {
    setQ("");
    setBook(quyen || (ma && bookOf(ma)?.id) || "all");
  }, [ma, quyen]);

  const list = useMemo(() => {
    const digits = q.replace(/\D/g, "");
    return PRODUCTS.filter((p) => (book === "all" || p.code.startsWith(book)) && (!digits || p.code.includes(digits)));
  }, [book, q]);

  const digits = q.replace(/\D/g, "");
  const emptyMsg = (
    <>
      {digits ? `Không tìm thấy mã ${digits}.` : `Quyển ${book} đang cập nhật hình ảnh sản phẩm.`}
      <br />
      Gọi hoặc nhắn Zalo để được gửi mẫu.
      <div>
        <AskButton subject={digits ? `mã ${cp(digits)}` : `quyển ${book}`}>Hỏi qua Zalo</AskButton>
      </div>
    </>
  );

  return (
    <>
      <div className="toolbar">
        <div className="chips" role="group" aria-label="Lọc theo quyển mẫu">
          {[{ id: "all" }, ...BOOKS].map((b) => (
            <button key={b.id} type="button" className="chip" aria-pressed={book === b.id} onClick={() => setBook(b.id)}>
              {b.id === "all" ? "Tất cả" : `Quyển ${b.id}`}
            </button>
          ))}
        </div>
        <input
          className="search"
          type="search"
          inputMode="numeric"
          placeholder="Tìm mã vải, VD 4356"
          aria-label="Tìm mã vải"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <p className="count">{list.length ? `${list.length} sản phẩm` : ""}</p>
      <ProductGrid products={list} highlight={ma} empty={emptyMsg} />
    </>
  );
}

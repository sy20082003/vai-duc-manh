"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS, bookOf, cp, hasPrice, priceText, rollText } from "@/lib/data";
import AskButton from "./AskButton";

type Result = { code: string; error?: "format" | "missing" } | null;

/** Ô tra giá theo mã vải: quyển được nhận từ 2 số đầu của mã */
export default function Lookup() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState<Result>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = value.replace(/\D/g, "");
    if (!/^\d{4}$/.test(code)) return setRes({ code, error: "format" });
    if (!bookOf(code)) return setRes({ code, error: "missing" });
    setRes({ code });
  };

  const b = res && !res.error ? bookOf(res.code) : undefined;
  const prod = res && !res.error ? PRODUCTS.find((p) => p.code === res.code) : undefined;

  return (
    <form className="lookup" onSubmit={submit} noValidate>
      <label htmlFor="lookup">Tra giá theo mã vải</label>
      <div className="in">
        <input id="lookup" inputMode="numeric" placeholder="VD: 4356" autoComplete="off" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="btn btn-primary" type="submit">
          Tra mã
        </button>
      </div>
      <div className={`result${res ? " show" : ""}${res?.error ? " err" : ""}`} role="status" aria-live="polite">
        {res?.error === "format" && <p>Mã vải gồm 4 chữ số, ví dụ 4356 hoặc ĐM-4356.</p>}
        {res?.error === "missing" && (
          <div>
            <p>Không tìm thấy quyển mẫu cho mã {cp(res.code)}.</p>
            <div className="acts">
              <AskButton className="" subject={`mã ${cp(res.code)}`}>
                Hỏi qua Zalo
              </AskButton>
            </div>
          </div>
        )}
        {res && !res.error && b && (
          <>
            {prod && <Image src={prod.image} alt={`Mẫu vải ${cp(res.code)}`} width={64} height={64} />}
            <div>
              <p>
                <b>{cp(res.code)}</b> · Quyển {b.id} · Khổ {b.width}
              </p>
              <p>
                {hasPrice(b) ? (
                  <>
                    Giá <span className="pr">{priceText(b)}</span>
                    {rollText(b) && <> · {rollText(b)}</>}
                  </>
                ) : (
                  "Giá: liên hệ báo giá"
                )}
              </p>
              <div className="acts">
                <AskButton className="" subject={`mã ${cp(res.code)}`}>
                  Hỏi giá qua Zalo
                </AskButton>
                {prod && <Link href={`/san-pham?ma=${res.code}`}>Xem sản phẩm</Link>}
              </div>
            </div>
          </>
        )}
      </div>
    </form>
  );
}

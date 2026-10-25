"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { bookOf, cp, hasPrice, priceLines, priceText, rollText, type Product } from "@/lib/data";
import AskButton from "./AskButton";

type Props = { products: Product[]; highlight?: string | null; empty?: React.ReactNode };

export default function ProductGrid({ products, highlight, empty }: Props) {
  const [zoom, setZoom] = useState<Product | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (zoom && !d.open) d.showModal();
    if (!zoom && d.open) d.close();
  }, [zoom]);

  useEffect(() => {
    if (!highlight) return;
    const el = document.querySelector(`[data-code="${highlight}"]`);
    el?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [highlight, products]);

  const zb = zoom ? bookOf(zoom.code) : undefined;

  return (
    <>
      <div className="grid">
        {products.length === 0 && <div className="empty">{empty}</div>}
        {products.map((p, i) => {
          const b = bookOf(p.code);
          return (
            <article key={p.code} className={`card${highlight === p.code ? " hl" : ""}`} data-code={p.code}>
              <button className="ph" type="button" onClick={() => setZoom(p)} aria-label={`Xem ảnh lớn mã ${cp(p.code)}`}>
                <Image src={p.image} alt={`Mẫu vải mã ${cp(p.code)}`} fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 33vw, 280px" priority={i < 4} />
              </button>
              <div className="body">
                <div className="code">{cp(p.code)}</div>
                <div className="meta">{[b && `Quyển ${b.id}`, b?.width && `Khổ ${b.width}`].filter(Boolean).join(" · ")}</div>
                {hasPrice(b) ? (
                  <div className="price-list">
                    {priceLines(b).map((l) => (
                      <div key={l.label || l.value} className="price-row">
                        {l.label && <span>{l.label}</span>}
                        <b>{l.value}</b>
                      </div>
                    ))}
                    {rollText(b) && <div className="roll">{rollText(b)}</div>}
                  </div>
                ) : (
                  <div className="price none">Liên hệ báo giá</div>
                )}
                <AskButton subject={`mã ${cp(p.code)}`}>Hỏi giá qua Zalo</AskButton>
              </div>
            </article>
          );
        })}
      </div>

      <dialog
        className="lb"
        ref={dlg}
        aria-label="Ảnh mẫu vải"
        onClose={() => setZoom(null)}
        onClick={(e) => e.target === dlg.current && setZoom(null)}
      >
        {zoom && (
          <>
            <button className="x" type="button" aria-label="Đóng" onClick={() => setZoom(null)}>
              ×
            </button>
            <div className="lbimg">
              <Image src={zoom.image} alt={`Mẫu vải ${cp(zoom.code)}`} fill sizes="680px" />
            </div>
            <div className="bar">
              <div>
                <b>{cp(zoom.code)}</b>
                <small>
                  {[zb && `Quyển ${zb.id}`, zb?.width && `Khổ ${zb.width}`, zb?.comp, priceText(zb), rollText(zb)]
                    .filter(Boolean)
                    .join(" · ")}
                </small>
              </div>
              <AskButton subject={`mã ${cp(zoom.code)}`} onAsk={() => setZoom(null)}>
                Hỏi giá qua Zalo
              </AskButton>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}

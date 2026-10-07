"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { SITE, zaloHref } from "@/lib/data";
import { FacebookIcon } from "./Icons";

type ZaloCtx = { ask: (subject?: string) => void };
const Ctx = createContext<ZaloCtx>({ ask: () => {} });
export const useZalo = () => useContext(Ctx);

const DEFAULT_TITLE = "Chat Zalo với Đức Mạnh";

/** Bọc toàn site: cung cấp hàm ask() và hiển thị bong bóng Zalo + Facebook */
export default function ZaloProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const wrapRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const ask = useCallback((subject?: string) => {
    setTitle(subject ? `Hỏi giá ${subject} qua Zalo` : "Chat Zalo để nhận báo giá");
    setOpen(true);
    setTimeout(() => firstLinkRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (wrapRef.current?.contains(t) || t.closest("[data-ask]")) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const zalos = SITE.phones.filter((p) => p.zalo);

  return (
    <Ctx.Provider value={{ ask }}>
      {children}
      <div className="bubbles" ref={wrapRef}>
        <div className={`zalo-menu${open ? " open" : ""}`} id="zaloMenu" role="menu" aria-label="Chọn số Zalo">
          <p>{title}</p>
          {zalos.map((p, i) => (
            <a key={p.num} ref={i === 0 ? firstLinkRef : undefined} role="menuitem" href={zaloHref(p.num)} target="_blank" rel="noopener noreferrer">
              <span className="z" aria-hidden="true">Zalo</span>
              <span>
                <b>{p.num}</b>
                <small>{p.label}</small>
              </span>
            </a>
          ))}
        </div>
        <a className="bubble fb" href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Nhắn tin qua Facebook">
          <FacebookIcon size={26} />
          <span className="tip">Facebook</span>
        </a>
        <button
          className="bubble zalo"
          type="button"
          aria-expanded={open}
          aria-controls="zaloMenu"
          aria-label="Chat Zalo"
          onClick={() => {
            setTitle(DEFAULT_TITLE);
            setOpen((o) => !o);
          }}
        >
          Zalo<span className="tip">Chat Zalo</span>
        </button>
      </div>
    </Ctx.Provider>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import AskButton from "@/components/AskButton";
import AccessoryIcon from "@/components/AccessoryIcon";
import { ACCESSORIES } from "@/lib/accessories";

export const metadata: Metadata = {
  title: "Phụ kiện rèm cửa",
  description: "Phụ kiện rèm cửa Đức Mạnh: thanh treo, khoen ô-rê, trụ đỡ, dây vén, móc treo và băng keo rèm. Cung cấp cho đại lý rèm toàn quốc.",
  alternates: { canonical: "/phu-kien" },
};

export default function AccessoriesPage() {
  return (
    <>
      <PageHead
        crumb="Phụ kiện"
        title="Phụ kiện rèm cửa"
        lead="Đầy đủ vật tư để hoàn thiện một bộ rèm: thanh treo, khoen ô-rê, trụ đỡ, dây vén, móc treo và băng keo. Đại lý lấy vải và phụ kiện cùng một nơi."
      />
      <section className="wrap" style={{ padding: "2rem 0 1rem" }}>
        <nav className="chips" aria-label="Nhóm phụ kiện">
          {ACCESSORIES.map((g) => (
            <a key={g.id} className="chip" href={`#${g.id}`}>
              {g.name}
            </a>
          ))}
        </nav>
      </section>
      <section className="wrap" style={{ paddingBottom: "4rem" }}>
        {ACCESSORIES.map((g) => (
          <article key={g.id} id={g.id} className="acc-group">
            <div className="acc-head">
              <span className="acc-icon">
                <AccessoryIcon icon={g.icon} size={44} />
              </span>
              <div>
                <h2>{g.name}</h2>
                <p className="lead" style={{ marginTop: ".3rem" }}>
                  {g.description}
                </p>
              </div>
            </div>
            <div className="acc-body">
              <div>
                <h3>Loại phổ biến</h3>
                <ul>
                  {g.types.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="acc-cta">
                <p>Mẫu mã, kích thước và giá: liên hệ để được tư vấn theo từng công trình.</p>
                <AskButton subject={`phụ kiện ${g.name.toLowerCase()}`}>Hỏi giá qua Zalo</AskButton>
              </div>
            </div>
            {g.items.length > 0 && (
              <div className="acc-items">
                {g.items.map((it) => (
                  <div key={it.name} className="acc-item">
                    {it.image && (
                      <div className="ph">
                        <Image src={it.image} alt={it.name} fill sizes="240px" />
                      </div>
                    )}
                    <b>{it.name}</b>
                    <span className={it.price ? "pr" : "muted"}>{it.price || "Liên hệ báo giá"}</span>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
        <p className="note">
          Xem thêm: <Link href="/tin-tuc/cac-loai-phu-kien-rem-cua">Các loại phụ kiện rèm cửa và cách chọn</Link>
        </p>
      </section>
    </>
  );
}

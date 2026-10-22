import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { formatDate, sortedPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức, kinh nghiệm chọn vải và may rèm cửa từ Vải rèm Đức Mạnh.",
  alternates: { canonical: "/tin-tuc" },
};

export default function NewsPage() {
  const posts = sortedPosts();
  return (
    <>
      <PageHead crumb="Tin tức" title="Tin tức" lead="Kinh nghiệm chọn vải, may rèm và các thông tin mới từ Đức Mạnh." />
      <section className="wrap" style={{ padding: "2.5rem 0 4rem" }}>
        {posts.length === 0 ? (
          <div className="empty">Chưa có bài viết.</div>
        ) : (
          <div className="news-grid">
            {posts.map((p, i) => (
              <Link key={p.slug} href={`/tin-tuc/${p.slug}`} className="news-card">
                <div className="cover">
                  <Image src={p.cover} alt={p.title} fill sizes="(max-width: 700px) 100vw, 360px" priority={i < 3} />
                </div>
                <div className="body">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                  <span className="more">Đọc tiếp →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

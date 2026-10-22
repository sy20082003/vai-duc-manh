import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AskButton from "@/components/AskButton";
import { POSTS, formatDate, getPost, sortedPosts } from "@/lib/news";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/tin-tuc/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, images: [post.cover], publishedTime: post.date },
  };
}

/* Chuyển các đoạn trong body thành HTML: "## " = tiêu đề, "- " = gạch đầu dòng */
function renderBody(body: string[]) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) {
      out.push(
        <ul key={`ul-${out.length}`}>
          {list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };
  body.forEach((block, i) => {
    if (block.startsWith("- ")) return list.push(block.slice(2));
    flush();
    if (block.startsWith("## ")) out.push(<h2 key={i}>{block.slice(3)}</h2>);
    else out.push(<p key={i}>{block}</p>);
  });
  flush();
  return out;
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const others = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="post">
      <div className="page-head">
        <div className="wrap post-wrap">
          <div className="crumb">
            <Link href="/">Trang chủ</Link> / <Link href="/tin-tuc">Tin tức</Link>
          </div>
          <h1>{post.title}</h1>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
      <div className="wrap post-wrap">
        <div className="post-cover">
          <Image src={post.cover} alt={post.title} fill priority sizes="(max-width: 760px) 100vw, 720px" />
        </div>
        <div className="post-body">{renderBody(post.body)}</div>
        <div className="post-cta">
          <p>Cần tư vấn chọn vải hoặc báo giá cho đại lý?</p>
          <AskButton className="btn btn-primary">Chat Zalo với Đức Mạnh</AskButton>
          <Link className="btn btn-ghost" href="/san-pham">
            Xem sản phẩm
          </Link>
        </div>
      </div>
      {others.length > 0 && (
        <section className="block" style={{ background: "var(--paper)" }}>
          <div className="wrap">
            <div className="sec-head">
              <h2>Bài viết khác</h2>
              <Link className="btn btn-ghost btn-sm" href="/tin-tuc">
                Tất cả tin tức
              </Link>
            </div>
            <div className="news-grid">
              {others.map((p) => (
                <Link key={p.slug} href={`/tin-tuc/${p.slug}`} className="news-card">
                  <div className="cover">
                    <Image src={p.cover} alt={p.title} fill sizes="(max-width: 700px) 100vw, 360px" />
                  </div>
                  <div className="body">
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                    <h2>{p.title}</h2>
                    <span className="more">Đọc tiếp →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

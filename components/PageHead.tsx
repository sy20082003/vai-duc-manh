import Link from "next/link";

export default function PageHead({ crumb, title, lead }: { crumb: string; title: React.ReactNode; lead?: string }) {
  return (
    <div className="page-head">
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Trang chủ</Link> / {crumb}
        </div>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  );
}

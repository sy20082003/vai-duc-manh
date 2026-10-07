import type { Metadata, Viewport } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZaloProvider from "@/components/ZaloProvider";
import { SITE, telHref } from "@/lib/data";

const display = Montserrat({ subsets: ["latin", "vietnamese"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Nunito_Sans({ subsets: ["latin", "vietnamese"], weight: ["400", "600", "700"], variable: "--font-body", display: "swap" });

const description =
  "Đức Mạnh – vải & phụ kiện rèm cửa. Hơn 20 năm đồng hành cùng các đại lý rèm cửa toàn quốc: nguồn hàng ổn định, giá cả cạnh tranh, cung ứng nhanh chóng.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Vải rèm cửa Đức Mạnh", template: "%s – Vải rèm Đức Mạnh" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Vải rèm cửa Đức Mạnh",
    title: "Vải rèm cửa Đức Mạnh",
    description,
    images: [{ url: "/images/cua-hang-duc-manh.jpg", width: 1024, height: 1029, alt: "Cửa hàng Đức Mạnh" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>
        <ZaloProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <a className="btn btn-primary fab" href={telHref(SITE.phone)}>
            Gọi ngay
          </a>
        </ZaloProvider>
      </body>
    </html>
  );
}

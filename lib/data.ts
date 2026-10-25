/* =========================================================
   DỮ LIỆU WEBSITE – chỉ cần sửa file này
   ========================================================= */

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vaiducmanh.com.vn",
  shortName: "Đức Mạnh",
  legalName: "Công ty TNHH Sản xuất Thương mại Xuất nhập khẩu Đức Mạnh",
  taxId: "0305491088",
  address: "714 – 716 Phạm Văn Bạch, Phường 12, Quận Gò Vấp, TP.HCM",
  // Địa chỉ dùng cho bản đồ nhúng ở trang Liên hệ. Nếu ghim chưa đúng chỗ, thay mapEmbed bằng link
  // lấy từ Google Maps: Chia sẻ → Nhúng bản đồ → chép phần src="..."
  mapQuery: "714 Phạm Văn Bạch, Phường 12, Gò Vấp, Hồ Chí Minh",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.450886483523!2d106.64364241895811!3d10.836386906911107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299d856f8fd9%3A0x993623304e5c4d35!2zQ8O0bmcgVHkgVG5oaCBT4bqjbiBYdeG6pXQgVGjGsMahbmcgTeG6oWkgROG7i2NoIFbhu6UgWHXhuqV0IE5o4bqtcCBLaOG6qXUgxJDhu6ljIE3huqFuaA!5e1!3m2!1svi!2s!4v1792699114472!5m2!1svi!2s",
  hours: "Thứ 2 – Thứ 7, 8:00 – 17:00",
  phone: "0909 722 975", // số cho nút "Gọi đặt vải" / "Gọi ngay"
  zalo: "0909 722 975", // số Zalo trên trang Liên hệ
  // zalo: true → hiện trong bong bóng Zalo
  phones: [
    { num: "0909 722 975", label: "Tư vấn – A. Thành", zalo: true },
    { num: "0936 100 400", label: "Tư vấn", zalo: true },
    { num: "0934 111 033", label: "Tư vấn", zalo: true },
  ],
  email: "", // TODO: điền email thật; để trống thì website tự ẩn email
  facebook: "https://www.facebook.com/profile.php?id=61588620402972",
  priceUpdated: "25/10/2026",
  codePrefix: "ĐM-", // mã hiển thị: ĐM-4356
  homeCount: 8, // số sản phẩm hiện ở trang chủ
  about:
    "Hơn 20 năm qua, Công ty Đức Mạnh chuyên cung cấp vải may màn, rèm cửa với giá cả hợp lý cho các đại lý rèm cửa trên toàn quốc, cùng xưởng may rèm, nhà thầu nội thất và khách lẻ.",
};

export type Book = {
  id: string; // số quyển = 2 số đầu của mã vải
  width: string;
  comp?: string;
  /* Giá lẻ theo mét (đ/m). Dùng MỘT trong hai cách:
     - Giá theo khổ:  w280: 75000, w320: 85000
     - Khoảng giá:    range: [65000, 75000]
     Không điền gì → hiện "Liên hệ báo giá" */
  w280?: number;
  w320?: number;
  range?: [number, number];
  rollDiscount?: number; // mua nguyên cây giảm bao nhiêu đ/m
};

/* GIÁ THEO QUYỂN MẪU – mọi mã trong cùng quyển có chung giá */
export const BOOKS: Book[] = [
  { id: "39", width: "2m8 – 3m2", w280: 80000, w320: 90000, rollDiscount: 4000 },
  { id: "42", width: "2m8 – 3m2", w280: 75000, w320: 85000, rollDiscount: 4000 },
  { id: "43", width: "2m8 – 3m2", comp: "100% Polyester", range: [65000, 75000], rollDiscount: 4000 },
];

export type Product = {
  code: string; // 4 số, VD "4356" – quyển tự nhận từ 2 số đầu
  image: string; // ảnh trong thư mục public/
};

/* SẢN PHẨM – thêm sản phẩm: chép ảnh vào public/images/products/ rồi thêm 1 dòng */
export const PRODUCTS: Product[] = [
  // Quyển 42
  { code: "4202", image: "/images/products/dm-4202.jpg" },
  { code: "4204", image: "/images/products/dm-4204.jpg" },
  { code: "4206", image: "/images/products/dm-4206.jpg" },
  { code: "4208", image: "/images/products/dm-4208.jpg" },
  { code: "4210", image: "/images/products/dm-4210.jpg" },
  { code: "4212", image: "/images/products/dm-4212.jpg" },
  { code: "4214", image: "/images/products/dm-4214.jpg" },
  { code: "4216", image: "/images/products/dm-4216.jpg" },
  { code: "4218", image: "/images/products/dm-4218.jpg" },
  { code: "4220", image: "/images/products/dm-4220.jpg" },
  { code: "4222", image: "/images/products/dm-4222.jpg" },
  { code: "4224", image: "/images/products/dm-4224.jpg" },
  { code: "4226", image: "/images/products/dm-4226.jpg" },
  { code: "4228", image: "/images/products/dm-4228.jpg" },
  { code: "4230", image: "/images/products/dm-4230.jpg" },
  { code: "4232", image: "/images/products/dm-4232.jpg" },
  // Quyển 43
  { code: "4310", image: "/images/products/dm-4310.jpg" },
  { code: "4312", image: "/images/products/dm-4312.jpg" },
  { code: "4314", image: "/images/products/dm-4314.jpg" },
  { code: "4316", image: "/images/products/dm-4316.jpg" },
  { code: "4320", image: "/images/products/dm-4320.jpg" },
  { code: "4322", image: "/images/products/dm-4322.jpg" },
  { code: "4324", image: "/images/products/dm-4324.jpg" },
  { code: "4326", image: "/images/products/dm-4326.jpg" },
  { code: "4330", image: "/images/products/dm-4330.jpg" },
  { code: "4332", image: "/images/products/dm-4332.jpg" },
  { code: "4334", image: "/images/products/dm-4334.jpg" },
  { code: "4336", image: "/images/products/dm-4336.jpg" },
  { code: "4340", image: "/images/products/dm-4340.jpg" },
  { code: "4342", image: "/images/products/dm-4342.jpg" },
  { code: "4344", image: "/images/products/dm-4344.jpg" },
  { code: "4346", image: "/images/products/dm-4346.jpg" },
  { code: "4350", image: "/images/products/dm-4350.jpg" },
  { code: "4352", image: "/images/products/dm-4352.jpg" },
  { code: "4354", image: "/images/products/dm-4354.jpg" },
  { code: "4356", image: "/images/products/dm-4356.jpg" },
  { code: "4360", image: "/images/products/dm-4360.jpg" },
  { code: "4362", image: "/images/products/dm-4362.jpg" },
  { code: "4364", image: "/images/products/dm-4364.jpg" },
  { code: "4366", image: "/images/products/dm-4366.jpg" },
];

/* ===================== Hàm tiện ích ===================== */
export const cp = (code: string) => SITE.codePrefix + code;
export const telHref = (num: string) => "tel:" + num.replace(/\s/g, "");
export const zaloHref = (num: string) => "https://zalo.me/" + num.replace(/\s/g, "");
export const bookOf = (code: string) => BOOKS.find((b) => code.startsWith(b.id));
export const vnd = (n: number) => n.toLocaleString("vi-VN") + "đ";
export const hasPrice = (b?: Book) => !!b && (b.w280 != null || b.w320 != null || b.range != null);
/* Các dòng giá để hiển thị, VD [{label:"Khổ 2m8", value:"75.000đ/m"}, ...] */
export const priceLines = (b?: Book): { label: string; value: string }[] => {
  if (!b) return [];
  if (b.range) return [{ label: "", value: `${vnd(b.range[0])} – ${vnd(b.range[1])}/m` }];
  const out: { label: string; value: string }[] = [];
  if (b.w280 != null) out.push({ label: "Khổ 2m8", value: `${vnd(b.w280)}/m` });
  if (b.w320 != null) out.push({ label: "Khổ 3m2", value: `${vnd(b.w320)}/m` });
  return out;
};
/* Giá gọn trên một dòng, VD "Khổ 2m8: 75.000đ/m · Khổ 3m2: 85.000đ/m" */
export const priceText = (b?: Book) =>
  hasPrice(b) ? priceLines(b).map((l) => (l.label ? `${l.label}: ${l.value}` : l.value)).join(" · ") : null;
export const rollText = (b?: Book) => (b?.rollDiscount ? `Mua nguyên cây giảm ${vnd(b.rollDiscount)}/m` : null);
export const mapEmbedSrc =
  SITE.mapEmbed || `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&hl=vi&z=17&output=embed`;
export const mapHref = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.address);

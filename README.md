# Website Vải rèm cửa Đức Mạnh

Next.js 14 (App Router) + TypeScript. Không dùng thư viện ngoài, CSS nằm trong `app/globals.css`.

## Chạy thử trên máy

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Sửa nội dung

Toàn bộ dữ liệu nằm trong **`lib/data.ts`**:

- `SITE`: tên công ty, địa chỉ, số điện thoại, Zalo, email, Facebook…
- `BOOKS`: giá và khổ theo quyển mẫu (mọi mã trong cùng quyển chung giá). Chưa có giá thì để `null`.
- `PRODUCTS`: danh sách sản phẩm (mã vải + ảnh).

### Thêm sản phẩm mới

1. Chép ảnh vào `public/images/products/`, đặt tên theo mã, VD `dm-4365.jpg` (ảnh vuông, rộng khoảng 900px).
2. Thêm một dòng vào `PRODUCTS`:

   ```ts
   { code: "4365", image: "/images/products/dm-4365.jpg" },
   ```

Quyển, khổ và giá tự lấy theo 2 số đầu của mã.

## Cấu trúc

```
app/
  layout.tsx        Font, SEO, header/footer, bong bóng Zalo
  page.tsx          Trang chủ
  san-pham/         Sản phẩm (lọc ?quyen=43, làm nổi bật ?ma=4356)
  bang-gia/         Bảng giá theo quyển
  gioi-thieu/       Giới thiệu
  lien-he/          Liên hệ
  robots.ts, sitemap.ts
components/         Header, Footer, ProductGrid, Lookup, ZaloProvider…
lib/data.ts         DỮ LIỆU
public/images/      Ảnh cửa hàng và sản phẩm
```

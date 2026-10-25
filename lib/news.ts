/* =========================================================
   TIN TỨC – thêm bài mới bằng cách thêm 1 phần tử vào POSTS
   ---------------------------------------------------------
   slug:    đường dẫn bài viết, viết thường không dấu, nối bằng gạch ngang
   date:    ngày đăng, dạng "YYYY-MM-DD"
   cover:   ảnh bìa trong thư mục public/ (có thể dùng ảnh sản phẩm)
   excerpt: 1–2 câu tóm tắt, hiện ở danh sách tin và trên Google
   body:    nội dung, mỗi phần tử là 1 đoạn. Quy ước đơn giản:
            "## Tiêu đề"  → tiêu đề nhỏ
            "- Ý 1"       → gạch đầu dòng (các dòng "- " liền nhau gộp thành 1 danh sách)
            còn lại       → đoạn văn bình thường
   ========================================================= */

export type Post = {
  slug: string;
  title: string;
  date: string;
  cover: string;
  excerpt: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "cac-loai-phu-kien-rem-cua",
    title: "Các loại phụ kiện rèm cửa và cách chọn cho từng kiểu rèm",
    date: "2026-10-25",
    cover: "/images/products/dm-4336.jpg",
    excerpt:
      "Một bộ rèm hoàn chỉnh cần nhiều phụ kiện đi kèm: thanh treo, khoen ô-rê, trụ đỡ, dây vén, móc treo và băng keo. Bài viết giúp đại lý chọn đúng phụ kiện cho từng kiểu rèm.",
    body: [
      "Vải đẹp mới là một nửa của bộ rèm. Phụ kiện chọn đúng giúp rèm treo chắc, kéo êm và giữ dáng lâu. Dưới đây là 5 nhóm phụ kiện đại lý thường cần khi thi công.",
      "## 1. Thanh treo rèm",
      "Thanh treo là phần chịu lực chính của bộ rèm.",
      "- Thanh tròn: dùng cho rèm ô-rê (khoen), kiểu rèm gợn sóng phổ biến trong nhà ở.",
      "- Thanh ray trượt: dùng cho rèm móc, rèm xếp ly, kéo êm và gọn.",
      "- Thanh đôi: cho bộ rèm hai lớp vải và voan.",
      "Nên chọn thanh dài hơn khung cửa mỗi bên để khi mở, rèm không che mất cửa.",
      "## 2. Khoen / vòng ô-rê",
      "Khoen được bấm lên đầu rèm để luồn vào thanh tròn, tạo các nếp gợn sóng đều. Khoen có loại nhựa và kim loại, nhiều màu như bạc, đồng, đen, vàng. Lưu ý chọn khoen có lỗ vừa với đường kính thanh treo để rèm kéo nhẹ.",
      "## 3. Trụ đỡ thanh treo",
      "Trụ đỡ (bát đỡ) giữ thanh treo trên tường hoặc trần.",
      "- Trụ đơn cho rèm một lớp, trụ đôi cho rèm hai lớp.",
      "- Cửa rộng nên thêm trụ đỡ ở giữa để thanh không bị võng khi rèm dày và nặng.",
      "## 4. Dây vén rèm",
      "Dây vén giữ rèm gọn sang hai bên khi mở, giúp phòng thoáng sáng và tạo điểm nhấn trang trí. Các loại thường dùng: dây vén tua rua, dây vén nam châm và móc vén gắn tường.",
      "## 5. Móc treo & băng keo rèm",
      "Băng keo rèm (băng xếp ly) được may lên đầu rèm để tạo nếp đều và giữ form. Móc treo cài vào băng keo để treo rèm lên ray. Hai phụ kiện này luôn đi cùng nhau với rèm móc và rèm xếp ly.",
      "## Gợi ý chọn nhanh theo kiểu rèm",
      "- Rèm ô-rê: thanh tròn + khoen ô-rê + trụ đỡ + dây vén.",
      "- Rèm xếp ly / rèm móc: thanh ray + băng keo + móc treo + dây vén.",
      "- Rèm hai lớp (vải + voan): chọn thanh đôi hoặc trụ đỡ đôi.",
      "Đức Mạnh cung cấp cả vải rèm và phụ kiện, đại lý có thể lấy hàng đồng bộ cho từng công trình. Xem danh mục tại mục Phụ kiện trên website hoặc nhắn Zalo để được tư vấn.",
    ],
  },
  {
    slug: "vai-rem-kho-cao-2m8-3m2-la-gi",
    title: "Vải rèm khổ cao 2m8 – 3m2 là gì? Vì sao đại lý nên chọn",
    date: "2026-10-22",
    cover: "/images/products/dm-4340.jpg",
    excerpt:
      "Khổ vải là chiều cao của rèm sau khi may. Với khổ 2m8 – 3m2, đa số cửa sổ và cửa đi trong nhà ở Việt Nam may được rèm liền tấm, không phải nối vải.",
    body: [
      "Khi nhận quyển mẫu vải rèm, đại lý thường thấy trên nhãn ghi \"Width 280 – 320cm\". Đây là khổ vải, tức chiều rộng của cây vải khi trải ra. Với vải rèm khổ cao, chiều này được dùng làm chiều cao của rèm khi may.",
      "## Khổ cao giúp gì cho rèm?",
      "- Không có đường nối ngang: rèm cao đến 3m vẫn liền một tấm từ trên xuống dưới, nhìn đẹp và sang hơn.",
      "- Tiết kiệm vải: chỉ cần tính số mét theo chiều ngang cửa, không phải cắt nhiều tấm rồi ghép lại.",
      "- May nhanh hơn: ít đường may, ít hao hụt, phù hợp đơn hàng số lượng lớn của đại lý.",
      "## Chọn khổ 2m8 hay 3m2?",
      "Bạn đo chiều cao từ thanh treo rèm đến điểm muốn rèm chạm tới (thường cách sàn 1 – 2cm), rồi cộng thêm phần may gấu và đầu rèm khoảng 15 – 25cm tùy kiểu may. Nếu tổng nhỏ hơn 2m8, chọn khổ 2m8. Nếu cao hơn, chọn khổ 3m2 để không phải nối.",
      "Tất cả mã vải tại Đức Mạnh đều có cả hai khổ 2m8 và 3m2, đại lý chỉ cần báo mã vải và khổ cần lấy.",
    ],
  },
  {
    slug: "cach-tinh-so-met-vai-may-rem",
    title: "Cách tính số mét vải may rèm cửa đơn giản",
    date: "2026-10-22",
    cover: "/images/products/dm-4216.jpg",
    excerpt:
      "Với vải rèm khổ cao, số mét vải chủ yếu phụ thuộc vào chiều ngang cửa và độ dún của rèm. Bài viết hướng dẫn cách tính nhanh để báo giá cho khách.",
    body: [
      "Vải rèm khổ cao được bán theo mét dài, và mét dài này chính là chiều ngang của rèm. Vì vậy cách tính khá đơn giản.",
      "## Công thức tính nhanh",
      "Số mét vải = Chiều ngang thanh treo rèm × Hệ số dún + Phần may hai bên mép",
      "- Hệ số dún là độ xếp nếp của rèm. Rèm càng dún nhiều thì càng dày và đẹp. Hệ số thường dùng khoảng 1,8 đến 2,5 lần tùy kiểu may và yêu cầu của khách.",
      "- Phần may hai bên mép thường khoảng 10 – 20cm.",
      "## Ví dụ",
      "Cửa sổ có thanh treo dài 2m, khách muốn rèm dún 2 lần: 2m × 2 = 4m, cộng thêm khoảng 0,2m may mép, cần khoảng 4,2m vải.",
      "## Lưu ý khi đo",
      "- Đo theo chiều dài thanh treo, không đo theo khung cửa, vì thanh treo thường dài hơn cửa 15 – 30cm mỗi bên.",
      "- Với rèm hai lớp (vải và voan), tính riêng số mét cho từng lớp.",
      "- Nên làm tròn lên một chút để trừ hao khi cắt.",
      "Nếu cần tư vấn số mét cho công trình nhiều phòng, đại lý cứ gửi kích thước qua Zalo, Đức Mạnh sẽ tính giúp.",
    ],
  },
  {
    slug: "cach-ve-sinh-va-bao-quan-rem-vai-polyester",
    title: "Cách vệ sinh và bảo quản rèm vải polyester bền màu",
    date: "2026-10-22",
    cover: "/images/products/dm-4354.jpg",
    excerpt:
      "Rèm vải polyester bền và dễ chăm sóc nếu giặt đúng cách. Đây là những lưu ý đại lý có thể hướng dẫn lại cho khách hàng sau khi lắp rèm.",
    body: [
      "Các mẫu vải rèm 100% polyester có ưu điểm là bền màu, ít nhăn và dễ vệ sinh. Trên nhãn vải thường có các ký hiệu giặt ủi, khách hàng nên làm theo để rèm giữ được độ đẹp lâu.",
      "## Vệ sinh định kỳ",
      "- Hút bụi hoặc phủi bụi rèm 1 – 2 tuần một lần để bụi không bám sâu vào sợi vải.",
      "- Với vết bẩn nhỏ, lau nhẹ bằng khăn ẩm và một ít xà phòng loãng, không chà mạnh.",
      "## Khi giặt rèm",
      "- Giặt bằng nước lạnh hoặc nước ấm không quá 30°C.",
      "- Dùng chế độ giặt nhẹ, bột giặt trung tính, không dùng chất tẩy mạnh.",
      "- Không vắt quá khô, nên phơi trong bóng râm hoặc treo lại lên thanh rèm khi còn hơi ẩm để vải tự thẳng.",
      "- Nếu cần ủi, để bàn ủi ở nhiệt độ thấp.",
      "## Bảo quản",
      "- Tránh để rèm tiếp xúc trực tiếp với nắng gắt trong thời gian dài, có thể dùng thêm lớp voan bên trong để bảo vệ.",
      "- Khi cất rèm, gấp gọn và để nơi khô ráo, thoáng khí.",
      "Chăm sóc đúng cách giúp rèm bền màu nhiều năm, khách hàng hài lòng và quay lại với đại lý ở những đơn hàng sau.",
    ],
  },
];

/* Bài mới nhất lên đầu */
export const sortedPosts = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const formatDate = (d: string) => {
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
};

/* =========================================================
   PHỤ KIỆN RÈM CỬA – sửa nội dung tại đây
   ---------------------------------------------------------
   Mỗi nhóm phụ kiện có thể thêm sản phẩm cụ thể vào "items":
     { name: "Thanh treo nhôm 28mm", image: "/images/phu-kien/thanh-treo-28.jpg", price: "45.000đ/m" }
   - image: chép ảnh vào public/images/phu-kien/ (không bắt buộc)
   - price: ghi tự do, để trống thì hiện "Liên hệ báo giá"
   ========================================================= */

export type AccessoryItem = { name: string; image?: string; price?: string };

export type AccessoryGroup = {
  id: string; // dùng làm đường dẫn: /phu-kien#thanh-treo
  name: string;
  icon: "rod" | "ring" | "bracket" | "tieback" | "hook";
  summary: string;
  description: string;
  types: string[]; // các loại phổ biến
  items: AccessoryItem[];
};

export const ACCESSORIES: AccessoryGroup[] = [
  {
    id: "thanh-treo",
    name: "Thanh treo rèm",
    icon: "rod",
    summary: "Thanh tròn và thanh ray để treo rèm vải, rèm voan.",
    description:
      "Thanh treo là phần chịu lực chính của bộ rèm. Thanh tròn thường dùng cho rèm ô-rê (khoen), thanh ray dùng cho rèm móc, rèm xếp ly. Nên chọn thanh dài hơn khung cửa mỗi bên để rèm khi mở không che mất cửa.",
    types: ["Thanh tròn treo rèm ô-rê", "Thanh ray trượt cho rèm móc, rèm xếp ly", "Thanh đơn và thanh đôi (rèm vải + voan)"],
    items: [],
  },
  {
    id: "khoen-ore",
    name: "Khoen / vòng ô-rê",
    icon: "ring",
    summary: "Khoen bấm trên đầu rèm để luồn vào thanh tròn.",
    description:
      "Khoen ô-rê được bấm trực tiếp lên phần đầu rèm, tạo các nếp gợn sóng đều và giúp rèm kéo mở nhẹ nhàng trên thanh tròn. Kích thước khoen cần phù hợp với đường kính thanh treo.",
    types: ["Khoen nhựa", "Khoen kim loại", "Nhiều màu: bạc, đồng, đen, vàng"],
    items: [],
  },
  {
    id: "tru-do",
    name: "Trụ đỡ thanh treo",
    icon: "bracket",
    summary: "Bát đỡ gắn tường hoặc trần để giữ thanh treo chắc chắn.",
    description:
      "Trụ đỡ (bát đỡ) giữ thanh treo cố định trên tường hoặc trần nhà. Với cửa rộng, cần thêm trụ đỡ ở giữa để thanh không bị võng khi rèm dày và nặng.",
    types: ["Trụ đỡ đơn (1 lớp rèm)", "Trụ đỡ đôi (2 lớp rèm)", "Gắn tường hoặc gắn trần"],
    items: [],
  },
  {
    id: "day-ven",
    name: "Dây vén rèm",
    icon: "tieback",
    summary: "Dây và móc vén giữ rèm gọn gàng hai bên cửa.",
    description:
      "Dây vén dùng để buộc gọn rèm sang hai bên khi mở, giúp phòng thoáng sáng và rèm có dáng đẹp. Đây cũng là chi tiết trang trí giúp bộ rèm trông hoàn thiện hơn.",
    types: ["Dây vén tua rua", "Dây vén nam châm", "Móc vén gắn tường"],
    items: [],
  },
  {
    id: "moc-bang-keo",
    name: "Móc treo & băng keo rèm",
    icon: "hook",
    summary: "Móc treo rèm vào ray và băng keo may đầu rèm.",
    description:
      "Băng keo rèm (băng xếp ly) được may lên phần đầu rèm để tạo nếp đều và giữ form. Móc treo cài vào băng keo để treo rèm lên thanh ray. Hai phụ kiện này đi cùng nhau trong các kiểu rèm móc, rèm xếp ly.",
    types: ["Móc nhựa, móc inox", "Băng keo xếp ly các bản rộng", "Phụ kiện đi kèm thanh ray"],
    items: [],
  },
];

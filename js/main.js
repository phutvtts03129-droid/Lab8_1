
import { sanPham } from "./products.js";
import { hienthi, banchay, sanPhamMoi } from "./product.js";
import { hiengio, tongtien } from "./giohang.js";
import { hienthidonhang } from "./donhang.js";


import { hienThiSlide, tuDongSlide } from "./slider.js";

// Hiển thị banner và tự động chuyển ảnh
hienThiSlide();
tuDongSlide();

// Hiển thị đơn hàng
hienthidonhang();

// Hiển thị sản phẩm ở trang chủ
hienthi(sanPham, "list");
banchay();
sanPhamMoi();

// Hiển thị giỏ hàng
hiengio();
tongtien();

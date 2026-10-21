
let donhang = JSON.parse(localStorage.getItem("order")) || [];

export function hienthidonhang() {
    donhang = JSON.parse(localStorage.getItem("order")) || [];

    let html = donhang.map(function(don) {
        let danhSachSanPham = don.sanPham || [];

        let chiTiet = danhSachSanPham.map(function(sp) {
            let ten = sp.ten || sp.name || "Sản phẩm";
            let gia = Number(sp.gia || sp.price || 0);
            let soLuong = Number(sp.quantity || 1);

            return `
                <div class="san-pham-dat">
                    <p><strong>${ten}</strong></p>
                    <p>Giá: ${gia.toLocaleString("vi-VN")}đ</p>
                    <p>Số lượng: ${soLuong}</p>
                    <p>Thành tiền:
                        ${(gia * soLuong).toLocaleString("vi-VN")}đ
                    </p>
                </div>
            `;
        }).join("");

        return `
            <div class="don-hang-rieng">
                <h3>Mã đơn hàng: ${don.id}</h3>

                <p>Người đặt: ${don.ten || "Chưa có thông tin"}</p>
                <p>Số điện thoại: ${don.sdt || "Chưa có thông tin"}</p>
                <p>Địa chỉ: ${don.diachi || "Chưa có thông tin"}</p>
                <p>Ngày đặt: ${don.ngayDat || "Chưa có thông tin"}</p>
                <p>Trạng thái: ${don.trangThai || "Chờ xác nhận"}</p>

                <h3 class="tong-tien">
                    Tổng tiền:
                    ${Number(don.tongTien || 0).toLocaleString("vi-VN")}đ
                </h3>

                <button class="nut-xem-chi-tiet"
                    data-id="${don.id}">
                    Xem chi tiết sản phẩm ▼
                </button>

                <div class="chi-tiet-san-pham"
                    id="chitiet-${don.id}"
                    style="display: none;">
                    ${chiTiet || "<p>Đơn hàng không có sản phẩm.</p>"}
                </div>
            </div>
        `;
    }).join("");

let khuVuc = document.getElementById("lichSuDonHang");

    if (khuVuc) {
        khuVuc.innerHTML = html || "<p>Bạn chưa có đơn hàng nào.</p>";

        // Bấm nút để mở hoặc đóng chi tiết đơn hàng
        khuVuc.querySelectorAll(".nut-xem-chi-tiet").forEach(function(nut) {
            nut.addEventListener("click", function() {
                let id = nut.dataset.id;
                let chiTiet = document.getElementById("chitiet-" + id);

                if (chiTiet.style.display === "none") {
                    chiTiet.style.display = "block";
                    nut.innerText = "Ẩn chi tiết sản phẩm ▲";
                } else {
                    chiTiet.style.display = "none";
                    nut.innerText = "Xem chi tiết sản phẩm ▼";
                }
            });
        });
    }
}

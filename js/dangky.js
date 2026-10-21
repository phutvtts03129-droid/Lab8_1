
import { product } from "./products.js";

// ================= DỮ LIỆU TÀI KHOẢN =================

// Lấy danh sách tài khoản từ localStorage
let danhSachTaiKhoan = JSON.parse(
    localStorage.getItem("taiKhoan")
) || product.danhSachTaiKhoan || [];

// Hàm lưu danh sách tài khoản
function luuTaiKhoan() {
    localStorage.setItem(
        "taiKhoan",
        JSON.stringify(danhSachTaiKhoan)
    );
}

// ================= KIỂM TRA HỌ TÊN =================

function kiemTraHoTen(hoTen) {
    // Họ tên từ 2 đến 50 ký tự
    if (hoTen.length < 2 || hoTen.length > 50) {
        return "Họ và tên phải từ 2 đến 50 ký tự!";
    }

    // Chỉ chấp nhận chữ cái, dấu cách, dấu nháy và dấu gạch nối
    let dinhDangHoTen = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;

    if (!dinhDangHoTen.test(hoTen)) {
        return "Họ tên không được chứa số hoặc ký tự không hợp lệ!";
    }

    return "";
}

// ================= KIỂM TRA TÊN ĐĂNG NHẬP =================

function kiemTraTenDangNhap(tenDangNhap) {
    // Tên đăng nhập từ 4 đến 20 ký tự
    if (tenDangNhap.length < 4 || tenDangNhap.length > 20) {
        return "Tên đăng nhập phải từ 4 đến 20 ký tự!";
    }

    // Chỉ chấp nhận chữ không dấu, số và dấu gạch dưới
    let dinhDangTen = /^[a-zA-Z0-9_]+$/;

    if (!dinhDangTen.test(tenDangNhap)) {
        return "Tên đăng nhập chỉ được chứa chữ, số và dấu _!";
    }

    return "";
}

// ================= KIỂM TRA MẬT KHẨU =================

function kiemTraMatKhau(matKhau) {
    if (matKhau.length < 6 || matKhau.length > 50) {
        return "Mật khẩu phải từ 6 đến 50 ký tự!";
    }

    return "";
}

// ================= CHỨC NĂNG ĐĂNG KÝ =================

let formDangKy = document.getElementById("formDangKy");

if (formDangKy) {
    formDangKy.addEventListener("submit", function(event) {
        event.preventDefault();

        // Lấy các ô nhập liệu từ HTML
      let hoTenElement = document.getElementById("hoTen");
let tenDangNhapElement = document.getElementById("tenDangNhap");
let matKhauElement = document.getElementById("matKhau");
let xacNhanElement = document.getElementById("xacNhan");
let thongBao = document.getElementById("thongBao");

        // Kiểm tra các phần tử HTML có tồn tại không
        if (
            !hoTenElement ||
            !tenDangNhapElement ||
            !matKhauElement ||
            !xacNhanElement ||
            !thongBao
        ) {
            console.error("Không tìm thấy phần tử HTML cần thiết!");
            return;
        }

        // Lấy dữ liệu người dùng nhập
        let hoTen = hoTenElement.value.trim();
        let tenDangNhap = tenDangNhapElement.value.trim();
        let matKhau = matKhauElement.value;
        let xacNhan = xacNhanElement.value;

        thongBao.style.color = "red";
        thongBao.innerText = "";

        // 1. Kiểm tra dữ liệu trống
        if (!hoTen || !tenDangNhap || !matKhau || !xacNhan) {
            thongBao.innerText = "Vui lòng nhập đầy đủ thông tin!";
            return;
        }

        // 2. Kiểm tra họ tên
        let loiHoTen = kiemTraHoTen(hoTen);

        if (loiHoTen) {
            thongBao.innerText = loiHoTen;
            return;
        }

        // 3. Kiểm tra tên đăng nhập
        let loiTenDangNhap = kiemTraTenDangNhap(tenDangNhap);

        if (loiTenDangNhap) {
            thongBao.innerText = loiTenDangNhap;
            return;
        }

        // 4. Kiểm tra tên đăng nhập đã tồn tại
        let taiKhoanCu = danhSachTaiKhoan.find(function(tk) {
            return tk.tenDangNhap &&
                tk.tenDangNhap.toLowerCase() === tenDangNhap.toLowerCase();
        });

        if (taiKhoanCu) {
            thongBao.innerText = "Tên đăng nhập đã tồn tại!";
            return;
        }

        // 5. Kiểm tra mật khẩu
        let loiMatKhau = kiemTraMatKhau(matKhau);

        if (loiMatKhau) {
            thongBao.innerText = loiMatKhau;
            return;
        }

        // 6. Kiểm tra xác nhận mật khẩu
        if (matKhau !== xacNhan) {
            thongBao.innerText = "Mật khẩu xác nhận không khớp!";
            return;
        }

        // 7. Tạo tài khoản mới
        let taiKhoanMoi = {
            id: danhSachTaiKhoan.length > 0
                ? Math.max(...danhSachTaiKhoan.map(function(tk) {
                    return Number(tk.id) || 0;
                })) + 1
                : 1,

            tenDangNhap: tenDangNhap,
            matKhau: matKhau,
            hoVaTenNguoiDung: hoTen
        };

        // 8. Thêm tài khoản vào danh sách
        danhSachTaiKhoan.push(taiKhoanMoi);

        // 9. Lưu vào localStorage
        try {
            luuTaiKhoan();
        } catch (error) {
            // Xóa tài khoản vừa thêm nếu lưu thất bại
            danhSachTaiKhoan.pop();

            thongBao.innerText = "Không thể lưu tài khoản. Vui lòng thử lại!";
            console.error("Lỗi lưu tài khoản:", error);
            return;
        }

        // 10. Thông báo đăng ký thành công
        thongBao.style.color = "green";
        thongBao.innerText = "Đăng ký thành công!";

        formDangKy.reset();

        // 11. Chuyển sang trang đăng nhập
        setTimeout(function() {
            window.location.href = "dangnhap.html";
        }, 1000);
    });
}

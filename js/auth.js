import { product } from "./products.js";

// Lấy mảng tài khoản từ localStorage
let danhSachTaiKhoan = JSON.parse( localStorage.getItem("taiKhoan")) || product.danhSachTaiKhoan;

// Lưu mảng tài khoản
function luuTaiKhoan() {
    localStorage.setItem(
        "taiKhoan",
        JSON.stringify(danhSachTaiKhoan)
    );
}

// ================= ĐĂNG KÝ =================
let formDangKy = document.getElementById("formDangKy");
if (formDangKy) {
    formDangKy.addEventListener("submit", function(event) {
        event.preventDefault();

        let hoTen = document.getElementById("hoTen").value.trim();
        let tenDangNhap = document.getElementById("tenDangNhap").value.trim();
        let matKhau = document.getElementById("matKhau").value;
        let xacNhan = document.getElementById("xacNhan").value;
        let thongBao = document.getElementById("thongBao");

        thongBao.style.color = "red";

        if (hoTen.length < 2) {
            thongBao.innerText = "Họ và tên phải có ít nhất 2 ký tự!";
            return;
        }

        if (tenDangNhap.length < 4) {
            thongBao.innerText = "Tên đăng nhập phải có ít nhất 4 ký tự!";
            return;
        }

        let taiKhoanCu = danhSachTaiKhoan.find(function(tk) {
            return tk.tenDangNhap.toLowerCase() === tenDangNhap.toLowerCase();
        });

        if (taiKhoanCu) {
            thongBao.innerText = "Tên đăng nhập đã tồn tại!";
            return;
        }

        if (matKhau.length < 6) {
            thongBao.innerText = "Mật khẩu phải có ít nhất 6 ký tự!";
            return;
        }

        if (matKhau !== xacNhan) {
            thongBao.innerText = "Mật khẩu xác nhận không khớp!";
            return;
        }

        let taiKhoanMoi = {
            id: danhSachTaiKhoan.length > 0
                ? Math.max(...danhSachTaiKhoan.map(function(tk) {
                    return tk.id;
                })) + 1
                : 1,
            tenDangNhap: tenDangNhap,
            matKhau: matKhau,
            hoVaTenNguoiDung: hoTen
        };

        danhSachTaiKhoan.push(taiKhoanMoi);
        luuTaiKhoan();

        thongBao.style.color = "green";
        thongBao.innerText = "Đăng ký thành công!";

        formDangKy.reset();

        setTimeout(function() {
            window.location.href = "dangnhap.html";
        }, 1000);
    });
}


// ================= ĐĂNG NHẬP =================
let formDangNhap = document.getElementById("formDangNhap");

if (formDangNhap) {
    formDangNhap.addEventListener("submit", function(event) {
        event.preventDefault();

        let tenDangNhap = document.getElementById("tenDangNhap").value.trim();
        let matKhau = document.getElementById("matKhau").value;
        let thongBao = document.getElementById("thongBao");

        let taiKhoan = danhSachTaiKhoan.find(function(tk) {
            return tk.tenDangNhap.toLowerCase() === tenDangNhap.toLowerCase()
                && tk.matKhau === matKhau;
        });

        if (taiKhoan) {
            localStorage.setItem(
                "nguoiDungDangNhap",
                JSON.stringify(taiKhoan)
            );

            thongBao.style.color = "green";
            thongBao.innerText = "Đăng nhập thành công!";

            setTimeout(function() {
                window.location.href = "index.html";
            }, 700);
        } else {
            thongBao.style.color = "red";
            thongBao.innerText = "Tên đăng nhập hoặc mật khẩu không đúng!";
        }
    });
}
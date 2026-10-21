
export let danhSachTaiKhoan = JSON.parse(
    localStorage.getItem("taiKhoan") || "[]"
);

// Lưu mảng tài khoản
export function luuTaiKhoan() {
    localStorage.setItem(
        "taiKhoan",
        JSON.stringify(danhSachTaiKhoan)
    );
}


let gioHang = JSON.parse(localStorage.getItem("cart")) || [];


export function hiengio() {
    // Lấy dữ liệu mới nhất
    gioHang = JSON.parse(localStorage.getItem("cart")) || [];
    let html = gioHang.map(function(sp) {
        let gia = Number(sp.gia ?? sp.price) || 0;
        let soLuong = Number(sp.quantity) || 1;

        return `      
<div class="product">
    <img src="${sp.anh || sp.image || ''}" alt="${sp.ten || sp.name || 'Sản phẩm'}">
    <h3>${sp.ten || sp.name || 'Sản phẩm'}</h3>
    <p>Đơn vị: ${sp.donVi || ''}</p>
    <p>Giá: ${gia.toLocaleString("vi-VN")}đ</p>
    <p>
        Số lượng:
        <button onclick="chanemo(${sp.id}, -1)">-</button>
        ${soLuong}
        <button onclick="chanemo(${sp.id}, 1)">+</button>
    </p>
    <p>Thành tiền: ${(gia * soLuong).toLocaleString("vi-VN")}đ</p>
    <button onclick="xoa(${sp.id})">Xóa</button>
</div>
        `;
    }).join("");

    let khuVuc = document.getElementById("giohang");

    if (khuVuc) {
        khuVuc.innerHTML = html;
    }
}



export function tongtien() {
    let tong = 0;
    gioHang.forEach(function(sp) {
        tong = tong + Number(sp.gia || 0) * Number(sp.quantity || 1);
    });
    let tien = document.getElementById("tongtien");
    if (tien) {
        tien.innerText = tong.toLocaleString("vi-VN") + "đ";
    }
}






// Xóa sản phẩm
function xoa(id) {
    gioHang = gioHang.filter(function(sp) {
        return sp.id != id;
    });

    localStorage.setItem("cart", JSON.stringify(gioHang));
    hiengio();
    tongtien();
}



function chanemo(id, chane) {
    let sp = gioHang.find(function(sp) {
        return sp.id == id;
    });
    if (sp) {
        sp.quantity = sp.quantity + chane;

        if (sp.quantity < 1) {
            sp.quantity = 1;
        }
    }
    localStorage.setItem("cart", JSON.stringify(gioHang));
    hiengio();
    tongtien();
}



let donHang = JSON.parse(localStorage.getItem("order")) || [];
function datHang() {
    if (gioHang.length == 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }
    let sp = {
        id: Date.now(),
        sanPham: gioHang,
        ngayDat: new Date().toLocaleString("vi-VN"),
        trangThai: "Chờ xác nhận"
    };
    donHang.push(sp);
    localStorage.setItem("order", JSON.stringify(donHang));
    gioHang = [];
    localStorage.setItem("cart", JSON.stringify(gioHang));
    alert("Đặt hàng thành công!");
    hiengio();
    tongtien();
}

window.datHang = datHang;






















window.chanemo = chanemo;
window.addcart = addcart;
window.xoa = xoa;

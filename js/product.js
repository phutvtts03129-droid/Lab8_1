
import { sanPham } from "./products.js";

// Hàm hiển thị sản phẩm
export function hienthi(products, list) {
    let html = products.map(function(sp) {
        return ` 
<div class="product">
    <img src="${sp.anh}" alt="${sp.ten}">
    <h3>${sp.ten}</h3>
    <p>Đơn vị: ${sp.donVi}</p>
    <p class="price">${sp.gia.toLocaleString("vi-VN")}đ</p>
    <p>Đã bán: ${sp.sold}</p>

    <button onclick="addcart(${sp.id})">
        Thêm vào giỏ hàng
    </button>

    <button onclick="xemChiTiet(${sp.id})">
        Xem chi tiết
    </button>
</div>
        `;
    }).join("");

    let khuVuc = document.getElementById(list);

    if (khuVuc) {
        khuVuc.innerHTML = html;
    }
}



// Hàm hiển thị sản phẩm bán chạy
export function banchay() {
    let sb = sanPham.slice().sort(function(a, b) {
        return b.sold - a.sold;
    }).slice(0, 12);

    hienthi(sb, "chay");
}

// Hàm hiển thị sản phẩm mới
export function sanPhamMoi() {
    let name = sanPham.filter(function(sp) {
        return sp.sanPhamMoi == true;
    });

    hienthi(name, "moi");
}

// Hàm sắp xếp và giới hạn sản phẩm
export function renderproducts(elementId, sortBy, limit = 4) {
    let result = sanPham.slice();

    if (sortBy == "id") {
        result.sort(function(a, b) {
            return a.id - b.id;
        });
    } else if (sortBy == "giaTang") {
        result.sort(function(a, b) {
            return a.gia - b.gia;
        });
    } else if (sortBy == "giaGiam") {
        result.sort(function(a, b) {
            return b.gia - a.gia;
        });
    } else if (sortBy == "tenAZ") {
        result.sort(function(a, b) {
            return a.ten.localeCompare(b.ten, "vi");
        });
    } else if (sortBy == "sold") {
        result.sort(function(a, b) {
            return b.sold - a.sold;
        });
    }

    result = result.slice(0, limit);
    hienthi(result, elementId);
}





let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addcart(id) {
    let product = sanPham.find(function(sp) {
        return sp.id == id;
    });
    if (!product) return;
    let giaban = product.gia;
    let qty = 1;
    let addproduct = {
        id: product.id,
        ten: product.ten,
        gia: giaban,
        anh: product.anh,
        donVi: product.donVi,
        quantity: qty
    };


    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let strong = cart.find(function(sp) {
        return sp.id == id;
    });
    if (strong) {
        strong.quantity++;
    } else {
        cart.push(addproduct);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    let count = 0;
    cart.forEach(function(sp) {
        count = count + sp.quantity;
    });
    let khuVuc = document.getElementById("count");
    if (khuVuc) {
        khuVuc.innerText = count;
    }
    alert("Đã thêm sản phẩm vào giỏ hàng!");
}







export function xemChiTiet(id) {
    let sp = sanPham.find(function(sp) {
        return sp.id == id;
    });

    if (sp) {
        localStorage.setItem("chitiet", JSON.stringify(sp));
        window.location.href = "chitiet.html";
    }
}


export function category(maDanhMuc) {
    let sv;
    if (maDanhMuc == "tat-ca") {
        sv = sanPham;
    } else {
        sv = sanPham.filter(function(sp) {
            return sp.danhMuc == maDanhMuc;
        });
    }
    hienthi(sv, "list");
}


















window.category = category;
window.xemChiTiet = xemChiTiet;
window.addcart = addcart;
window.renderproducts = renderproducts;

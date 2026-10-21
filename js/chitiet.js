
let sp = JSON.parse(localStorage.getItem("chitiet"));

let khuVuc = document.getElementById("chitiet");

if (sp && khuVuc) {
    khuVuc.innerHTML = `
        <div class="chi-tiet">
            <img src="${sp.anh}" alt="${sp.ten}">

            <div class="thong-tin">
                <h2>${sp.ten}</h2>

                <p>Đơn vị: ${sp.donVi}</p>

                <h3 class="price">
                    ${Number(sp.gia).toLocaleString("vi-VN")}đ
                </h3>

                <p>Đã bán: ${sp.sold || 0}</p>

                <p>Danh mục: ${sp.danhMuc || "Rau củ quả"}</p>

                <button onclick="addcart(${sp.id})">
                    Thêm vào giỏ hàng
                </button>

                <button onclick="quayLai()">
                    Quay lại
                </button>
            </div>
        </div>
    `;
} else if (khuVuc) {
    khuVuc.innerHTML = "<p>Không tìm thấy sản phẩm!</p>";
}

// Thêm sản phẩm vào giỏ hàng
function addcart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let spCu = cart.find(function(sp) {
        return sp.id == id;
    });

    if (spCu) {
        spCu.quantity = spCu.quantity + 1;
    } else {
        let spMoi = JSON.parse(localStorage.getItem("chitiet"));

        spMoi = {
            id: spMoi.id,
            ten: spMoi.ten,
            gia: spMoi.gia,
            anh: spMoi.anh,
            donVi: spMoi.donVi,
            quantity: 1
        };

        cart.push(spMoi);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm sản phẩm vào giỏ hàng!");
}

window.addcart = addcart;

// Quay lại trang trước
function quayLai() {
    window.history.back();
}

window.quayLai = quayLai;

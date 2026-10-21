// Tạo đường dẫn ảnh Unsplash dùng cho slider
function q(id, width) {
    return `https://images.unsplash.com/photo-${id}?w=${width}&q=80&auto=format&fit=crop`;
}

export const product = {
    category: [
        { id: 1, ten: "Rau", maDanhMuc: "rau" },
        { id: 2, ten: "Củ", maDanhMuc: "cu" },
        { id: 3, ten: "Trái cây", maDanhMuc: "trai-cay" },
        { id: 4, ten: "Nấm", maDanhMuc: "nam" }
    ],

    products: [
       {
        id: 1,
        ten: "Rau xà lách",
        gia: 15000,
        donVi: "1 bó",
        danhMuc: "rau",
        anh: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500",
        sold: 250,
        sanPhamMoi: false
    },
    {
        id: 2,
        ten: "Cà rốt",
        gia: 25000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500",
        sold: 320,
        sanPhamMoi: false
    },
    {
        id: 3,
        ten: "Khoai tây",
        gia: 30000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
        sold: 180,
        sanPhamMoi: false
    },
    {
        id: 4,
        ten: "Cà chua",
        gia: 20000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500",
        sold: 400,
        sanPhamMoi: false
    },
    {
        id: 5,
        ten: "Ớt chuông",
        gia: 40000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=500",
        sold: 90,
        sanPhamMoi: true
    },
    {
        id: 6,
        ten: "Táo tươi",
        gia: 45000,
        donVi: "1 kg",
        danhMuc: "trai-cay",
        anh: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500",
        sold: 210,
        sanPhamMoi: true
    },
    {
        id: 7,
        ten: "Dứa tươi",
        gia: 18000,
        donVi: "1 quả",
        danhMuc: "trai-cay",
        anh: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500",
        sold: 130,
        sanPhamMoi: true
    },
    {
        id: 8,
        ten: "Khoai lang",
        gia: 22000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
        sold: 160,
        sanPhamMoi: true
    },
    {
        id: 9,
        ten: "Nấm tươi",
        gia: 28000,
        donVi: "1 hộp",
        danhMuc: "nam",
        anh: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=500",
        sold: 75,
        sanPhamMoi: false
    },
    {
        id: 10,
        ten: "Rau cải xanh",
        gia: 12000,
        donVi: "1 bó",
        danhMuc: "rau",
        anh: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500",
        sold: 350,
        sanPhamMoi: false
    },
    {
        id: 11,
        ten: "Bắp cải",
        gia: 18000,
        donVi: "1 cái",
        danhMuc: "rau",
        anh: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500",
        sold: 140,
        sanPhamMoi: false
    },
    {
        id: 12,
        ten: "Bông cải xanh",
        gia: 32000,
        donVi: "1 kg",
        danhMuc: "rau",
        anh: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500",
        sold: 230,
        sanPhamMoi: false
    },
    {
        id: 13,
        ten: "Dưa leo",
        gia: 16000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500",
        sold: 290,
        sanPhamMoi: false
    },
    {
        id: 14,
        ten: "Bí đỏ",
        gia: 20000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?w=500",
        sold: 110,
        sanPhamMoi: false
    },
    {
        id: 15,
        ten: "Củ cải trắng",
        gia: 17000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
        sold: 95,
        sanPhamMoi: false
    },
    {
        id: 16,
        ten: "Hành tây",
        gia: 24000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500",
        sold: 270,
        sanPhamMoi: false
    },
    {
        id: 17,
        ten: "Tỏi",
        gia: 35000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500",
        sold: 170,
        sanPhamMoi: false
    },
    {
        id: 18,
        ten: "Rau muống",
        gia: 10000,
        donVi: "1 bó",
        danhMuc: "rau",
        anh: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500",
        sold: 500,
        sanPhamMoi: false
    },
    {
        id: 19,
        ten: "Rau mồng tơi",
        gia: 12000,
        donVi: "1 bó",
        danhMuc: "rau",
        anh: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500",
        sold: 85,
        sanPhamMoi: true
    },
    {
        id: 20,
        ten: "Rau dền",
        gia: 11000,
        donVi: "1 bó",
        danhMuc: "rau",
        anh: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500",
        sold: 70,
        sanPhamMoi: true
    },
    {
        id: 21,
        ten: "Chuối",
        gia: 22000,
        donVi: "1 kg",
        danhMuc: "trai-cay",
        anh: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500",
        sold: 450,
        sanPhamMoi: false
    },
    {
        id: 22,
        ten: "Cam tươi",
        gia: 35000,
        donVi: "1 kg",
        danhMuc: "trai-cay",
        anh: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500",
        sold: 310,
        sanPhamMoi: false
    },
    {
        id: 23,
        ten: "Xoài chín",
        gia: 30000,
        donVi: "1 kg",
        danhMuc: "trai-cay",
        anh: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500",
        sold: 120,
        sanPhamMoi: true
    },
    {
        id: 24,
        ten: "Nho tươi",
        gia: 65000,
        donVi: "1 kg",
        danhMuc: "trai-cay",
        anh: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500",
        sold: 105,
        sanPhamMoi: true
    },
    {
        id: 25,
        ten: "Lê tươi",
        gia: 42000,
        donVi: "1 kg",
        danhMuc: "trai-cay",
        anh: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=500",
        sold: 80,
        sanPhamMoi: false
    },
    {
        id: 26,
        ten: "Chanh tươi",
        gia: 18000,
        donVi: "1 kg",
        danhMuc: "trai-cay",
        anh: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?w=500",
        sold: 190,
        sanPhamMoi: false
    },
    {
        id: 27,
        ten: "Nấm kim châm",
        gia: 15000,
        donVi: "1 gói",
        danhMuc: "nam",
        anh: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=500",
        sold: 220,
        sanPhamMoi: true
    },
    {
        id: 28,
        ten: "Nấm đùi gà",
        gia: 35000,
        donVi: "1 hộp",
        danhMuc: "nam",
        anh: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=500",
        sold: 65,
        sanPhamMoi: true
    },
    {
        id: 29,
        ten: "Đậu bắp",
        gia: 20000,
        donVi: "1 kg",
        danhMuc: "rau",
        anh: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
        sold: 145,
        sanPhamMoi: false
    },
    {
        id: 30,
        ten: "Bí ngòi",
        gia: 26000,
        donVi: "1 kg",
        danhMuc: "cu",
        anh: "https://images.unsplash.com/photo-1563252722-6434563a985d?w=500",
        sold: 60,
        sanPhamMoi: true
    }
    ],

    detail: [
        {
            id: 1,
            moTa: "Rau xà lách tươi, thích hợp làm salad và ăn kèm món ăn.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản trong ngăn mát tủ lạnh."
        },
        {
            id: 2,
            moTa: "Cà rốt tươi, phù hợp nấu canh, xào và làm nước ép.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản nơi thoáng mát."
        },
        {
            id: 3,
            moTa: "Khoai tây dùng để chiên, nấu canh hoặc nghiền.",
            xuatXu: "Việt Nam",
            baoQuan: "Để nơi khô ráo, thoáng mát."
        },
        {
            id: 4,
            moTa: "Cà chua tươi, thích hợp nấu ăn và làm salad.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản nơi mát."
        },
        {
            id: 5,
            moTa: "Ớt chuông có màu sắc bắt mắt, dùng để xào hoặc làm salad.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản trong ngăn mát tủ lạnh."
        },
        {
            id: 6,
            moTa: "Táo tươi, có thể dùng ăn trực tiếp hoặc làm nước ép.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản trong ngăn mát tủ lạnh."
        },
        {
            id: 7,
            moTa: "Dứa tươi, thích hợp ăn trực tiếp hoặc chế biến món ăn.",
            xuatXu: "Việt Nam",
            baoQuan: "Để nơi thoáng mát hoặc bảo quản lạnh."
        },
        {
            id: 8,
            moTa: "Khoai lang phù hợp luộc, hấp, nướng hoặc nấu chè.",
            xuatXu: "Việt Nam",
            baoQuan: "Để nơi khô ráo."
        },
        {
            id: 9,
            moTa: "Nấm tươi dùng để nấu canh, xào hoặc nấu lẩu.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản lạnh và sử dụng sớm."
        },
        {
            id: 10,
            moTa: "Rau cải xanh phù hợp nấu canh hoặc xào.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản trong ngăn mát."
        },
        {
            id: 11,
            moTa: "Bắp cải tươi, dùng để luộc, xào hoặc làm salad.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản lạnh."
        },
        {
            id: 12,
            moTa: "Bông cải xanh phù hợp hấp, luộc hoặc xào.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản lạnh."
        },
        {
            id: 13,
            moTa: "Dưa leo tươi, thích hợp ăn sống hoặc làm salad.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản nơi mát."
        },
        {
            id: 14,
            moTa: "Bí đỏ có thể dùng nấu canh, hấp hoặc nấu súp.",
            xuatXu: "Việt Nam",
            baoQuan: "Để nơi khô ráo."
        },
        {
            id: 15,
            moTa: "Củ cải trắng dùng để nấu canh, hầm hoặc muối chua.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản trong ngăn mát."
        },
        {
            id: 16,
            moTa: "Hành tây dùng để xào, nấu canh và chế biến nhiều món ăn.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Để nơi khô ráo, thoáng mát."
        },
        {
            id: 17,
            moTa: "Tỏi dùng làm gia vị cho các món ăn.",
            xuatXu: "Việt Nam",
            baoQuan: "Để nơi khô ráo."
        },
        {
            id: 18,
            moTa: "Rau muống phù hợp luộc, xào hoặc nấu canh.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản lạnh và sử dụng sớm."
        },
        {
            id: 19,
            moTa: "Rau mồng tơi thường dùng để nấu canh.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản trong ngăn mát."
        },
        {
            id: 20,
            moTa: "Rau dền phù hợp nấu canh và chế biến bữa ăn gia đình.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản lạnh."
        },
        {
            id: 21,
            moTa: "Chuối tươi, thích hợp ăn trực tiếp hoặc làm sinh tố.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Để nơi thoáng mát."
        },
        {
            id: 22,
            moTa: "Cam tươi có thể ăn trực tiếp hoặc ép lấy nước.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản nơi mát."
        },
        {
            id: 23,
            moTa: "Xoài chín thích hợp ăn trực tiếp hoặc làm sinh tố.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản nơi thoáng mát."
        },
        {
            id: 24,
            moTa: "Nho tươi có thể dùng ăn trực tiếp hoặc trang trí món ăn.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản trong ngăn mát."
        },
        {
            id: 25,
            moTa: "Lê tươi có thể dùng ăn trực tiếp hoặc làm món tráng miệng.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản trong ngăn mát."
        },
        {
            id: 26,
            moTa: "Chanh tươi dùng pha nước uống và làm gia vị.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản nơi mát."
        },
        {
            id: 27,
            moTa: "Nấm kim châm phù hợp nấu lẩu, canh hoặc xào.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản lạnh."
        },
        {
            id: 28,
            moTa: "Nấm đùi gà có thể dùng để xào, nướng hoặc nấu lẩu.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản lạnh."
        },
        {
            id: 29,
            moTa: "Đậu bắp phù hợp luộc, hấp hoặc nấu canh chua.",
            xuatXu: "Việt Nam",
            baoQuan: "Bảo quản trong ngăn mát."
        },
        {
            id: 30,
            moTa: "Bí ngòi dùng để xào, hấp hoặc nấu canh.",
            xuatXu: "Tùy lô hàng",
            baoQuan: "Bảo quản trong ngăn mát."
        }
    ],
   slider: {
    thoiGian: 5500, // ms mỗi slide
    danhSachSlide: [
        {
            nhan: "🥬 Tươi mỗi sáng",
            tieuDe: "Rau củ quả tươi mỗi ngày",
            moTa: "Thực phẩm sạch, tươi ngon, giá tốt. Chọn tay từ sáng sớm, giao tới bếp nhà bạn trong hôm nay.",
            anh: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=80",
            anhPhu: [q("1546094096-0df4bcaaa337", 700), q("1547514701-42782101795e", 600), q("1504545102780-26774c1bb073", 600)],
            tinhNang: [{ icon: "🚚", chu: "Giao 2 giờ" }, { icon: "🌱", chu: "Nguồn gốc rõ ràng" }, { icon: "💚", chu: "Giá chợ" }],
            nutChinh: { icon: "🛒", chu: "Mua ngay", link: "danhmuc.html" },
            nutPhu: { icon: "🔥", chu: "Xem món bán chạy", link: "danhmuc.html#banchay" },
            sticker: { icon: "🌿", chu: "100% sạch" }
        },
        {
            nhan: "👨‍👩‍👧 Cho cả gia đình",
            tieuDe: "Thực phẩm sạch cho gia đình",
            moTa: "Nhiều loại rau củ quả tươi ngon, đủ cho một tuần nấu ăn tại nhà.",
            anh: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=1200&q=80",
            anhPhu: [q("1445282768818-728615cc910a", 700), q("1459411621453-7b03977f4bfc", 600), q("1506917728037-b6af01a7d403", 600)],
            tinhNang: [{ icon: "🥕", chu: "30+ loại củ quả" }, { icon: "🥦", chu: "Rau lá hái sáng" }, { icon: "🍳", chu: "Dễ nấu mỗi ngày" }],
            nutChinh: { icon: "🥗", chu: "Xem danh mục", link: "danhmuc.html" },
            nutPhu: { icon: "✨", chu: "Hàng mới về", link: "danhmuc.html#sanPhamMoi" },
            sticker: { icon: "⭐", chu: "Được yêu thích" }
        },
        {
            nhan: "⚡ Giao hàng nhanh",
            tieuDe: "Mua rau tươi, giao hàng nhanh",
            moTa: "Đặt hàng dễ dàng tại Green Mart, miễn phí giao hàng cho đơn từ 200.000đ.",
            anh: "https://images.unsplash.com/photo-1547514701-42782101795e?w=1200&q=80",
            anhPhu: [q("1553279768-865429fa0078", 700), q("1546094096-0df4bcaaa337", 600), q("1576045057995-568f588f82fb", 600)],
            tinhNang: [{ icon: "🎁", chu: "Freeship từ 200K" }, { icon: "🔄", chu: "Đổi trả trong ngày" }, { icon: "📞", chu: "Hỗ trợ 6h–21h" }],
            nutChinh: { icon: "🧺", chu: "Xem giỏ hàng", link: "giohang.html" },
            nutPhu: { icon: "📦", chu: "Đơn hàng của tôi", link: "dathang.html" },
            sticker: { icon: "🚀", chu: "Nhanh 2 giờ" }
        },
        {
            nhan: "🍎 Trái cây & nấm",
            tieuDe: "Trái cây chín, nấm sạch ngọt nước",
            moTa: "Trái cây chín tự nhiên, nấm tươi sạch — món ngon cho bữa cơm và cho cả bé.",
            anh: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=1200&q=80",
            anhPhu: [q("1504545102780-26774c1bb073", 700), q("1459411621453-7b03977f4bfc", 600), q("1445282768818-728615cc910a", 600)],
            tinhNang: [{ icon: "🍊", chu: "Chín tự nhiên" }, { icon: "🍄", chu: "Nấm tươi sạch" }, { icon: "❄️", chu: "Bảo quản lạnh" }],
            nutChinh: { icon: "🍇", chu: "Mua trái cây", link: "danhmuc.html" },
            nutPhu: { icon: "🔑", chu: "Đăng nhập nhận ưu đãi", link: "dangnhap.html" },
            sticker: { icon: "🎉", chu: "Ưu đãi mới" }
        }
    ],
    danhSachIcon: [
        { icon: "🥬", ten: "Rau xanh", moTa: "Hái mỗi sáng", link: "danhmuc.html", mau: "#e3f4d0" },
        { icon: "🥕", ten: "Củ quả", moTa: "Cho bữa cơm", link: "danhmuc.html", mau: "#ffe6cf" },
        { icon: "🍎", ten: "Trái cây", moTa: "Chín tự nhiên", link: "danhmuc.html", mau: "#ffdcd5" },
        { icon: "🍄", ten: "Nấm tươi", moTa: "Sạch, ngọt nước", link: "danhmuc.html", mau: "#f1e6d6" },
        { icon: "🔥", ten: "Bán chạy", moTa: "Được chọn nhiều", link: "danhmuc.html#banchay", mau: "#fff0c2" },
        { icon: "🚚", ten: "Giao nhanh", moTa: "Trong 2 giờ", link: "giohang.html", mau: "#d9ecff" }
    ],
    iconBay: [
        { i: "🥕", x: 52, y: 10, s: 34, d: 5 }, { i: "🍅", x: 90, y: 14, s: 40, d: 6 },
        { i: "🥬", x: 94, y: 60, s: 36, d: 7 }, { i: "🍎", x: 48, y: 72, s: 30, d: 5.5 },
        { i: "🍄", x: 72, y: 6, s: 28, d: 6.5 }, { i: "🌽", x: 4, y: 12, s: 26, d: 7 },
        { i: "🥦", x: 3, y: 64, s: 30, d: 6 }, { i: "🍋", x: 80, y: 78, s: 28, d: 5 }
    ]
},
     danhSachTaiKhoan: [
        {
            id: 1,
            tenDangNhap: "phu123",
            matKhau: "123456",
            hoVaTenNguoiDung: "Nguyen Van Phu"
        },
        {
            id: 2,
            tenDangNhap: "lan456",
            matKhau: "abcdef",
            hoVaTenNguoiDung: "Tran Thi Lan"
        }
    ]
};

// Giữ tương thích với code cũ đang dùng sanPham
export const sanPham = product.products;
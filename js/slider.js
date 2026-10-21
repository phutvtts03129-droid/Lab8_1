
// ========================================
// PHẦN 1: LẤY DỮ LIỆU
// ========================================

import { product } from "./products.js";

const slider = product.slider;

let viTri = 0;
let dangChuyen = false;


// ========================================
// PHẦN 2: TẠO HTML BANNER
// ========================================

function taoBanner() {
    const goc = document.getElementById("heroSlider");

    if (!goc || !slider || !slider.danhSachSlide) {
        return;
    }

    // Khong tao lai banner
    if (goc.dataset.daKhoiTao === "true") {
        return;
    }

    goc.dataset.daKhoiTao = "true";

    const ds = slider.danhSachSlide;

    goc.className = "hs";

    goc.innerHTML = `
        <div class="hs-track">
            ${ds.map(function (s, i) {
                return `
                    <article class="hs-slide ${i === 0 ? "active" : ""}">
                        <div class="hs-bg"
                            style="background-image: url('${s.anh}')">
                        </div>

                        <div class="hs-inner">
                            <div class="hs-copy">
                                <span class="hs-badge anim">${s.nhan}</span>

                                <h1 class="anim">${s.tieuDe}</h1>

                                <p class="anim">${s.moTa}</p>

                                <ul class="hs-tags anim">
                                    ${s.tinhNang.map(function (t) {
                                        return `
                                            <li>
                                                <span>${t.icon}</span>
                                                ${t.chu}
                                            </li>
                                        `;
                                    }).join("")}
                                </ul>

                                <div class="hs-actions anim">
                                    <a class="hs-btn" href="${s.nutChinh.link}">
                                        ${s.nutChinh.icon}
                                        ${s.nutChinh.chu}
                                    </a>

                                    <a class="hs-btn hs-ghost" href="${s.nutPhu.link}">
                                        ${s.nutPhu.icon}
                                        ${s.nutPhu.chu}
                                    </a>
                                </div>
                            </div>

                            <div class="hs-collage anim">
                                ${s.anhPhu.map(function (anh, i) {
                                    return `
                                        <img src="${anh}"
                                            alt="Thực phẩm tươi ${i + 1}"
                                            loading="lazy">
                                    `;
                                }).join("")}

                                <div class="hs-sticker">
                                    <b>${s.sticker.icon}</b>
                                    <span>${s.sticker.chu}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                `;
            }).join("")}
        </div>

        <div class="hs-fly" aria-hidden="true">
            ${slider.iconBay.map(function (f) {
                return `
                    <span style="
                        --x:${f.x}%;
                        --y:${f.y}%;
                        --s:${f.s}px;
                        --d:${f.d}s;
                    ">${f.i}</span>
                `;
            }).join("")}
        </div>

        <button class="hs-arrow hs-prev" type="button">
            &#10094;
        </button>

        <button class="hs-arrow hs-next" type="button">
            &#10095;
        </button>
    `;
}


// ========================================
// PHẦN 3: XỬ LÝ CHUYỂN ĐỘNG
// ========================================

function chuyenDen(viTriMoi) {
    const goc = document.getElementById("heroSlider");

    if (!goc || dangChuyen) {
        return;
    }

    const slides = goc.querySelectorAll(".hs-slide");

    if (slides.length <= 1) {
        return;
    }

    // Quay ve slide cuoi
    if (viTriMoi < 0) {
        viTriMoi = slides.length - 1;
    }

    // Quay ve slide dau
    if (viTriMoi >= slides.length) {
        viTriMoi = 0;
    }

    if (viTriMoi === viTri) {
        return;
    }

    dangChuyen = true;

    const slideCu = slides[viTri];
    const slideMoi = slides[viTriMoi];

    slideMoi.classList.remove("leaving");
    slideMoi.classList.remove("active");

    // Khoi dong lai hieu ung CSS
    void slideMoi.offsetWidth;

    slideMoi.classList.add("active");

    slideCu.classList.remove("active");
    slideCu.classList.add("leaving");

    // Cho hieu ung chay xong
    setTimeout(function () {
        slideCu.classList.remove("leaving");

        viTri = viTriMoi;
        dangChuyen = false;
    }, 800);
}


// ========================================
// PHẦN 4: XỬ LÝ NÚT CHUYỂN SLIDE
// ========================================

function ganNutChuyenSlide() {
    const goc = document.getElementById("heroSlider");

    if (!goc) {
        return;
    }

    const nutTruoc = goc.querySelector(".hs-prev");
    const nutTiep = goc.querySelector(".hs-next");

    // Nut truoc
    if (nutTruoc) {
        nutTruoc.addEventListener("click", function () {
            chuyenDen(viTri - 1);
        });
    }

    // Nut tiep
    if (nutTiep) {
        nutTiep.addEventListener("click", function () {
            chuyenDen(viTri + 1);
        });
    }
}


// ========================================
// PHẦN 5: TỰ ĐỘNG CHUYỂN SLIDE
// ========================================

function tuDongChuyenSlide() {
    setInterval(function () {
        chuyenDen(viTri + 1);
    }, slider.thoiGian || 8000);
}


// ========================================
// PHẦN 6: HIỂN THỊ DẢI ICON
// ========================================

function veDaiIcon() {
    const el = document.getElementById("iconStrip");

    if (!el || !slider.danhSachIcon) {
        return;
    }

    el.innerHTML = slider.danhSachIcon.map(function (x) {
        return `
            <a class="is-item"
                href="${x.link}"
                style="--c:${x.mau}">

                <span class="is-ico">${x.icon}</span>
                <b>${x.ten}</b>
                <small>${x.moTa}</small>
            </a>
        `;
    }).join("");
}


// ========================================
// PHẦN 7: CÁC HÀM EXPORT
// ========================================

export function hienThiSlide() {
    taoBanner();
    ganNutChuyenSlide();
    tuDongChuyenSlide();
}

export function tuDongSlide() {
    // Da duoc khoi dong trong hienThiSlide()
}

export function slideSau() {
    chuyenDen(viTri + 1);
}

export function slideTruoc() {
    chuyenDen(viTri - 1);
}


// ========================================
// PHẦN 8: CHẠY CHƯƠNG TRÌNH
// ========================================

hienThiSlide();
veDaiIcon();

// main.js
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "block";
    mobileMenu.style.display = isOpen ? "none" : "block";
  });
}

// سنة الفوتر
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// فلترة المنتجات (في صفحة products فقط)
const grid = document.getElementById("productsGrid");
const search = document.getElementById("search");
const category = document.getElementById("category");

function filterProducts() {
  if (!grid) return;
  const q = (search?.value || "").trim().toLowerCase();
  const cat = category?.value || "all";
  const items = grid.querySelectorAll(".product");

  items.forEach((item) => {
    const text = item.innerText.toLowerCase();
    const itemCat = item.getAttribute("data-cat");
    const okText = text.includes(q);
    const okCat = cat === "all" || itemCat === cat;
    item.style.display = okText && okCat ? "block" : "none";
  });
}

if (search) search.addEventListener("input", filterProducts);
if (category) category.addEventListener("change", filterProducts);

// فورم التواصل: يفتح واتساب برسالة جاهزة
function openWhatsAppMessage(e){
  e.preventDefault();
  const name = document.getElementById("name")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const msg = document.getElementById("msg")?.value || "";

  const text =
`الاسم: ${name}
الموبايل: ${phone}
الرسالة: ${msg}`;

  const waNumber = "201000000000"; // <-- غيّر الرقم بتاعك
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
  return false;
}

// عشان يبقى متاح للـ inline onsubmit
window.openWhatsAppMessage = openWhatsAppMessage;
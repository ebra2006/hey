document.addEventListener("DOMContentLoaded", function () {
 // نموذج الحجز - تنبيه عند الإرسال
 document
  .querySelector(".booking form")
  .addEventListener("submit", function (event) {
   event.preventDefault();
   alert("تم إرسال طلب الحجز بنجاح!");
  });

 // تحريك الصفحة عند الضغط على الروابط
 document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
   event.preventDefault();
   const targetId = this.getAttribute("href").substring(1);
   document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
 });

 window.initMap = initMap;
});

function toggleMenu() {
 document.getElementById("sidebar").classList.toggle("active");
 document.getElementById("overlay").classList.toggle("active");
}

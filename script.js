document.addEventListener("DOMContentLoaded", function () {
    // نموذج الحجز - تنبيه عند الإرسال
    document.querySelector(".booking form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("تم إرسال طلب الحجز بنجاح!");
    });

    // تحريك الصفحة عند الضغط على الروابط
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // خريطة جوجل
    function initMap() {
        var map = new google.maps.Map(document.getElementById("google-map"), {
            center: { lat: 25.276987, lng: 55.296249 }, // دبي كموقع افتراضي
            zoom: 5
        });
    }
    
    window.initMap = initMap;
});

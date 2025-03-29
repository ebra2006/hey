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



function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}





















function initMap() {
    var location = { lat: -37.8172, lng: 144.9559 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    // مربع البحث
    var input = document.getElementById("searchBox");
    var searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    searchBox.addListener("places_changed", function () {
        var places = searchBox.getPlaces();
        if (places.length === 0) return;

        var bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry) return;
            bounds.extend(place.geometry.location);
        });
        map.fitBounds(bounds);
    });
}

console.log("app.js loaded!");

// تحميل الفصول بشكل ديناميكي
document.addEventListener("DOMContentLoaded", function() {
    const chapters = [
        { title: "Chapter 1", link: "#chapter1" },
        { title: "Chapter 2", link: "#chapter2" },
        { title: "Chapter 3", link: "#chapter3" }
    ];
    
    const chapterList = document.getElementById("chapter-list");
    if (chapterList) {
        chapters.forEach(chapter => {
            let chapterElement = document.createElement("div");
            chapterElement.classList.add("chapter");
            chapterElement.innerHTML = <h3><a href="${chapter.link}">${chapter.title}</a></h3>;
            chapterList.appendChild(chapterElement);
        });
    }

    // التعامل مع نموذج تسجيل الدخول
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            if (email === "test@example.com" && password === "password") {
                alert("Login successful");
            } else {
                alert("Invalid credentials");
            }
        });
    }

    // تحميل particles.js إذا كان العنصر موجودًا
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", { 
            particles: { 
                number: { value: 80 },
                color: { value: "#00ffea" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                move: { speed: 3, direction: "none", out_mode: "out" }
            },
            interactivity: { 
                events: { 
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: { 
                    repulse: { distance: 100 },
                    push: { particles_nb: 4 }
                }
            }
        });
    }
});


});

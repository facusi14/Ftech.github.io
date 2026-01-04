/* ================= ANIMACIONES ================= */
const elements = document.querySelectorAll(".fade-in, .slide-up");

const observer = new IntersectionObserver(
    (entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target); // mejora rendimiento
            }
        });
    },
    { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));


/* ================= NAVBAR SCROLL ================= */
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


/* ================= MENU HAMBURGUESA ================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


/* ================= CERRAR MENU AL CLICK ================= */
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

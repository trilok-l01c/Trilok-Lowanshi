// Minimal, robust nav-theme observer using IntersectionObserver
const nav = document.querySelector("nav");
const sections = document.querySelectorAll(".sec");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const theme = entry.target.dataset.theme;
                nav.className = theme;
            }
        });
    },
    {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px",
    }
);

sections.forEach((s) => observer.observe(s));

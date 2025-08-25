document.addEventListener("DOMContentLoaded", () => {
    const fadeItems = document.querySelectorAll(".fade-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");   // hiện khi vào màn hình
            } else {
                entry.target.classList.remove("show"); 
            }
        });
    }, { threshold: 0.3 });

    fadeItems.forEach(item => observer.observe(item));
});

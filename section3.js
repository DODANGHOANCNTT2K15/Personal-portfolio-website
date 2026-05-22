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

const nodes = document.querySelectorAll(".exp-node");
const popupOverlay = document.getElementById("experiencePopup");
const popupClose = document.getElementById("popupClose");
const popupContent = document.getElementById("popupContent");

nodes.forEach(node => {
    node.addEventListener("click", () => {
        nodes.forEach(n => n.classList.remove("active"));
        node.classList.add("active");

        const target = node.dataset.target;
        const contentBlock = document.getElementById(target);

        if (contentBlock) {
            popupContent.innerHTML = contentBlock.innerHTML;
            popupOverlay.classList.add("show");
        }
    });
});

popupClose.addEventListener("click", () => {
    popupOverlay.classList.remove("show");
});

popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.classList.remove("show");
    }
});
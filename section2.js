document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".education-logo");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                logo.classList.add("show");   // hiện khi scroll tới
            } else {
                logo.classList.remove("show"); // ẩn khi scroll đi
            }
        });
    }, { threshold: 0.3 }); // chỉ hiện khi 30% div lọt vào màn hình

    observer.observe(logo);
});

// Hàm chạy số GPA từ 0.0 lên target
function animateGPA(target) {
  let current = 0.0;
  const end = target;
  const duration = 2000; // ms
  const stepTime = 20;
  const increment = (end / (duration / stepTime));

  const gpaElement = document.getElementById("gpa-value");

  clearInterval(gpaElement.interval); // tránh trùng interval

  gpaElement.interval = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(gpaElement.interval);
    }
    gpaElement.textContent = current.toFixed(1);
  }, stepTime);
}

// Theo dõi khi scroll đến phần Education
window.addEventListener("scroll", function () {
  const gpaWrapper = document.querySelector(".gpa");
  const gpaElement = document.getElementById("gpa-value");
  const rect = gpaWrapper.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    // Trong màn hình
    if (!gpaWrapper.classList.contains("animated")) {
      animateGPA(2.5);
      gpaWrapper.classList.add("animated");
    }
  } else {
    // Ra khỏi màn hình -> reset
    gpaElement.textContent = "0.0";
    gpaWrapper.classList.remove("animated");
  }
});

// chọn tất cả các link trong nav
const navLinks = document.querySelectorAll("nav ul li a");

// chọn tất cả section
const sections = document.querySelectorAll(".section");

// dùng IntersectionObserver để theo dõi khi section vào viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // bỏ class active ở tất cả link
        navLinks.forEach((link) => link.classList.remove("active"));
        // tìm link có href trùng id section
        const activeLink = document.querySelector(
          `nav ul li a[href="#${entry.target.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.6, // 60% section nằm trong viewport thì tính là active
  }
);

// observe tất cả section
sections.forEach((section) => observer.observe(section));

function smoothScrollTo(target, duration = 1500) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  let startTime = null;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // dùng easing
    const easedProgress = easeOutCubic(progress);

    const run = start + distance * easedProgress;
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}


// áp dụng cho nav link
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const target = document.getElementById(id);

    if (target) smoothScrollTo(target, 180);

    // Khi click xong thì ẩn menu
    navList.classList.remove('active');
  });
});

// JS gọn để toggle menu
const toggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});


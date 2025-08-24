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

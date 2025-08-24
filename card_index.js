// Lấy ảnh
const img = document.querySelector('#card_index');

// Khi click thì thêm class shake
img.addEventListener('click', () => {
  img.classList.add('shake');

  // Sau khi animation kết thúc thì xóa class để lần sau click lại chạy
  img.addEventListener('animationend', () => {
    img.classList.remove('shake');
  }, { once: true });
});


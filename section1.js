const texts = [
  "I'm DO DANG HOAN",
  "IT Student",
  "software development"
];

let count = 0;      
let index = 0;      
let currentText = "";
let letter = "";
let isDeleting = false;

function type() {
  currentText = texts[count];
  
  if (!isDeleting) {
    letter = currentText.slice(0, ++index);
  } else {
    letter = currentText.slice(0, --index);
  }

  document.getElementById("typing").textContent = letter;

  let speed = isDeleting ? 50 : 120;

  if (!isDeleting && letter.length === currentText.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();

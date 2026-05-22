const cards = document.querySelectorAll(".card");
const popup = document.getElementById("project-popup");
const popupLeft = popup.querySelector(".popup-left");
const popupTitle = document.getElementById("popup-title");
const popupPurpose = document.getElementById("popup-purpose");
const popupRole = document.getElementById("popup-role");
const popupLanguage = document.getElementById("popup-language");
const popupFramework = document.getElementById("popup-framework");
const popupTools = document.getElementById("popup-tools");
const popupProject = document.getElementById("popup-project");
const popupChallenges = document.getElementById("popup-challenges");
const popupLessons = document.getElementById("popup-lessons");
const closeBtn = popup.querySelector(".close");

function showPopupFromCard(card) {
  if (!card) return;
  // clear old media
  popupLeft.innerHTML = "";

  const type = card.dataset.type; // "image" or "video"
  const src = card.dataset.src;

  if (type === "video") {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    popupLeft.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    popupLeft.appendChild(img);
  }

  popupTitle.textContent = card.dataset.title || "";
  popupPurpose.textContent = card.dataset.purpose || "";
  popupRole.textContent = card.dataset.role || "";
  popupLanguage.textContent = card.dataset.language || "";
  popupFramework.textContent = card.dataset.framework || "";
  popupTools.textContent = card.dataset.tools || "";
  if (card.dataset.project) {
    popupProject.href = card.dataset.project;
    popupProject.textContent = 'Open Project';
    popupProject.style.display = 'inline-block';
  } else {
    popupProject.href = '#';
    popupProject.textContent = 'Link';
  }
  popupChallenges.textContent = card.dataset.challenges || "";
  popupLessons.textContent = card.dataset.lessons || "";

  popup.style.display = "flex";
}

// attach click handlers to cards
cards.forEach(card => {
  card.addEventListener("click", e => {
    e.preventDefault();
    showPopupFromCard(card);
  });
});

// allow links in experience-data to open a specific project card popup
const viewProjectLinks = document.querySelectorAll('.view-project-link');
viewProjectLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetCardId = link.dataset.targetCard;
    if (!targetCardId) return;
    const targetCard = document.getElementById(targetCardId);
    if (targetCard) showPopupFromCard(targetCard);
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  popupLeft.innerHTML = ""; // dừng video khi đóng popup
});

popup.addEventListener("click", e => {
  if(e.target === popup) {
    popup.style.display = "none";
    popupLeft.innerHTML = "";
  }
});

const audio = document.getElementById("myAudio");
const muteBtn = document.getElementById("muteBtn");
audio.volume = 0.5;
const icon = muteBtn.querySelector("i");

muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    icon.className = audio.muted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
});


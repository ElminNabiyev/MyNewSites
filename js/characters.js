const kvImgNav = document.querySelector(".kv_navbar_logo ");
const menuBar = document.querySelector(".nav_list_ul");
const menuBtn = document.getElementById("btn");
const backMenu = document.querySelector(".back");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const charactersDiv = document.querySelector(".characters_div");
const info = document.querySelectorAll(".info");
const acoordion = document.querySelectorAll(".acoordion");
const videoBtn = document.querySelectorAll(".video");
const videos = document.querySelectorAll("video");
const imgs = document.querySelectorAll(".character");

window.addEventListener("load", function () {
  kvImgNav.style.opacity = "1";
});
menuBtn.addEventListener("click", function () {
  if (menuBar.style.display === "flex") {
    menuBar.style.display = "none";
    sections.forEach((x) => (x.style.filter = "blur(0px)"));
    footer.style.filter = "blur(0px)";
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuBar.style.display = "flex";
    sections.forEach((x) => (x.style.filter = "blur(3px)"));
    footer.style.filter = "blur(3px)";
    menuBtn.textContent = "←";
  }
});

info[0].addEventListener("click", function () {
  if (acoordion[0].style.display === "flex") {
    acoordion[0].style.display = "none";
  } else {
    acoordion[0].style.display = "flex";
  }
});
info[1].addEventListener("click", function () {
  if (acoordion[1].style.display === "flex") {
    acoordion[1].style.display = "none";
  } else {
    acoordion[1].style.display = "flex";
  }
});
info[2].addEventListener("click", function () {
  if (acoordion[2].style.display === "flex") {
    acoordion[2].style.display = "none";
  } else {
    acoordion[2].style.display = "flex";
  }
});
info[3].addEventListener("click", function () {
  if (acoordion[3].style.display === "flex") {
    acoordion[3].style.display = "none";
  } else {
    acoordion[3].style.display = "flex";
  }
});
info[4].addEventListener("click", function () {
  if (acoordion[4].style.display === "flex") {
    acoordion[4].style.display = "none";
  } else {
    acoordion[4].style.display = "flex";
  }
});
info[5].addEventListener("click", function () {
  if (acoordion[5].style.display === "flex") {
    acoordion[5].style.display = "none";
  } else {
    acoordion[5].style.display = "flex";
  }
});
info[6].addEventListener("click", function () {
  if (acoordion[6].style.display === "flex") {
    acoordion[6].style.display = "none";
  } else {
    acoordion[6].style.display = "flex";
  }
});
info[7].addEventListener("click", function () {
  if (acoordion[7].style.display === "flex") {
    acoordion[7].style.display = "none";
  } else {
    acoordion[7].style.display = "flex";
  }
});
info[8].addEventListener("click", function () {
  if (acoordion[8].style.display === "flex") {
    acoordion[8].style.display = "none";
  } else {
    acoordion[8].style.display = "flex";
  }
});
videos.forEach((x) => (x.volume = 0.3));
videoBtn[0].addEventListener("click", function () {
  if (videos[0].style.display === "none") {
    imgs[0].remove();
    videos[0].style.display = "flex";
    videos[0].play();
  } else {
    videos[0].pause();
    videos[0].currentTime = 0;
    videos[0].style.display = "none";
  }
});
videoBtn[1].addEventListener("click", function () {
  if (videos[1].style.display === "none") {
    imgs[1].remove();
    videos[1].style.display = "flex";
    videos[1].play();
  } else {
    videos[1].pause();
    videos[1].currentTime = 0;
    videos[1].style.display = "none";
  }
});
videoBtn[2].addEventListener("click", function () {
  if (videos[2].style.display === "none") {
    imgs[2].remove();
    videos[2].style.display = "flex";
    videos[2].play();
  } else {
    videos[2].pause();
    videos[2].currentTime = 0;
    videos[2].style.display = "none";
  }
});
videoBtn[3].addEventListener("click", function () {
  if (videos[3].style.display === "none") {
    imgs[3].remove();
    videos[3].style.display = "flex";
    videos[3].play();
  } else {
    videos[3].pause();
    videos[3].currentTime = 0;
    videos[3].style.display = "none";
  }
});
videoBtn[4].addEventListener("click", function () {
  if (videos[4].style.display === "none") {
    imgs[4].remove();
    videos[4].style.display = "flex";
    videos[4].play();
  } else {
    videos[4].pause();
    videos[4].currentTime = 0;
    videos[4].style.display = "none";
  }
});
videoBtn[5].addEventListener("click", function () {
  if (videos[5].style.display === "none") {
    imgs[5].remove();
    videos[5].style.display = "flex";
    videos[5].play();
  } else {
    videos[5].pause();
    videos[5].currentTime = 0;
    videos[5].style.display = "none";
  }
});
videoBtn[6].addEventListener("click", function () {
  if (videos[6].style.display === "none") {
    imgs[6].remove();
    videos[6].style.display = "flex";
    videos[6].play();
  } else {
    videos[6].pause();
    videos[6].currentTime = 0;
    videos[6].style.display = "none";
  }
});
videoBtn[7].addEventListener("click", function () {
  if (videos[7].style.display === "none") {
    imgs[7].remove();
    videos[7].style.display = "flex";
    videos[7].play();
  } else {
    videos[7].pause();
    videos[7].currentTime = 0;
    videos[7].style.display = "none";
  }
});
videoBtn[8].addEventListener("click", function () {
  if (videos[8].style.display === "none") {
    imgs[8].remove();
    videos[8].play();
    videos[8].style.display = "flex";
  } else {
    videos[8].pause();
    videos[8].currentTime = 0;
    videos[8].style.display = "none";
  }
});
videoBtn[9].addEventListener("click", function () {
  if (videos[9].style.display === "none") {
    videos[9].style.display = "flex";
    videos[9].play();
  } else {
    videos[9].pause();
    videos[9].currentTime = 0;
    videos[9].style.display = "none";
  }
});

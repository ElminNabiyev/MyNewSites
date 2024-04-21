const kvImgNav = document.querySelector(".kv_navbar_logo ");
const play = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
const menuBar = document.querySelector(".nav_list_ul");
const menuBtn = document.getElementById("btn");
const jenerik = document.getElementById("jenerik");
const izleBtn = document.querySelectorAll(".izle");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const tv = document.querySelectorAll(".fa-tv");
const heart = document.querySelectorAll(".fa-heart");
const share = document.querySelectorAll(".fa-share-nodes");

window.addEventListener("load", function () {
  kvImgNav.style.opacity = "1";
  jenerik.volume = 0.2;
});

menuBtn.addEventListener("click", function () {
    if (menuBar.style.display==="flex") {
        menuBar.style.display="none"
        sections.forEach((x) => (x.style.filter = "blur(0px)"));
        footer.style.filter = "blur(0px)";
        menuBtn.innerHTML=`<i class="fa-solid fa-bars"></i>`
    }
    else{
        menuBar.style.display = "flex";
        sections.forEach((x) => (x.style.filter = "blur(3px)"));
        footer.style.filter = "blur(3px)";
        menuBtn.textContent="←"
    }
});

play.addEventListener("click", function () {
  jenerik.play();
});

pause.addEventListener("click", function () {
  jenerik.pause();
});

heart.forEach((x) =>
  x.addEventListener("click", function () {
    x.classList.toggle("heart_red");
  })
);

izleBtn[0].addEventListener("click", function () {
  document.location = "https://www.youtube.com/watch?v=DkAHxvoA2Q8";
});

izleBtn[1].addEventListener("click", function () {
  document.location =
    "https://www.youtube.com/watch?v=c9YySJu39_k&pp=ygUTa3VydGxhciB2YWRpc2kgcHVzdQ%3D%3D";
});

tv[0].addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=L-HFu9bafas&pp=ygUVa3VydGxhciB2YWRpc2kgZ2xhZGlv"
  );
});

tv[1].addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=YMuqiqc0n2s&pp=ygUTa3VydGxhciB2YWRpc2kgaXJhbg%3D%3D"
  );
});

tv[2].addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=XS3UlcS1H_Y&pp=ygUXa3VydGxhciB2YWRpc2kgZmlsaXN0aW4%3D"
  );
});

tv[3].addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=1PcPUsU5z68&t=13s&pp=ygUVa3VydGxhciB2YWRpc2kgdGVyw7Zy"
  );
});

tv[4].addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=0253r8obEZg&pp=ygUUa3VydGxhciB2YWRpc2kgdmF0YW4%3D"
  );
});

tv[5].addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=YpAWoQadYns&pp=ygUEbXVybw%3D%3D"
  );
});

share[0].addEventListener("click", function () {
  navigator.share({
    title: "Kurtlar Vadisi Gladio",
    text: "Watch this movie",
    url: "https://www.youtube.com/watch?v=L-HFu9bafas&pp=ygUVa3VydGxhciB2YWRpc2kgZ2xhZGlv",
  });
});

share[1].addEventListener("click", function () {
  navigator.share({
    title: "Kurtlar Vadisi Irak",
    text: "Watch this movie",
    url: "https://www.youtube.com/watch?v=c9YySJu39_k&pp=ygUTa3VydGxhciB2YWRpc2kgcHVzdQ%3D%3D",
  });
});

share[2].addEventListener("click", function () {
  navigator.share({
    title: "Kurtlar Vadisi Filistin",
    text: "Watch this movie",
    url: "https://www.youtube.com/watch?v=L-HFu9bafas&pp=ygUVa3VydGxhciB2YWRpc2kgZ2xhZGlv",
  });
});

share[3].addEventListener("click", function () {
  navigator.share({
    title: "Kurtlar Vadisi Teror",
    text: "Watch this movie",
    url: "https://www.youtube.com/watch?v=1PcPUsU5z68&t=13s&pp=ygUVa3VydGxhciB2YWRpc2kgdGVyw7Zy",
  });
});

share[4].addEventListener("click", function () {
  navigator.share({
    title: "Kurtlar Vadisi Vatan",
    text: "Watch this movie",
    url: "https://www.youtube.com/watch?v=0253r8obEZg&pp=ygUUa3VydGxhciB2YWRpc2kgdmF0YW4%3D",
  });
});

share[5].addEventListener("click", function () {
  navigator.share({
    title: "Muro: Nalet Olsun İçimdeki İnsan Sevgisine",
    text: "Watch this movie",
    url: "https://www.youtube.com/watch?v=YpAWoQadYns&pp=ygUEbXVybw%3D%3D",
  });
});

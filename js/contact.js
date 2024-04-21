const kvImgNav = document.querySelector(".kv_navbar_logo ");
const menuBar = document.querySelector(".nav_list_ul");
const menuBtn = document.getElementById("btn");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const display=document.querySelector(".display")
const input=document.querySelector(".input")
const form=document.querySelector("form")

window.addEventListener("load", function () {
    kvImgNav.style.opacity = "1";
  })
  
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
input.addEventListener("change",function () {
    const reader=new FileReader()
    reader.readAsDataURL(input.files[0])
    reader.onload=()=>{
        display.style.backgroundImage=`url(${reader.result})`
    }
})
form.addEventListener("submit",function () {
    console.log(89318);
})
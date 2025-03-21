let nav = document.querySelector(".icon");
let icon2 = document.querySelector(".icon2");
let icon1 = document.querySelector(".icon1");
let side = document.querySelector(".side");
let bar = document.querySelector(".bar");
let cursor = document.querySelector(".cursor");
let sec_2 = document.querySelector(".sec-2");
let sec_1 = document.querySelector(".sec-1");
let sec_4 = document.querySelector(".sec-4");
var videos = document.querySelectorAll(".video");
let slider_6 = document.querySelector(".slider");
// let slider_7 = document.querySelector(".slider-7");
let sub = document.querySelector(".sub-slider");
let btn = document.querySelector(".sec-3-p");
let pic = document.querySelectorAll(".pic");
let anim = document.getElementById("anim");
let sec7 = document.querySelector(".sec-7");
let sec6 = document.querySelector(".sec-6");
let sec8 = document.querySelector(".sec-8");
let sec9 = document.querySelector(".sec-9");
let btn9 = document.querySelector(".btn-9");
let num = document.querySelector(".num");
let slider_8 = document.getElementById("slide-8");
let slider_7 = document.getElementById("anim");
let overlay = document.getElementById("over-lay");
console.log(slider_7);
var down = false
var active = 0; 
let moveX = 0; 

videos.forEach(function(video) {
    video.addEventListener("mouseenter", () => {
        video.play();
        cursor.classList.add("cursor-2");
        cursor.innerHTML = "Explore";
    });
    video.addEventListener("mouseleave", () => {
        video.pause();
        cursor.innerHTML = "";
        cursor.classList.remove("cursor-2");
    });
});

sec_2.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-2");
    cursor.innerHTML = '<i class="fa-solid fa-play"></i>';
});
sec_2.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-2");
    cursor.innerHTML = "";
});

sec_4.addEventListener("mouseenter", () => {
    cursor.style.background = "#fff";
});
sec_4.addEventListener("mouseleave", () => {
    cursor.style.background = "#000";
});

btn.addEventListener("mouseenter", () => {
    cursor.style.background = "#fff";
});
btn.addEventListener("mouseleave", () => {
    cursor.style.background = "#000";
});
sec6.addEventListener("mouseenter", () => {
    cursor.style.background = "#fff";
});
sec6.addEventListener("mouseleave", () => {
    cursor.style.background = "#000";
});

sec9.addEventListener("mouseenter", () => {
    cursor.style.background = "#fff";
});
sec9.addEventListener("mouseleave", () => {
    cursor.style.background = "#000";
});
btn9.addEventListener("mouseenter", () => {
    // cursor.style.background = "#000";
});
btn9.addEventListener("mouseleave", () => {
    cursor.style.background = "#fff";
});

slider_6.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-2");
    cursor.innerHTML = "Drag";
});
slider_6.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    cursor.classList.remove("cursor-2");
});
let drag = false;
let startX
let scrollLeft;
slider_6.addEventListener('mousedown', (e) => {
  drag = true;
  startX = e.pageX - slider_6.offsetLeft;
  scrollLeft = slider_6.scrollLeft;
});

slider_6.addEventListener('mouseleave', () => {
  drag = false;
});

slider_6.addEventListener('mouseup', () => {
  drag = false;
});

slider_6.addEventListener('mousemove', (e) => {
  if (drag){
  e.preventDefault();
  const x = e.pageX - slider_6.offsetLeft;
  const walk = x - startX; 
  slider_6.scrollLeft = scrollLeft - walk;
  }
});







sec8.addEventListener('mousedown', (e) => {
    drag = true;
    startX = e.pageX - sec8.offsetLeft;
    scrollLeft = sec8.scrollLeft;
  });
  
  sec8.addEventListener('mouseleave', () => {
    drag = false;
  });
  
  sec8.addEventListener('mouseup', () => {
    drag = false;
  });
  
  sec8.addEventListener('mousemove', (e) => {
    if (drag){
    e.preventDefault();
    const x = e.pageX - sec8.offsetLeft;
    const walk = x - startX; 
    sec8.scrollLeft = scrollLeft - walk;
    }
  });



  
  bar.addEventListener("mouseenter", () => {
      cursor.classList.toggle("cusorbig")
      cursor.style.Zindex = "-111"
      icon1.style.background = "white"
      icon2.style.background = "white"
   
  });
  bar.addEventListener("mouseleave", () => {
    icon1.style.background = "#000"
    icon2.style.background = "#000"
  });
nav.addEventListener("click", (event) => {
    side.classList.toggle("open");
    icon2.classList.toggle("icon22")
    icon1.classList.toggle("icon11")
    overlay.classList.toggle("color")
});

window.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
        side.classList.remove("open");
        overlay.classList.remove("color");
    }
});
window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const slidePosition = (scrollPosition / 9300)*200;
    slider_7.style.transform = `translateX(-${slidePosition}%)`; 
  });

window.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

const scrollbox = document.querySelectorAll(".scroll_animation");
const scrollbox2 = document.querySelectorAll(".scroll_animation_2");

window.addEventListener("scroll", animation);

function animation() {
  const triggerBottom = window.innerHeight;

  scrollbox.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;
    const boxHeight = box.getBoundingClientRect().height;
    console.log({ box, boxTop });

    if (boxTop < triggerBottom && boxTop > -boxHeight) {
      //tilføj class til fade in
      console.log("animation start");
      box.classList.add("fade_in");
    }
    if (boxBottom < 100 || boxTop > triggerBottom) {
      console.log("animation fjern");
      box.classList.remove("fade_in");
    }
  });
}

// const links = document.querySelectorAll(".menu li a");
// const currentUrl = window.location.pathname;

// links.forEach((link) => {
//   if (link.getAttribute("href") === currentUrl) {
//     link.classList.add("current_page");
//   }
// });

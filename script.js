var swiper = new Swiper(".heroSwiper", {
  autoplay: {
    delay: 5000, // Затримка між слайдами (3 секунди)
    disableOnInteraction: false, // Автопрокрутка не припиняється при взаємодії з слайдером
  },
  loop: true, // Безкінечне прокручування (слайдер буде повертатися до першого слайду після останнього)
  speed: 2000, // Швидкість переходу між слайдами (1 секунда)
  effect: "fade", // Ефект переходу (згасання)
  allowTouchMove: false, // Забороняє взаємодію через мишу або торкання
});

document.querySelector(".to-book-btn").addEventListener("click", function () {
  // Прокрутка до форми
  const formElement = document.getElementById("form");
  formElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/////

const track = document.querySelector(".logos__track");

let clone1 = track.innerHTML;
track.innerHTML += clone1;

let start = 0;
const speed = 0.25;
const trackWidth = track.offsetWidth / 1;

function scroll() {
  start -= speed;
  if (start <= -trackWidth) {
    start = 0;
  }
  track.style.transform = `translateX(${start}px)`;
  track.style.transition = "transform 0s linear";

  requestAnimationFrame(scroll);
}

scroll();

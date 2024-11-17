var swiper = new Swiper(".heroSwiper", {
  autoplay: {
    delay: 4000, // Затримка між слайдами (3 секунди)
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

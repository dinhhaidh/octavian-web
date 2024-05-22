document.addEventListener("DOMContentLoaded", function () {
  const menuOpen = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  if (!menuOpen || !menu) return;
  menuOpen.addEventListener("click", function () {
    menu.classList.add("is-active");
  });
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
      menu.classList.remove("is-active");
    }
  });
});
// const scroller = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2500,
  delay: 300,
  // reset: true
})
sr.reveal(`.about-content,.hero-video`) //hiệu ứng dưới lên trên
sr.reveal(`.`, {delay: 500}) //hiệu ứng trên xuống
sr.reveal(`.work-item,.partner-item,.feature-item`, {delay: 500, interval: 100}) //hiệu ứng trên xuống dần dần
sr.reveal(`.hero-caption,.experience-content`,{origin: 'right'})
sr.reveal(`.hero-heading,.experience-number`,{origin: 'left'})
sr.reveal(`.about-image,.review-item, .contact-main,.footer-main,.footer-rocket,.footer-container`,{origin: 'bottom'})
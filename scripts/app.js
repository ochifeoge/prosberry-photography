let tl = gsap.timeline();

tl.from(".logo", { duration: 1.5, scale: 1.5, x: "-50%", ease: "power4" });
/* tl.from(".menu", { duration: 1.5, scale: 1.5, x: "50%", opacity: 0 }); */

//MENU

const bar = document.querySelector(".js-hamburger");
const menu = document.querySelector(".js-menu");
const close = document.querySelector(".js-close");

/* INCREMENT ANIMATION EFFECT */

bar.addEventListener("click", () => {
  menu.classList.add("active");
});
close.addEventListener("click", () => {
  menu.classList.remove("active");
});

// responsible for updating the count from 0 t0 targer number
function updateCount(startNum, targetNum) {
  let currentNum = +startNum.innerText;
  if (currentNum < targetNum) {
    startNum.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(startNum, targetNum);
    }, 12);
  }
}

const xp = document.querySelectorAll(".number-count");

let play = false;
function increamentAnimation() {
  play = true;
  xp.forEach((mentee) => {
    const target = +mentee.dataset.targetNumber;

    setTimeout(() => {
      updateCount(mentee, target);
    }, 1000);
  });
}
increamentAnimation();

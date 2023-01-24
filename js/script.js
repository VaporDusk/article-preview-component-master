const text = document.querySelector(".article-text");
const staticFooter = document.querySelector(".article-footer-static");
const activeFooter = document.querySelector(".article-footer-active");
const share = document.querySelector(".article-footer-share");
const shareIcon = document.querySelector(".article-footer-share-icon");

share.addEventListener("click", changeState);
window.addEventListener('resize', function () {
  window.location.reload(); 
});

let state = "inActive";

function changeState() {
  if (state == "inActive") {
    if (window.innerWidth >= 1440) {
      activeFooter.style.display = "block";
      text.style.margin = "0";
      share.style.bottom = "2.25rem"
    } else if (window.innerWidth >= 375) {
      staticFooter.style.display = "none";
      activeFooter.style.display = "flex";
      text.style.margin = "0 2rem 1.25rem";
      share.style.bottom = "1rem"
    };
    share.style.background = "hsl(214, 17%, 51%)";
    shareIcon.src = "images/icon-share-active.svg";
    state = "active";
  } else {
    if (window.innerWidth >= 1440) {
      activeFooter.style.display = "none";
      text.style.margin = "0";
      share.style.bottom = "2.25rem"
    } else if (window.innerWidth >= 375) {
      staticFooter.style.display = "flex";
      activeFooter.style.display = "none";
      text.style.margin = "0 2rem 2rem";
      share.style.bottom = "1.5rem"
    };
    share.style.background = "hsl(210, 46%, 95%)";
    shareIcon.src = "images/icon-share.svg";
    state = "inActive";
  };
};
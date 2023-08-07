// The aim is the the scroll fucntion

(function () {
  "use strict";

  // getting all the header link
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (eachLink) {
    eachLink.addEventListener("click", smoothscroll);
  });
  // this is the smooth scroll fucntion that when each of the navigation is clicked
  function smoothscroll(event) {
    event.preventDefault();
    // getting the href attribute of the navbar
    const targetID = event.target.getAttribute("href");

    const targetSection = document.querySelector(targetID);

    const originalTop = Math.floor(
      targetSection.getBoundingClientRect().top - 60
    );

    window.scrollBy({
      top: originalTop,
      left: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("load", function () {
    const posts = document.querySelectorAll("section");

    let postTops = [];
    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    resetPageposition();

    this.window.addEventListener("scroll", function () {
      pageTop = window.pageYOffset + 250;

      if (pageTop > postTops[counter]) {
        counter++;
        console.log(`scrolling down ${counter}`);
      }
    });
  });

  function resetPageposition() {
    postTops = [];
    posts.forEach(function (post) {
      postTops.push(
        Math.floor(post.getBoundingClientRect().top + this.window.pageYOffset)
      );
    });
  }
})();

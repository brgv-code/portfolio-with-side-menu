$(document).ready(function (e) {
  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  $link = $(".nav-item");
  var width = $navbar.width();
  toggle_onclick($win, $navbar, width);

  //resize event when the window resize happens , the transition should be responsive
  $win.resize(function () {
    toggle_onclick($win, $navbar, width);
  });
  $toggle.click(function (e) {
    $navbar.toggleClass("toggle-left");
  });
});

function toggle_onclick($win, $navbar, width) {
  if ($win.width() < 768) {
    $link.click(function (e) {
      $navbar.toggleClass("toggle-left");
    });
    $navbar.css({ left: "-200px" });
    // $navbar.css({left:`-$(width)px`});
  } else {
    $navbar.css({ left: "0px" });
  }
}

var typed = new Typed("#typed", {
  strings: ["Student", "Web Developer", "Photographer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

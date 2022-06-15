//  ###(owl-carousel)###
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
//  end owl-carousel####################

// start last pic cart
document.getElementById("pic1_inLastCart").onmouseover = function () {
  document.getElementById("pic1_inLastCart").src =
    "img/aenean-quis-diam (1).jpg";
};
document.getElementById("pic1_inLastCart").onmouseout = function () {
  document.getElementById("pic1_inLastCart").src = "img/aenean-quis-diam.jpg";
};

document.getElementById("pic2_inLastCart").onmouseover = function () {
  document.getElementById("pic2_inLastCart").src =
    "img/sed-viverra-felis(1).jpg";
};
document.getElementById("pic2_inLastCart").onmouseout = function () {
  document.getElementById("pic2_inLastCart").src = "img/sed-viverra-felis.jpg";
};

document.getElementById("pic3_inLastCart").onmouseover = function () {
  document.getElementById("pic3_inLastCart").src =
    "img/duis-placerat-eu(1).jpg";
};
document.getElementById("pic3_inLastCart").onmouseout = function () {
  document.getElementById("pic3_inLastCart").src = "img/duis-placerat-eu.jpg";
};

document.getElementById("pic4_inLastCart").onmouseover = function () {
  document.getElementById("pic4_inLastCart").src = "img/morbi-vitae-mi(1).jpg";
};
document.getElementById("pic4_inLastCart").onmouseout = function () {
  document.getElementById("pic4_inLastCart").src = "img/morbi-vitae-mi.jpg";
};
//  end last pic cart####################

// start hide and show header && btn go to top

var prevScrollpos = window.pageYOffset;
var headerDiv = document.querySelector(".header");
var myUpBtn = document.getElementById("goUp");

window.onscroll = function () {
  // btn Up Top
  if (window.pageYOffset >= 520) {
    myUpBtn.style.display = "block";
  } else {
    myUpBtn.style.display = "none";
  }
  // header scroll

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos <= currentScrollPos) {
    headerDiv.classList.remove("fixedToTop");
    headerDiv.style.top = "-7.2rem";
  } else {
    headerDiv.classList.add("fixedToTop");
    headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
};

myUpBtn.onclick = function () {
  window.scrollTo(0, 0);
};

// end hide and show header  ####################

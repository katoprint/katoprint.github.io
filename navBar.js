window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navBar").style.padding = "2px 2px";
  } else {
    document.getElementById("navBar").style.padding = "8px 8px";
  }
}
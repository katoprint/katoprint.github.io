window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navBar").style.padding = "10px 10px";
  } else {
    document.getElementById("navBar").style.padding = "20px 10px";
  }
}
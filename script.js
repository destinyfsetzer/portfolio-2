// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
$(window).scroll(function () {
  $(".top").css("opacity", 1 - $(window).scrollTop() / 50);
});

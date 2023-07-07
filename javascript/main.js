var elchangeaddnav=document.querySelector(".site-main__burger-btn");
elchangeaddnav.addEventListener("click", function(){
  document.body.classList.add("active");
})
var elchangeremovenav=document.querySelector(".hide-navbar__btn");
elchangeremovenav.addEventListener("click", function(){
  document.body.classList.remove("active");
})


var elchangeherobg=document.querySelector(".site-main__btn");
elchangeherobg.addEventListener("click", function(){
  document.body.classList.toggle("dark");
  document.body.classList.toggle("bg");
  document.body.classList.toggle("h");

})
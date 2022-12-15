// header js
document.querySelector(".hambuger").addEventListener("click", () => {
  $(".hambuger").toggleClass("is-active");
  document.querySelector(".menu_list").classList.toggle("menu_list--animate");
});

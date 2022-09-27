const hamberger = document.querySelector(".hamberger i")
const mobile_menu = document.querySelector(".hamberger_sub")
function handleMenuClick() {
  mobile_menu.classList.toggle("clicked")
}
hamberger.addEventListener("click", handleMenuClick)

function closeMenu(e) {
  const elems = e.target
  if (elems !== hamberger) {
    mobile_menu.classList.remove("clicked")
  }
}
window.addEventListener("click", closeMenu)

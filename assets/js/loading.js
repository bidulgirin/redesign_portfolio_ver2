//scroll lock
const loader = document.querySelector("#loading_wrap")
const loader_wrap = document.querySelector("#container")
/**
 * 휠 못하게
 */
loader.addEventListener("wheel", preventScroll, { passive: false })

function preventScroll(e) {
  e.preventDefault()
  e.stopPropagation()

  return false
}
function byeloader() {
  loader.style.display = "none"
}
window.onload = function () {
  setTimeout(function () {
    var t = performance.timing.loadEventEnd - performance.timing.responseEnd
    console.log(t)
  }, 0)
}
setTimeout(byeloader, 1800)

let headerNavi = document.querySelector("#header")

headerNavi.style.opacity = 0
headerNavi.style.transition = "all 0.2s"
window.addEventListener("scroll", function () {
  let pageScroll = window.scrollY
  if (pageScroll > 400) {
    headerNavi.style.opacity = 1
  } else {
    headerNavi.style.opacity = 0
  }
})

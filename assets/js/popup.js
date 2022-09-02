var target = document.querySelectorAll(".btn_open")
var btnPopClose = document.querySelectorAll(".btn_close")

var targetID
function popup(e) {
  for (var i = 0; i < target.length; i++) {
    target[i].addEventListener("click", function () {
      targetID = this.getAttribute("href") //#pop1
      console.log(document.querySelector(targetID))
      document.querySelector(targetID).style.display = "block"
    })
  }

  // 팝업 닫기
  for (var j = 0; j < target.length; j++) {
    btnPopClose[j].addEventListener("click", function () {
      this.parentNode.parentNode.style.display = "none"
    })
  }
}
// 팝업 열기

popup()

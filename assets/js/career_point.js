let stage = document.querySelector("#carr_wrap")
let carr_point = document.querySelector(".carr_point")

//따라오는 마우스 설정
let mouseX = 0
let mouseY = 0
//마우스가 움직이면
carr_point.style.display = "none"
stage.addEventListener("mousemove", function (e) {
  let stageHeight = document.querySelector("#carr_wrap").clientHeight
  let x = e.clientX //clientX 는 브라우저 화면 기준이므로 현재 페이지에서 사용하기 부적절함
  let y = e.pageY

  //console.log(stageHeight)
  //마우스 커서위치 정하기
  carr_point.style.display = "block"
  carr_point.style.top = mouseY + "px"

  //따라오는 원위치
  mouseX = e.pageX
  mouseY = e.pageY - 1
})

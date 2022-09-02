// window.onload = function () {
//   const options = {
//     root: null, // 타겟의 가시성을 검사하기 위해 뷰포트 대신 사용할 요소 객체(루트 요소)를 지정
//     //기본값은 null
//     rootMargin: "0px", //Root 범위를 확장하거나 축소함 px등의 단위를 꼭 입력해야함
//     threshold: 0.9, //옵저버가 실행되기 위해 타겟의 가시성이 얼마나 필요한지 백분율로 표시
//     // 쉽게 말해서 타겟이 얼마나 뷰포트에 보이는지 에 따라 이벤트를 할지 말지 설정가능
//   }

//   const observer = new IntersectionObserver((entries) => {
//     //console.log(observer) // 인스턴스가 궁금하다! log 찍어보자
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         /*
//                         entries에 forEach로 배열에 접근해서
//                         entry.isIntersecting -> 확인함
//                         교차하면 entry의 그 대상에다가 active class를 추가시켜라

//                         */
//         entry.target.classList.add("show_egg")
//       } else {
//         entry.target.classList.remove("show_egg")
//       }
//     })
//   }, options)

//   // 주시 대상 선언, 주시 시작
//   const egg_list = document.querySelectorAll(".egg")
//   // 반복문을 돌려 모든 DOM에 적용
//   /* 여기서 el은 루트 내에서의 가시성 변화를 감지할 element 임 */
//   egg_list.forEach((el) => observer.observe(el))
// }

function click_egg() {
  let egg = document.querySelector(".egg")
  let egg_img = document.querySelector(".egg > img")
  let itd = document.querySelectorAll(".itd")
  const itd_background = document.querySelector(".itd_background")
  const itd_wrap = document.querySelector("#itd_wrap")
  const itd_contents = document.querySelector(".itd_contents")
  let screenWidth = window.innerWidth
  let screenHeight = window.innerHeight
  const itd_title = document.querySelector(".itd_title")
  const itd_sub_title = document.querySelector(".itd_sub_title")
  /*querySelectAll 은 nodeLIst라는 객체로 내보냄
  getElementsByClassName은 htmlCollection 이라는 인터페이스를 내보냄 
  https://imkh.dev/js-nodelist-to-array/ 참고
  */

  egg_img.classList.add("break")

  //1초 뒤에
  setTimeout(function () {
    itd_wrap.style.height = "auto"
    itd_background.classList.add("down_element_ani")
    itd_contents.classList.add("loading_animation")
    itd_title.style.color = "rgb(255, 196, 48)"
    itd_sub_title.style.color = "white"
    //foreach 로 배열에 한번에 적용 for문으로 생겼던 오류도 해결!
    itd.forEach((itd) => (itd.style.display = "block"))

    egg.style.display = "none"
  }, 1000)
}

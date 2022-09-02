/*
          Intersection Observer 화면에 보이냐 안보이냐 구별하는 기능임
          new IntersectionObserver() 으로 불러와서 2개의 인수(entries, observer)를 가짐
  
          첫번째 인수인 entries 에는 인스턴스의 배열임 
          두번째 인수인 observer에는 콜백이 실행되는 해당 인스턴스를 참조함
          
  
          */

//

window.onload = function () {
  const options = {
    root: null, // 타겟의 가시성을 검사하기 위해 뷰포트 대신 사용할 요소 객체(루트 요소)를 지정
    //기본값은 null
    rootMargin: "0px", //Root 범위를 확장하거나 축소함 px등의 단위를 꼭 입력해야함
    threshold: 0.6, //옵저버가 실행되기 위해 타겟의 가시성이 얼마나 필요한지 백분율로 표시
    // 쉽게 말해서 타겟이 얼마나 뷰포트에 보이는지 에 따라 이벤트를 할지 말지 설정가능
  }

  const observer = new IntersectionObserver((entries) => {
    //console.log(observer) // 인스턴스가 궁금하다! log 찍어보자
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        /*
                      entries에 forEach로 배열에 접근해서 
                      entry.isIntersecting -> 확인함
                      교차하면 entry의 그 대상에다가 active class를 추가시켜라
                      
                      */
        entry.target.classList.add("active")
      } else {
        entry.target.classList.remove("active")
      }
    })
  }, options)

  // 주시 대상 선언, 주시 시작
  const boxList = document.querySelectorAll(".itd")
  // 반복문을 돌려 모든 DOM에 적용
  /* 여기서 el은 루트 내에서의 가시성 변화를 감지할 element 임 */
  boxList.forEach((el) => observer.observe(el))
}

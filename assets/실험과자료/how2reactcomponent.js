import React, { Component } from "react"
// 리액트로 변경하는 연습
export default class App extends Component {
  state = {
    siteData: [
      {
        id: 1,
        imgSrc: "./assets/img/homepage/diteLive.png",
        url: "./assets/homepage/dietlife/index.html",
        title: "다이어트라이브",
        alt: "사이트 : 다이어트 라이브",
        skill: "HTML, CSS, JavaScript, AOS.js",
        des: `제작기간:2021.11.14 - 2021.1.07 <br />
        일러스트, 상세페이지 디자인 작업 회원가입, 로그인 및 게시판 기능 추가<br /> 
        느낀점 : 기획단계에서 디자인 및 설계 체계적인 설정이 아쉬움 <br />
        배운것 : SEO 작업(robot.txt, sitemap.xml, 네이버 서치어드바이저, Rss) 
        ",
        `,
      },
      {
        id: 2,
        imgSrc: "./assets/img/webpages/how2.PNG",
        url: "https://www.how2youtube.com/",
        title: "하우투 유튜브",
        alt: "사이트 : 하우투 유튜브",
        skill: "HTML, CSS, JavaScript, AOS.js",
        des: `외부 템플릿 디자인 변형 및 리디자인<br />
        PHP를 이용 재사용성을 높힘<br />
        배운것: Ajax 비동기식 웹페이지 작동원리,<br /> 
        PHP로 컴포넌트 단위로 만들기, Mysql 테이블 데이터 입력방법`,
      },
      {
        id: 3,
        imgSrc: "./assets/img/webpages/youtubeclass.PNG",
        url: "http://youtubeclass.co.kr//index_mobile.php",
        title: "유튜브 클래스",
        alt: "사이트 : 유튜브 클래스",
        skill: "HTML, CSS, JavaScript, Php",
        des: ` - 유튜버가 되고 싶은 사람들을 위한 컨설팅 강의 사이트<br />
        - 느낀점: 반응형이 없었을때는 폴더를 각각 따로 만들어 기기에 맞춰 경로를 리다이렉션하는 구조 파악.<br />
        - PC와 MOBILE 파일이 나누어져있음 수정할 때 2번 수정해야하는 번거로움 존재<br />`,
      },
      {
        id: 4,
        imgSrc: "./assets/img/webpages/test.PNG",
        url: "http://ytbtest.kr/",
        title: "유튜버적성테스트(MBTI 테스트)",
        alt: "사이트 : 유튜버적성테스트(MBTI 테스트)",
        skill: "HTML, CSS, JavaScript, Php",
        des: `- 아이디어 기획을 받아 코드는 하루작성 일러스트 3일<br />
        - 알코딩 강의를 클론 코딩한 사이트<br />
        - 일러스트 본인 작품<br />
        - 유튜브클래스 강의 홍보용 사이트<br />
        - 4지선다형으로 클릭하는 버튼에따라 점수를 달리하여 결과 조건에 맞는 MBTI가 나오는 원리`,
      },
    ],
  }

  render() {
    return (
      <div id="carr_wrap">
        <h2 className="carr_title">
          경력사항
          <span>2020.11 ~ 2021.06 하우투</span>
        </h2>
        <div className="carr_contents">
          {/*같은 양식이 돌면서 나열될것임*/}
          {this.state.siteData.map((data) => (
            <div className="carr">
              <div className="carr_img">
                <img src={data.imgSrc} alt={data.alt} />
                <div className="carr_site">
                  <a href={data.url}>사이트 보러가기</a>
                </div>
              </div>
              <div>
                <p className="carr_sub_title">{data.title}</p>
                <p> 사용된기술 : {data.skill}</p>
                <p className="carr_des">{data.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

//1. 첫번째 빼고 모두 사라지게 해라
//2. 두번째 element가 window top:0이 닿으면 첫번째사진이 없어지고 그다음 요소가 나타난다
//내가 알고있는  jquery 로 코드를 짠다면...

$(document).ready(function(){
        $(window).scroll(function(){ // 다 ~~~ㅎ헛짓거리했다~~

            
            let windowTop = $(this).scrollTop()
            let windowHeight = $(window).height()
            let documentHeight = $(document).height()
            //let elementTop = $('.mypoint div').scrollTop();
            let elementHeight = $('.mypoint div').offsetHeight

            //스크롤 얼마나 했는지 보여주는 코드
            let height = document.getElementById('height')
            height.innerHTML=windowTop;

            
           //mypoint의 상대위치 구하기
            
            const two = document.getElementById('mypoint2');
           
            
            //const  mypoint1Top = mypoint1.getBoundingClientRect().bottom; 
            // getBoundingClientRect는 id값만 취급하는구나!
            
            

            // const one = document.getElementById('mypoint2');
            // // const element = [one.scrollHeight - one.scrollTop === one.clientHeight];
            // console.log(one.clientHeight);
            // one.style.color = "red";
            // let myPointTop = one.scrollTop;
            // let myPointClient = one.clientHeight;
            // let oneB = one.getBoundingClientRect().bottom;
            // if(element == true){
                
            //     $('.on').attr("src","http://placekitten.com/300/300");
               
            // }
           
          
            
            
            
        });
        
      
       
    
    
    
});



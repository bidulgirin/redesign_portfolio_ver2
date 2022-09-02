
		
    $(document).ready(function(){ 
            
            //초기값 설정 
            /* $(".pic ul li").fadeOut();
                $(.pic ul li:nth-child(1)).fadeIn();
                
             */
            
            $(".pic>ul>li:nth-child(2)").hide();
            $(".pic>ul>li:nth-child(3)").hide();
            $(".pic>ul>li:nth-child(4)").hide();
            $(".pic>ul>li:nth-child(5)").hide();
        
        $(".button ul li:nth-child(1)").click(function(){
            $(".pic>ul>li:nth-child(1)").fadeIn(500);
            $(".pic>ul>li:nth-child(2)").fadeOut(500);
            $(".pic>ul>li:nth-child(3)").fadeOut(500);
            $(".pic>ul>li:nth-child(4)").fadeOut(500);
            $(".pic>ul>li:nth-child(5)").fadeOut(500);
            
            $(".button>ul>li").removeClass("on1");
            $(".button>ul>li:nth-child(1)").addClass("on1");
        });
        
        $(".button ul li:nth-child(2)").click(function(){
            $(".pic>ul>li:nth-child(2)").fadeIn(500);
            $(".pic>ul>li:nth-child(1)").fadeOut(500);
            $(".pic>ul>li:nth-child(3)").fadeOut(500);
            $(".pic>ul>li:nth-child(4)").fadeOut(500);
            $(".pic>ul>li:nth-child(5)").fadeOut(500);
            $(".button>ul>li").removeClass("on1");

            $(".button>ul>li:nth-child(2)").addClass("on1");
            
        });
        
        $(".button ul li:nth-child(3)").click(function(){
            $(".pic>ul>li:nth-child(3)").fadeIn(500);
            $(".pic>ul>li:nth-child(1)").fadeOut(500);
            $(".pic>ul>li:nth-child(2)").fadeOut(500);
            $(".pic>ul>li:nth-child(4)").fadeOut(500);
            $(".pic>ul>li:nth-child(5)").fadeOut(500);
            $(".button>ul>li").removeClass("on1");
            $(".button>ul>li:nth-child(3)").addClass("on1");
        });
        
        $(".button ul li:nth-child(4)").click(function(){
            $(".pic>ul>li:nth-child(4)").fadeIn(500);
            $(".pic>ul>li:nth-child(1)").fadeOut(500);
            $(".pic>ul>li:nth-child(2)").fadeOut(500);
            $(".pic>ul>li:nth-child(3)").fadeOut(500);
            $(".pic>ul>li:nth-child(5)").fadeOut(500);
            $(".button>ul>li").removeClass("on1");
            $(".button>ul>li:nth-child(4)").addClass("on1");
        });
        $(".button ul li:nth-child(5)").click(function(){
            $(".pic>ul>li:nth-child(5)").fadeIn(500);
            $(".pic>ul>li:nth-child(1)").fadeOut(500);
            $(".pic>ul>li:nth-child(2)").fadeOut(500);
            $(".pic>ul>li:nth-child(3)").fadeOut(500);
            $(".pic>ul>li:nth-child(4)").fadeOut(500);
            $(".button>ul>li").removeClass("on1");
            $(".button>ul>li:nth-child(5)").addClass("on1");
        });
    
    });

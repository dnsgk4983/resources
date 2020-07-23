$(function(){
    $('#header>.nav_wrapper>.gnb>ul>li').mouseenter(function(){
        $('.gnb_bg').css("display","block");
        $('.sub_menu_wrap').css("borderTop","1px solid #e2e2e2");
    });
    $('#header>.nav_wrapper>.gnb>ul>li').mouseleave(function(){
        $('.gnb_bg').css("display","none");
        $(".sub_menu_wrap").css("borderTop","none");
    });
});


// $(function(){
//     $('#header').mouseenter(function(){
//         $('.sub_menu_wrap .sub_nav_calamity').css("display","flex");
//     });
//     $('#header').mouseleave(function(){
//         $('.sub_menu_wrap .sub_nav_calamity').css("display","none");
//     });
// });
$(function(){
    $('.gnb>ul>li:nth-child(1)').mouseenter(function(){
        $('.sub_menu_wrap .sub_nav_calamity').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(1)').mouseleave(function(){
        $('.sub_menu_wrap .sub_nav_calamity').css("display","none");
    });

    $('.gnb>ul>li:nth-child(2)>a').mouseenter(function(){
        $('.sub_menu_wrap .sub_nav_weather').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(2)').mouseleave(function(){
        $('.sub_menu_wrap .sub_nav_weather').css("display","none");
    });

    $('.gnb>ul>li:nth-child(3)>a').mouseenter(function(){
        $('.sub_menu_wrap .sub_nav_safety').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(3)').mouseleave(function(){
        $('.sub_menu_wrap .sub_nav_safety').css("display","none");
    });

    $('.gnb>ul>li:nth-child(4)>a').mouseenter(function(){
        $('.sub_menu_wrap .sub_nav_information').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(4)').mouseleave(function(){
        $('.sub_menu_wrap .sub_nav_information').css("display","none");
    });

    $('.gnb>ul>li:nth-child(5)>a').mouseenter(function(){
        $('.sub_menu_wrap .sub_nav_board').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(5)').mouseleave(function(){
        $('.sub_menu_wrap .sub_nav_board').css("display","none");
    });

    $('.gnb>ul>li:nth-child(6)>a').mouseenter(function(){
        $('.sub_menu_wrap .sub_nav_manager').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(6)').mouseleave(function(){
        $('.sub_menu_wrap .sub_nav_manager').css("display","none");
    });
});
// calamity area javascript
$(function(){
    $(".sub01>li:first-child").mouseenter(function(){
        $('.main-icon-1 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub01>li").mouseleave(function(){
        $('.main-icon-1 img').animate({marginTop:"0"},100);
    });
    $(".sub01>li:nth-child(2)").mouseenter(function(){
        $('.main-icon-2 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub01>li").mouseleave(function(){
        $('.main-icon-2 img').animate({marginTop:"0"},100);
    });
    $(".sub01>li:nth-child(3)").mouseenter(function(){
        $('.main-icon-3 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub01>li").mouseleave(function(){
        $('.main-icon-3 img').animate({marginTop:"0"},100);
    });
    $(".sub01>li:nth-child(4)").mouseenter(function(){
        $('.main-icon-4 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub01>li").mouseleave(function(){
        $('.main-icon-4 img').animate({marginTop:"0"},100);
    });
    $(".sub01>li:nth-child(5)").mouseenter(function(){
        $('.main-icon-a img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub01>li").mouseleave(function(){
        $('.main-icon-a img').animate({marginTop:"0"},100);
    });

    $(".sub02>li:nth-child(1)").mouseenter(function(){
        $('.main-icon-b img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub02>li").mouseleave(function(){
        $('.main-icon-b img').animate({marginTop:"0"},100);
    });
    $(".sub02>li:nth-child(2)").mouseenter(function(){
        $('.main-icon-5 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub02>li").mouseleave(function(){
        $('.main-icon-5 img').animate({marginTop:"0"},100);
    });
    $(".sub02>li:nth-child(3)").mouseenter(function(){
        $('.main-icon-6 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub02>li").mouseleave(function(){
        $('.main-icon-6 img').animate({marginTop:"0"},100);
    });

    $(".sub03>li:nth-child(1)").mouseenter(function(){
        $('.main-icon-7 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub03>li").mouseleave(function(){
        $('.main-icon-7 img').animate({marginTop:"0"},100);
    });
    $(".sub03>li:nth-child(2)").mouseenter(function(){
        $('.main-icon-8 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub03>li").mouseleave(function(){
        $('.main-icon-8 img').animate({marginTop:"0"},100);
    });
    $(".sub03>li:nth-child(3)").mouseenter(function(){
        $('.main-icon-9 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub03>li").mouseleave(function(){
        $('.main-icon-9 img').animate({marginTop:"0"},100);
    });
    $(".sub03>li:nth-child(4)").mouseenter(function(){
        $('.main-icon-10 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub03>li").mouseleave(function(){
        $('.main-icon-10 img').animate({marginTop:"0"},100);
    });

    $(".sub04>li:nth-child(1)").mouseenter(function(){
        $('.main-icon-11 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub04>li").mouseleave(function(){
        $('.main-icon-11 img').animate({marginTop:"0"},100);
    });
    $(".sub04>li:nth-child(2)").mouseenter(function(){
        $('.main-icon-12 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub04>li").mouseleave(function(){
        $('.main-icon-12 img').animate({marginTop:"0"},100);
    });
    $(".sub04>li:nth-child(3)").mouseenter(function(){
        $('.main-icon-13 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub04>li").mouseleave(function(){
        $('.main-icon-13 img').animate({marginTop:"0"},100);
    });

    $(".sub05>li:nth-child(1)").mouseenter(function(){
        $('.main-icon-14 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub05>li").mouseleave(function(){
        $('.main-icon-14 img').animate({marginTop:"0"},100);
    });
    $(".sub05>li:nth-child(2)").mouseenter(function(){
        $('.main-icon-15 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub05>li").mouseleave(function(){
        $('.main-icon-15 img').animate({marginTop:"0"},100);
    });
    $(".sub05>li:nth-child(3)").mouseenter(function(){
        $('.main-icon-16 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub05>li").mouseleave(function(){
        $('.main-icon-16 img').animate({marginTop:"0"},100);
    });
});
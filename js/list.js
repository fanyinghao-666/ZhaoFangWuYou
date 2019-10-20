$(function(){
    //显示二级菜单
    $(".nav-list").on("click",".nav-list>li",function(){
        var index=$(this).index();
        $(".nav-list").addClass('tab');
        $(".bg").show(); 
        $(this).addClass("active").siblings().removeClass("active");
        $(".two-nav>li").addClass('hide');
        $(".two-nav>li").eq(index).removeClass('hide');
    })

    //二级菜单里面的点击事件
    $('.two-nav').on("click",'.two-nav>.list1>div>span',function(){
        $(this).css("color","#ff8a00");
        $(this).siblings().css("color","");
    })
    $('.two-nav').on("click",'.two-nav>.list3>p',function(){
        var index=$(this).index();
        console.log(index);
        $(this).toggleClass('active');   
    })
    $('.two-nav').on("click",'.two-nav>.list4>.kuai span',function(){
        console.log($(this).text());
        $(this).toggleClass('active');
    })
    //退出二级菜单
    $('.bg').on("click",function(){
        $(".nav-list").removeClass('tab');
        $(".nav-list").find('li').removeClass("active")
        $(".bg").hide();
        $(".two-nav>li").addClass('hide'); 
    })
})
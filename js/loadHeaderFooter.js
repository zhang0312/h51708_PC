// 定义模块，加载头部尾部
define(["jquery", "cookie"], function($){
    /*$(".header").load("/html/include/header.html");*/
    $.ajax("/html/include/header.html").done(function(data){
        // 将加载的头部静态资源添加到 .header 盒子中
        // $(data).appendTo(".header");
        $(".header").html(data);
    }).done(function(){
        var user=$.cookie("login_user");
        if(user)
            $(".login_reg").html(`欢迎您:<a href="#">${user}</a>`);
    });

    $(".footer").load("/html/include/footer.html");
});
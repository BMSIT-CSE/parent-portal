$(document).ready(function(){
    condole.log("Hi");
    $('.proctor_login_link').click(function(){
        $('#parent_login_form').hide();
        $('#password_reset_form').hide();
        $('#proctor_login_form').show();
        return false;
    });
    $('.parent_login_link').click(function(){
        $('#proctor_login_form').hide();
        $('#password_reset_form').hide();
        $('#parent_login_form').show();
        return false;
    });
    $('.password_reset_link').click(function(){
        $('#proctor_login_form').hide();
        $('#parent_login_form').hide();
        $('#password_reset_form').show();
        return false;
    });

    $(".nav_link").click(function(){
        var clicked = "#" + this.id.split('__')[0];
        console.log(clicked);
        $('html, body').animate({
                scrollTop: ($(clicked).offset().top)-50
        }, 500);
        return false;
    });
    $(document).scroll(function(){
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 68){
            $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
        }
        else {
            $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
        }
    });
});
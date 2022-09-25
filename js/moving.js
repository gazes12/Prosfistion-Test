/*993*/

/* $(window).resize(() =>{
    if($(window).width() < 993){
        $('.about-us').prepend($('.logo'));
        $('.logo').css('text-align', 'center');
        $('.logo').css('position', 'static');
    }else{
        $('.about-us__header').prepend($('.logo'));
        $('.logo').css('text-align', 'left');
        $('.logo').css('position', 'absolute');
    }
});
 */

/*769*/
function trigger() {
    if($(window).width() < 769){
        $('.menu-mobile').prepend($('.menu__list'));
    }else{
        $('.menu').prepend($('.menu__list'));
    }
}

$(window).resize(() =>{
    trigger();
});

trigger();

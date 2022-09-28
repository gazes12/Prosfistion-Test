$(document).click((e) =>{
    if( $(e.target).hasClass('recall-buttons__options') ){
        $(e.target).parents('.recall').find('.recall-buttons').toggleClass('visible');
    }else if(!$(e.target).hasClass('recall-buttons__options')){
        $('.recall-buttons').each(function(index, obj){
            obj.classList.remove('visible');
        });
    }
});
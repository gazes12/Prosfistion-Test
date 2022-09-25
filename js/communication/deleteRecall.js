/*Удаление комментария*/
function delComment(data){
    const _this = data;
    const id = _this.attr('id');
    $.ajax({
        url: '../php/communication/delete_recall.php',
        type: 'POST',
        data: {id: id},
        success: function(){
            _this.closest('.recall').remove();
            resultLine.addClass('communication__result_succ visible');
            resultLine.text('Отзыв успешно удален!');
        },
    })
}

$(document).on('click', '.recall-buttons__delete', function(){
    delComment($(this));
});

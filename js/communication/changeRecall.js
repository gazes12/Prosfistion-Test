/* Изменение комментария */
cancelUpdateds.click((e) =>{
    e.preventDefault();

    change_name.val('');
    change_surname.val('');
    change_recall.val('');   
});

let _this = null;
let _thisId = null;

function changeComment(data){
    _this = data;
    _thisId = _this.attr('id');

    change_name.val(_this.closest('.recall__people').find('.recall__people-fio-name').text());
    change_surname.val(_this.closest('.recall__people').find('.recall__people-fio-surname').text());
    change_recall.val(_this.closest('.recall__people').next('.recall__text').text());

    change_id.html('id: ' + _thisId)

    create_form.removeClass('visible');
    change_form.addClass('visible');

;
    recalls__result.addClass('recalls__result--succ visible');
    recalls__result.text('Измените отзыв!');
}

applyUpdateds.click((e) =>{
    e.preventDefault();

    const nameValue= change_name.val();
    const surnameValue = change_surname.val();
    const recallValue = change_recall.val();


    $.ajax({
        url: '../php/recalls/change_recall.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: _thisId,
            newName: nameValue,
            newSurName: surnameValue,
            newRecall: recallValue,
        },

        success: function(result){;
            if(result.errors){
                recalls__result.html(`<div class="comments__result--error comments__result">${result.errors}</div>`)
            }else{
                _this.closest('.recall__people').find('.recall__people-fio-name').html(`
                <p class="recall__people-fio-name">${result.updatedRecall[0].name}</p>
                `);

                _this.closest('.recall__people').find('.recall__people-fio-surname').html(`
                <p class="recall__people-fio-surname">${result.updatedRecall[0].surname}</p> 
                `);

                _this.closest('.recall').find('.recall__text').html(`
                <p class="recall__people-fio-surname">${result.updatedRecall[0].recall}</p> 
                `);

                recalls__result.html(`<div class="comments__result--succ comments__result">Комментарий изменен!</div>`);
            }
        },
    });
});

$(document).on('click', '.recall__people-buttons-change', function(){
    changeComment($(this));
});
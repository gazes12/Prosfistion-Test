/* Добавление комментария */
createForm.submit((e) =>{
    e.preventDefault();


    let nameValue = e.target.name.value;
    let surnameValue = e.target.surname.value;
    let recallValue = e.target.recall.value;

    startThrottle([nameValue, surnameValue, recallValue]);
});


function addCommentFn(reset_timeComment, values){
    $.ajax({
        url: '../../php/communication/add_recall.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            name: values[0],
            surname: values[1],
            recall : values[2],
        },

        success: function(result){
            if(result.error){
                reset_timeComment();
                resultLine.addClass('visible');
                resultLine.text(result.error);
            }else{
                recalls.append(`
                <div class="recall">
                    <div class="recall-top">
                        <div class="recall-fio">
                            <div class="recall-fio__name">${result.newRecall[0].name}</div>
                            <div class="recall-fio__surname">${result.newRecall[0].surname}</div>
                            <div class="recall-fio__status online" data-userId="${result.newRecall[0].userId}"> </div>
                        </div>
    
                        <div class="recall-buttons">
                            <button class="recall-buttons__change" id="${result.newRecall[0].id}">Изменить</button>
                            <button class="recall-buttons__delete" id="${result.newRecall[0].id}">Удалить</button>
                        </div>
                    </div>
    
                    <div class="recall-bottom">
                        <div class="recall-bottom__text">${result.newRecall[0].recall}</div>
                    </div>                                    
                </div>
                   
                `);
            }
        }
    });
}


const throttle = (func, ms) =>{
    return function(values){
        let time_last;
        let difference_time;

        time_last = localStorage.getItem('time_last');
        difference_time = $.now() - time_last;

        if(!time_last){
            localStorage.setItem('time_last', $.now());
            console.log('Первый раз.');
        }


        if(difference_time >= ms){
            let timer;
            let count;

            localStorage.setItem('time_last', $.now());

            func.apply(this, [() => {
                clearInterval(timer);
                localStorage.setItem('time_last', 0);
                resultLine.removeClass('visible');
            }, values]);


            count = ms / 1000;
            resultLine.addClass('visible');
            timer = setInterval(() =>{
                count--;
                resultLine.text(count);

                if(count < 1){
                    clearInterval(timer);
                    resultLine.removeClass('visible');
                }
            }, 1000);
        }
    }
}

const startThrottle = throttle(addCommentFn, 5000);








$(document).ready(() =>{

    let statusesCollection;
    let counter = 0;

    function globalCheck(){ 
        $.ajax({
            type: 'POST',
            url: '../php/communication/update_status.php',
            dataType: 'JSON', 
            data: {
                action: 3,
            },
        
            success: function(result){
                statusesCollection = document.getElementsByClassName('recall-fio__status');
                let i = 0;
                for(let status of statusesCollection){
                    if(status.getAttribute('data-userId') == result.info[i].user_id && result.info[i].status == 0){
                        status.classList.remove('online');
                        status.classList.add('offline');
                    }else if(status.getAttribute('data-userId') == result.info[i].user_id && result.info[i].status == 1){
                        status.classList.remove('offline');
                        status.classList.add('online');                    
                    }
                    i++;
                }
            }
        });   
    }

    
    function setOnline(){
        $.ajax({
            type: 'POST',
            url: '../php/communication/update_status.php',
            data: {
                action: 1,
            },

            success: function(result){
                globalCheck();
            }
        });
    }

    function setOffline(){
        $.ajax({
            type: 'POST',
            url: '../php/communication/update_status.php',
            data: {
                action: 0,
            },

            success: function(result){
                globalCheck();
            }
        });
    }


    function incrementCounter(){
        counter++;

        if(counter >= 2){
            setOffline();
        }else{
            setOnline();
        }
    }

    let interval = setInterval(incrementCounter, 1000);

    incrementCounter();





    $(window).scroll(() => counter = 0);
    $('.recalls__column-recalls').scroll(() => counter = 0);
    $(this).mousemove(() => counter = 0);
    $(this).keypress(() => counter = 0);
    $(this).touchstart(() => counter = 0);
    $(this).touchend(() => counter = 0);
    $(this).touchcancel(() => counter = 0);
    $(this).touchmove(() => counter = 0);

});
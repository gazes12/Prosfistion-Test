const arrow = $('.communication__arrow');
const wrapper = $('.communication__wrapper');
let offsetForm;
let offsetArrow;

function getOffsets(){
    offsetForm = change_form.css('right');
    offsetArrow = $('.communication__forms').width();
}

function checkPosition(){
    if(arrow.hasClass('right')){
        moveToLeft();
    }else if(arrow.hasClass('left')){
        moveToRight();
    }    
}

function moveToLeft(){
    arrow.removeClass('right');
    arrow.addClass('left');
    
    wrapper.css('transform', `translateX(0px)`);
    create_form.removeClass('opacity');
    change_form.addClass('opacity');
}

function moveToRight(){
    arrow.removeClass('left');
    arrow.addClass('right');

    wrapper.css('transform', `translateX(${offsetForm})`);
    change_form.removeClass('opacity');
    create_form.addClass('opacity');   
}

$(window).on('resize', getOffsets);


arrow.click(() => checkPosition());

moveToRight();
getOffsets();
checkPosition();


/*Swipe*/
wrapper[0].addEventListener('touchstart', touchStart);
wrapper[0].addEventListener('touchmove', touchMove);

let xS;
let yS;

let xM;
let yM;

let xDiff;
let yDiff;

let direction;
let timeMark;


function touchStart(event){
    timeMark = Date.now();

    xS = event.touches[0].clientX;
    yS = event.touches[0].clientY;
}

function touchMove(event){
    if(Date.now() - timeMark > 100){
        xM = event.changedTouches[0].clientX;
        yM = event.changedTouches[0].clientY;
    
        checkDirection();
    }

/*     xM = event.changedTouches[0].clientX;
    yM = event.changedTouches[0].clientY;

    checkDirection(); */
}


function moveForms(){
    if(direction == 'right'){
        moveToRight();
    }else if(direction == 'left'){
        moveToLeft();
    }
}

function checkDirection(){
    xDiff = xS - xM;
    yDiff = yS - yM;
    if(Math.abs(xDiff) > Math.abs(yDiff)){
        if(xDiff > 0) direction = 'left';
        else direction = 'right';
    }

    console.log(direction);
    moveForms();
}
const resultLine = $('.communication__result');
const createForm = $('.create-recall');

const create_name = $('.form-content__create-recall > .form-content__name');
const create_surname = $('.form-content__create-recall > .form-content__surname');
const create_recall = $('.form-content__create-recall > .form-content__recall');


const change_name = $('.form-content__change-recall > .form-content__name');
const change_surname = $('.form-content__change-recall > .form-content__name');
const change_recall = $('.form-content__change-recall > .form-content__name');


const send_btn = $('.form-content__create-recall > .buttons-content > .button_send');
const clear_btn = $('.form-content__create-recall > .buttons-content > .button_clear');

const applyChanges = $('.form-content__change-recall > .buttons-content > .button_send');
const cancelChanges = $('.form-content__change-recall > .buttons-content > .button_clear');


const swither = $('.recalls__arrow');
const create_form = $('.create-recall');
const change_form = $('.change-recall');

const recalls = $('.recalls');
const recall = $('.recall');
const options = $('.recall-buttons__options');

function lookResult(type, text){
    resultLine.removeClass('communication__result_succ communication__result_error');
    resultLine.addClass(`visible communication__result_${type}`);
    resultLine.text(text);
}
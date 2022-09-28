const body = $('body');

const light = $('.change-theme--light');
const dark = $('.change-theme--dark');

if(localStorage.getItem('theme') !== null){
    changeTheme(localStorage.getItem('theme'))
}else{
    changeTheme('light');
}

light.click(() => changeTheme('light'));
dark.click(() => changeTheme('dark'));

function changeTheme(theme){
    body.removeClass('dark');
    body.removeClass('light');
    if(theme == 'dark'){
        localStorage.setItem('theme', 'dark');
        body.addClass('dark');

        dark.addClass('hidden');
        light.removeClass('hidden');
    }else if(theme == 'light'){
        localStorage.setItem('theme', 'light');
        body.addClass('light');

        light.addClass('hidden');
        dark.removeClass('hidden');
    }
}

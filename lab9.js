function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}
function clickButton(button) {
    if(button.innerHTML == 'Имя')
        button.innerHTML = 'Фамилия';
    else
        button.innerHTML = 'Имя';
}
function clickAction(button) {
    if(button.innerHTML == 'Нажми меня')
        button.innerHTML = 'Ещё раз нажми';
    else if(button.innerHTML == 'Ещё раз нажми')
            button.innerHTML = 'Ещё';
    else if(button.innerHTML == 'Ещё')
            button.innerHTML = 'Начать сначала';
    else
        button.innerHTML = 'Нажми меня';      
}
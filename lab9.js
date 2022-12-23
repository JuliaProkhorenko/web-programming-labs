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
    if (button.innerHTML == 'Нажми меня') {
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'IndianRed';
    }
    else if (button.innerHTML == 'Ещё раз нажми') {
        button.innerHTML = 'Ещё';
        button.style.color = 'SteelBlue';
    }  
    else if (button.innerHTML == 'Ещё') {
        button.innerHTML = 'Начать сначала';
           button.style.color = 'BlueViolet'; 
        }
    else {
        button.innerHTML = 'Нажми меня';
        button.style.color = 'MediumAquamarine';
    }   
}
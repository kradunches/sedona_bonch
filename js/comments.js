let commentForm = document.querySelector('.form__feedback');
let commentList = document.querySelector('.comment-feed__list');
let commentUserName = document.querySelector('.form__input-name');
let commentUserSurname = document.querySelector('.form__input-surname');
let commentField = document.querySelector('.form__emotions-comment');
let submitButton = document.querySelector('.form__submit-button');
let modalSuccess = document.querySelector('.sended');
let buttonCloseSuccess = document.querySelector('.sended__close-button');
let modalWrong = document.querySelector('.something-wrong');
let buttonCloseWrong = document.querySelector('.something-wrong__close-button');


regexp = new RegExp(">|<|script|хуй|хуи|хуе|пизд|сук|бляд|пидор|пидар|пидр|мраз|козел|козл|шлюх|шлюш|проститут|еба|ебо|ёба|ёбо|йоб", "gi");

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    if(regexp.test(commentField.value))
    {
        modalWrong.classList.remove('visually-hidden');
        return;
    }

    let newComment = document.createElement('li');
    newComment.classList.add('comment-feed__user-comment');

    let nowDate = new Date();

    newComment.innerHTML = `<div class=\"comment-feed__user-info\"><p class=\"comment-feed__user-name\">${commentUserName.value} ${commentUserSurname.value}</p><p class=\"comment-feed__user-date\">${nowDate.getDate()}.${nowDate.getMonth() + 1}.${nowDate.getFullYear()}</p></div><p class=\"comment-feed__user-text\">${commentField.value}</p>`;
    
     commentList.append(newComment);
     modalSuccess.classList.remove('visually-hidden');

};

buttonCloseSuccess.addEventListener('click', function() {
    modalSuccess.classList.add('visually-hidden');
});

buttonCloseWrong.addEventListener('click', function(){
    modalWrong.classList.add('visually-hidden');
})

/*
i - С этим флагом поиск не зависит от регистра: нет разницы между A и a.
g - С этим флагом поиск ищет все совпадения, без него – только первое.
m - Многострочный режим (рассматривается в главе Многострочный режим якорей ^ $, флаг "m").
s - Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
u - Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
y - Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y")
*/
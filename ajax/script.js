'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

                                    //методы вызова
    // request.open(method, url, async, login, pass);
    request.open('GET', 'js/current.json');
    //заголов для передачи джейсон файлов
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // отправка запроса
    request.send();

    request.addEventListener('load', () => {
        if ( request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            
        } else {
            inputUsd.value = 'что-то пошло не так';
        }
    });
                                        // свойства
    // status   номер ошибки
    // statusText   текстовое описание ошибки
    // response   ответ от сервера
    // readyState    содержит текущее состояние нашего запроса
                                        //события
    // readystatechange отслеживает статус готовности запроса в тек момент, следит за readyState
});
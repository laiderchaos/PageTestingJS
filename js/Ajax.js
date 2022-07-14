'use strict';

// Old version of AJAX.
 const inputRub = document.querySelector('.rub'),
       inputUsd = document.querySelector('.usd');

 inputRub.addEventListener('input', () => {
     const request = new XMLHttpRequest();

     request.open('GET', 'js/current.json'); // Collects settings to make a request.
     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
     request.send();

     request.addEventListener('load', () => {
         if (request.readyState === 4 && request.status === 200){
             console.log(request.response);
             const data = JSON.parse(request.response);
             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
         }else{
             inputUsd.value = "Что-то пошло не так, повторите позже";
         }
     });
 });

 const forms = document.querySelector('form');

 const message = {
   loading: 'Loading',
   success: 'Thank you',
   failure: 'Something wrong'
 };



function postData(form) {
    form.addEventListener('submit', (e) => {
       e.preventDefault();

       const statusMessage = document.createElement('div');
       statusMessage.classList.add('status');
       statusMessage.textContent = message.loading;
       form.append(statusMessage);

       const request = new XMLHttpRequest();
       request.open('POST', 'server.php');

       request.setRequestHeader('Content-type', 'multipart/form-data');
       const formData = new FormData(form);

       request.send(formData);

       request.addEventListener('load', () => {
          if (request.status === 200){
              console.log(request.response);
              statusMessage.textContent = message.success;
          }else{
              statusMessage.textContent = message.failure;
          }
       });
    });
}


 // New version of AJAX

const opened_login_window = document.querySelector('.login');
const close_login_window = document.querySelector('.close_window');
const login_and_registration = document.querySelector('.logIn_and_Registration');
const modal_wrapper = document.querySelector('.modal-wrapper');
const registration = document.querySelectorAll('div.registration')
let reg_window_counter = 0;
if (reg_window_counter === 0) {
    login_and_registration.style.visibility = 'hidden';
    modal_wrapper.style.visibility = 'hidden';
}
// Function to close an object
function close_window(clickable_object, closed_object) {
    clickable_object.onclick = function () {
        reg_window_counter = 0;
        closed_object.style.visibility = 'hidden';
        modal_wrapper.style.visibility = 'hidden';
    }
}
// Function to open an object
function open_window(clickable_object, opened_object) {
    clickable_object.onclick = function () {
        reg_window_counter = 1;
        opened_object.style.visibility = 'visible';
        modal_wrapper.style.visibility = 'visible'
    }
}

let perebor = function (array) {
    for (let i = 0;i < registration.length; i++){
        console.log(array[i])
    }
}
perebor(registration);
open_window(opened_login_window, login_and_registration);
close_window(close_login_window, login_and_registration);
close_window(modal_wrapper, login_and_registration);


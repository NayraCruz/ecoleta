const buttonSearch = document.querySelector('.js-btn-show-modal');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

buttonSearch.addEventListener('click', () => {
    modal.classList.remove('-hide');
});

modalClose.addEventListener('click', () => {
    modal.classList.add('-hide');
});
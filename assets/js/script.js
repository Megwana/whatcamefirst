
// Modal Box for Instructions on how to play the Quiz Game.
// I learnt how to create this from a tutorial - https://www.youtube.com/watch?v=KjQ8uvAt9kQ and styled the modal how I want.
var modalButton = document.querySelector('#modal-btn');
var modalBox = document.querySelector('.modal-box');
var modalClose = document.querySelector('.modal-close');

modalButton.addEventListener('click',function(){
    modalBox.classList.add('modal-active');
});

modalClose.addEventListener('click', function(){
    modalBox.classList.remove('modal-active');
});

// Modal Box for Instructions on how to play the Quiz Game.
var modalButton = document.querySelector('#modal-btn');
var modalBox = document.querySelector('.modal-box')

modalButton.addEventListener('click',function(){
    modalBox.classList.add('modal-active')
});
4

// NATIVE JS
document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.js-open-modal');
    const overlay      = document.querySelector('#overlay-modal');
    const closeButtons = document.querySelectorAll('.js-modal-close');

    // открытие модального окна
    modalButtons.forEach(function(item) {
        
        item.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('NATIVE JS MODAL WINDOW')

            let modalId = this.getAttribute('data-modal');
            let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    });

    // крестик для закрытия моадального окна
    closeButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    // закрытие по клавише ESC
    document.body.addEventListener('keyup', function (e) {

        if (e.keyCode == 27 || e.key == 'Escape') {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay.active').classList.remove('active');
        };
    }, false);

    // скрытие при нажатии на фон
    // overlay.addEventListener('click', function() {
    //     document.querySelector('.modal.active').classList.remove('active');
    //     this.classList.remove('active');
    // });
});


// JQUERY
$('.jq-open-modal').click(function(event) {

    console.log('JQUERY MODAL WINDOW')
    event.preventDefault();
    
    const modalName = $(this).attr('data-modal');
    const modal = $('.jq-modal[data-modal="' + modalName + '"]');
    
    modal.addClass('is-show');
    $('#overlay-modal').addClass('active')
 });
 
 $('.jq-modal-close').click(function() {
    $(this).parent('.jq-modal').removeClass('is-show');
    $('#overlay-modal').removeClass('active');
 });
    
 $('#overlay-modal').click(function() {

    if (document.querySelector('.modal.active')) {
        document.querySelector('.modal.active').classList.remove('active');
    } else {
        $('.jq-modal.is-show').removeClass('is-show');
    }
    
    $(this).removeClass('active');
 })
 
 



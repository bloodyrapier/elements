document.addEventListener('DOMContentLoaded', function() {
    // БУРГЕР МЕНЮ
    const burgerIcons = document.querySelectorAll('.burger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    // Обработка кликов по иконке бургер меню
    burgerIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            mobileMenu.classList.toggle('active');
        });
    });
    // Закрытие меню при клике на пункт меню
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.burger-menu') && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    });
    //ПОПАП С ФОРМОЙ
    const popupTrigger = document.querySelector('.footer-form-image img');
    const popupOverlay = document.getElementById('popupOverlay');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (popupTrigger && popupOverlay) {
        // Открываем попап при клике на картинку
        popupTrigger.addEventListener('click', function() {
            popupOverlay.style.display = 'flex';
        });
        
        // Закрываем попап при клике вне контента
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }
    if (submitBtn && popupOverlay) {
        // Закрываем попап при клике на кнопку "Отправить"
        submitBtn.addEventListener('click', function() {
            popupOverlay.style.display = 'none';
        });
    }
    //ВИДЕО ПРИ НАВЕДЕНИИ
    const videos = document.querySelectorAll('.bg-video');
    const isMobile = window.innerWidth < 768;
    videos.forEach(video => {
        if (isMobile) {
            // Автозапуск на мобильных
            video.style.opacity = '1';
        } else {
            // Видео по ховеру на десктопах
            video.parentElement.addEventListener('mouseenter', () => {
                video.style.opacity = '1';
                video.play();
            });
            video.parentElement.addEventListener('mouseleave', () => {
                video.style.opacity = '0';
                video.pause();
                video.currentTime = 0;
            });
        }
    });
});

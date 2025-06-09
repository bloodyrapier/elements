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

    function showvideo() {
        const isMobile = window.innerWidth < 768;
        videos.forEach(video => {
            const parent = video.parentElement;
            parent.removeEventListener('mouseenter', MouseEnter);
            parent.removeEventListener('mouseleave', MouseLeave);
            
            if (isMobile) {
                // Автозапуск на мобильных
                video.style.opacity = '1';
                video.play().catch(e => console.log('Autoplay prevented:', e));
            } else {
                // Видео по ховеру на десктопах
                video.style.opacity = '0';
                video.pause();
                video.currentTime = 0;
                
                // Добавляем обработчики для десктопа
                parent.addEventListener('mouseenter', MouseEnter);
                parent.addEventListener('mouseleave', MouseLeave);
            }
        });
    }
    // Обработчики для десктопного поведения
    function MouseEnter(e) {
        const video = e.currentTarget.querySelector('.bg-video');
        video.style.opacity = '1';
        video.play();
    }
    function MouseLeave(e) {
        const video = e.currentTarget.querySelector('.bg-video');
        video.style.opacity = '0';
        video.pause();
        video.currentTime = 0;
    }
    showvideo();
    // Обработка изменения размера окна
    window.addEventListener('resize', showvideo);
});
